use test;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(191) DEFAULT NULL,
  `lastname` varchar(191) DEFAULT NULL,
  `description` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `rol` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `firstname`, `lastname`, `description`, `email`, `rol`, `image`, `is_active`, `reason`)
VALUES
	(1, 'Pepito', 'Hernandez', 'Lorem ipsum', 'dino@fas.com', 'admin', NULL, 1, NULL),
	(2, 'Luis', 'Suarez', 'Lorem ipsum', 'luis@example.com', 'user', NULL, 1, NULL),
	(3, 'Maria', 'velazquez', 'Lorem ipsum', 'maria@example.com', 'user', NULL, 1, NULL),
	(4, 'Paula', 'valencia', 'Lorem ipsum', 'paula@example.com', 'user', NULL, 1, NULL),
	(5, 'Patricia', 'Remnolina', 'Lorem ipsum', 'pato@example.com', 'user', NULL, 1, NULL);