<h1 align="center">CIDTEC_PROY_ALCALDIA.</h1>

<h3 align="center">TRABAJAR DE FORMA LOCAL</h3>

# PASOS GENERALES

1. Clonar proyecto

# Pasos en el Backend

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

1. `composer install`
2. Clonar el archivo `.copy.env` y renombrarlo a `.env`
3. Cambiar las variables de entorno
4. Levantar xampp
5. Crear las migraciones `php artisan migrate`
6. Crear el usuario administrador `php artisan db:seed`
6. Levantar el servidor `php artisan serve`

# Pasos en el Frontend

<p align="center"><a href="#" target="_blank"><img src="https://docs.angular.lat/assets/images/logos/angular/logo-nav@2x.png" width="400"></a></p>

1. Instalar dependencias `npm i`
2. Levantar el servidor `ng serve`

# Pasos en el Frontend VR360

<p align="center"><a href="#" target="_blank"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="400"></a></p>

1. Instalar dependencias `npm i`
2. Levantar el servidor `npm run dev`

<hr/>
<p align="center"><img src="https://user-images.githubusercontent.com/97072752/220242050-603b2c30-33f0-499f-b298-31eaf5697182.png"/></p>
<hr/>

<h3 align="center">DESPLEGAR A INTERNET</h3>

# Pasos en el Backend

1. Desplegar a un servidor
2. Ejecutar las migraciones

# Pasos en el Frontend

1. Generar el dist `ng build`
2. Subir a un servidor

# Pasos en el Frontend 360

1. Generar el dist `npm run build`
2. Subir a un servidor

# Cambio de Url's
1. En el archivo frontend/src/environments/environment.prod.ts se debe poner las urls de los servidores de cada aplicacion
2. En el archivo vr360/src/config.jsx se debe poner las urls de los servidores de cada aplicacion
