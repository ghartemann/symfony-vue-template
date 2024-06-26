#!/bin/bash

#Merci Pelagoss pour le coup de main - https://github.com/Pelagoss

sed 's/$POSTGRES_DB/'"$POSTGRES_DB"'/' -i docker-compose.yml
sed 's/$POSTGRES_DB/'"$POSTGRES_DB"'/' -i .env
sed 's/$POSTGRES_PASSWORD/'"$POSTGRES_PASSWORD"'/' -i docker-compose.yml
sed 's/$POSTGRES_PASSWORD/'"$POSTGRES_PASSWORD"'/' -i .env
sed 's/$POSTGRES_USER/'"$POSTGRES_USER"'/' -i docker-compose.yml
sed 's/$POSTGRES_USER/'"$POSTGRES_USER"'/' -i .env

#TODO : ajouter les variables pour :
# container_name dans docker_compose.yml

echo "start migration"
echo $(date) > /var/log/dmm.log && echo $(php /var/www/html/bin/console d:m:m --no-interaction --allow-no-migration) >> /var/log/dmm.log
echo "end migration"

echo "clearing cache"
php /var/www/html/bin/console c:c --no-interaction
echo "cache cleared"
exec "$@"
