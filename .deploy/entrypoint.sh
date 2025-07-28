#!/bin/bash

#Merci Pelagoss pour le coup de main - https://github.com/Pelagoss

pwd > /var/log/test.log

sed 's/$POSTGRES_DB/'"$POSTGRES_DB"'/' -i docker-compose.yml
sed 's/$POSTGRES_PASSWORD/'"$POSTGRES_PASSWORD"'/' -i docker-compose.yml
sed 's/$POSTGRES_USER/'"$POSTGRES_USER"'/' -i docker-compose.yml

sed 's/$POSTGRES_DB/'"$POSTGRES_DB"'/' -i ./back/.env
sed 's/$POSTGRES_DB/'"$POSTGRES_DB"'/' -i ./back/.env.prod
sed 's/$POSTGRES_PASSWORD/'"$POSTGRES_PASSWORD"'/' -i ./back/.env
sed 's/$POSTGRES_PASSWORD/'"$POSTGRES_PASSWORD"'/' -i ./back/.env.prod
sed 's/$POSTGRES_USER/'"$POSTGRES_USER"'/' -i ./back/.env
sed 's/$POSTGRES_USER/'"$POSTGRES_USER"'/' -i ./back/.env.prod

#TODO : ajouter les variables pour :
# container_name dans docker_compose.yml

echo "start migration"
echo $(date) > /var/log/dmm.log && echo $(php /var/www/html/bin/console d:m:m --no-interaction --allow-no-migration) >> /var/log/dmm.log
echo "end migration"

echo "clearing cache"
php /var/www/html/bin/console c:c --no-interaction
echo "cache cleared"
exec "$@"
