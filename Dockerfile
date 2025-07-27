FROM php:8.3.6-apache AS composer

ARG ENV
ENV ENV=$ENV
ENV APP_ENV=$ENV
ENV COMPOSER_ALLOW_SUPERUSER=1

WORKDIR /app
RUN apt-get update  \
    && apt-get install -y git zip unzip acl

#Composer
RUN curl -o /usr/local/bin/composer https://getcomposer.org/download/2.2.6/composer.phar \
    && chmod +x /usr/local/bin/composer

COPY back/ /app/

RUN composer install -a --no-dev --no-interaction

RUN chown -R 1000:1000 vendor
RUN chmod -R 775 vendor

#Yarn
FROM php:8.3.6-apache AS yarn

# NodeJS
RUN rm -rf /var/lib/apt/lists/  \
    && curl -sL https://deb.nodesource.com/setup_20.x | bash -  \
    && apt-get install -y nodejs git

# Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update  \
    && apt-get install -y yarn

WORKDIR /app

COPY front/ /app/

RUN yarn install
RUN yarn build --emptyOutDir

#Packaging
FROM php:8.3.6-apache

ARG ENV
ENV ENV=$ENV
ENV APP_ENV=$ENV

RUN apt-get update  \
    && apt-get install -y netcat-traditional libpq-dev acl

#PGSQL
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
RUN docker-php-ext-install pdo pgsql pdo_pgsql

RUN a2enmod rewrite

#Build
COPY .deploy/vhosts.$ENV.conf /etc/apache2/sites-available/000-default.conf
COPY --from=composer /app/vendor /var/www/html/vendor
COPY back/ /var/www/html/
COPY --from=yarn /app/back/public/build /var/www/html/public/build

EXPOSE 80

RUN chown -R 1000:1000 vendor
RUN chmod -R 775 vendor

COPY .deploy/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["/usr/bin/entrypoint.sh"]
