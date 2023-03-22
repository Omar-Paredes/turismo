# Usa la imagen oficial de PHP 8.0 como imagen base
FROM php:8.0

# Instala las dependencias requeridas para Laravel
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    && docker-php-ext-install zip

# Instala Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Copia los archivos de la aplicación a la imagen de Docker
COPY . /var/www/html

# Instala las dependencias de Laravel usando Composer
RUN composer install

# Establece los permisos de los archivos y carpetas
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expone el puerto 8000
EXPOSE 8000

# Ejecuta el servidor web de Laravel
CMD ["php", "artisan", "serve", "--host", "0.0.0.0", "--port", "8000"]
