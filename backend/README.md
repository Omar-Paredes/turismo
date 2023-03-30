## Comandos para ejecutar dentro del contenedor de laravel -backend
- docker container exec -it laravel-php /bin/bash
    - composer install
    - php artisan migrate:refresh --seed
    - php artisan key:generate
