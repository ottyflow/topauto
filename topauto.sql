-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-09-2018 a las 03:56:27
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `topauto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `codigo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `codigo` int(10) UNSIGNED NOT NULL,
  `razon_social` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nombre_fantasia` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `id_provincia` int(11) DEFAULT '0',
  `id_iva` int(11) DEFAULT '0',
  `id_localidad` int(11) DEFAULT '0',
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `web` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `cuenta` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `cuit` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `telefono` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `telefono2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `direccion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `codigo_postal` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `condicionesiva`
--

CREATE TABLE `condicionesiva` (
  `codigo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fragancias`
--

CREATE TABLE `fragancias` (
  `codigo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fraganciasxarticulo`
--

CREATE TABLE `fraganciasxarticulo` (
  `id_articulo` int(11) NOT NULL DEFAULT '0',
  `id_fragancia` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidades`
--

CREATE TABLE `localidades` (
  `codigo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `codigo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medios_de_pago`
--

CREATE TABLE `medios_de_pago` (
  `codigo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1),
(2, '2018_09_06_192217_create_roles_table', 1),
(3, '2018_09_07_210113_create_productos_table', 1),
(4, '2018_09_08_000000_create_users_table', 1),
(5, '2018_09_09_012806_create_categorias_table', 1),
(6, '2018_09_10_012945_create_marcas_table', 1),
(7, '2018_09_11_013012_create_localidades_table', 1),
(8, '2018_09_12_013031_create_provincias_table', 1),
(9, '2018_09_13_013108_create_condiciones_iva_table', 1),
(10, '2018_09_14_013153_create_fragancias_table', 1),
(11, '2018_09_15_013241_create_zonas_table', 1),
(12, '2018_09_16_013307_create_medios_de_pago_table', 1),
(13, '2018_09_17_013355_create_fraganciasxarticulo_table', 1),
(14, '2018_09_18_013519_create_zonasxvendedor_table', 1),
(15, '2018_09_19_013620_create_clientes_table', 1),
(16, '2018_09_20_013914_create_pedidoscab_table', 2),
(17, '2018_09_21_014713_create_pedidosdet_table', 3),
(18, '2018_09_9_000000_create_users_table', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidoscab`
--

CREATE TABLE `pedidoscab` (
  `id_transaccion` int(10) UNSIGNED NOT NULL,
  `numero` int(11) NOT NULL DEFAULT '0',
  `id_cliente` int(11) NOT NULL DEFAULT '0',
  `id_vendedor` int(11) NOT NULL DEFAULT '0',
  `total` double(15,8) NOT NULL DEFAULT '0.00000000',
  `id_mpago` int(11) NOT NULL DEFAULT '0',
  `controlado` tinyint(1) NOT NULL DEFAULT '0',
  `descuento` double(15,8) NOT NULL DEFAULT '0.00000000',
  `notas` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidosdet`
--

CREATE TABLE `pedidosdet` (
  `transaccion` int(11) NOT NULL DEFAULT '0',
  `articulo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `cantidad` double(15,8) NOT NULL DEFAULT '0.00000000',
  `precio` double(15,8) NOT NULL DEFAULT '0.00000000',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `codigo` int(10) UNSIGNED NOT NULL,
  `descripcion` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `descripcion_adicional` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `precio` double(15,8) NOT NULL DEFAULT '0.00000000',
  `precio2` double(15,8) DEFAULT '0.00000000',
  `precio3` double(15,8) DEFAULT '0.00000000',
  `id_marca` int(11) DEFAULT '0',
  `id_categoria` int(11) DEFAULT '0',
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `activo` tinyint(1) DEFAULT '0',
  `oferta_volumen` tinyint(1) DEFAULT '0',
  `envase_nuevo` tinyint(1) DEFAULT '0',
  `escala_descuento` tinyint(1) DEFAULT '0',
  `oferta_lanzamiento` tinyint(1) DEFAULT '0',
  `agotar_stock` tinyint(1) DEFAULT '0',
  `embarque` tinyint(1) DEFAULT '0',
  `fragancias` int(11) DEFAULT '0',
  `talles` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `condicion` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `condicion`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', 1, NULL, NULL),
(2, 'Regular', 1, NULL, NULL),
(3, 'Vendedor', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contrasena` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `id_zona` int(10) UNSIGNED NOT NULL,
  `id_rol` int(10) UNSIGNED NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas`
--

CREATE TABLE `zonas` (
  `codigo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonasxvendedor`
--

CREATE TABLE `zonasxvendedor` (
  `id_vendedor` int(11) NOT NULL DEFAULT '0',
  `id_zona` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `categorias_nombre_unique` (`nombre`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `clientes_razon_social_unique` (`razon_social`);

--
-- Indices de la tabla `condicionesiva`
--
ALTER TABLE `condicionesiva`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `condicionesiva_nombre_unique` (`nombre`);

--
-- Indices de la tabla `fragancias`
--
ALTER TABLE `fragancias`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `fragancias_nombre_unique` (`nombre`);

--
-- Indices de la tabla `localidades`
--
ALTER TABLE `localidades`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `localidades_nombre_unique` (`nombre`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `marcas_nombre_unique` (`nombre`);

--
-- Indices de la tabla `medios_de_pago`
--
ALTER TABLE `medios_de_pago`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `medios_de_pago_nombre_unique` (`nombre`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `pedidoscab`
--
ALTER TABLE `pedidoscab`
  ADD PRIMARY KEY (`id_transaccion`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_nombre_unique` (`nombre`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_usuario_unique` (`usuario`),
  ADD KEY `users_id_rol_foreign` (`id_rol`);

--
-- Indices de la tabla `zonas`
--
ALTER TABLE `zonas`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `zonas_nombre_unique` (`nombre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `codigo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `codigo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `condicionesiva`
--
ALTER TABLE `condicionesiva`
  MODIFY `codigo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `fragancias`
--
ALTER TABLE `fragancias`
  MODIFY `codigo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `localidades`
--
ALTER TABLE `localidades`
  MODIFY `codigo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `codigo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medios_de_pago`
--
ALTER TABLE `medios_de_pago`
  MODIFY `codigo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `pedidoscab`
--
ALTER TABLE `pedidoscab`
  MODIFY `id_transaccion` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `codigo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas`
--
ALTER TABLE `zonas`
  MODIFY `codigo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
