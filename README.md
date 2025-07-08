<p align="center"><a href="#" ><img src="https://homesourcesystems.com/wp-content/uploads/2025/05/MobileLogo.svg" width="200" alt="home source systems"></a></p>

<p align="center">
<a href="#"><img src="https://img.shields.io/badge/Laravel-black?style=square&logo=laravel" alt="Laravel"></a>
<a href="#"><img src="https://img.shields.io/badge/-React-black?style=square&logo=react" alt="React"></a>
<a href="#"><img src="https://img.shields.io/badge/-Inertia-black?style=square&logo=Inertia" alt="React"></a>
<a href="#"><img src="https://img.shields.io/badge/-Tailwind-black?style=square&logo=Tailwind)" alt="Tailwind"></a>
<a href="#"><img src="https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql" alt="SQL"></a>
</p>

## About HSS

HSS is a web application leveraging the Laravel Framework, React, and InertiaJS for better integration.

#### Create a new Laravel Project:
```bash
composer create-project laravel/laravel hss
cd hss
```
#### Install Inertia.js Server-Side Adapter:
```bash
composer require inertiajs/inertia-laravel
```
#### Publish Inertia Middleware:
```bash
php artisan inertia:middleware
```
#### Install Node Dependencies and Compile Assets, along with Laravel Development Server launch:
```bash
npm install
npm run dev
php artisan serve
```

### License
The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
