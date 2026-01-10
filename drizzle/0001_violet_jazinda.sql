CREATE TABLE `demo_users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`username` varchar(64) NOT NULL,
	`displayName` varchar(128),
	`avatarUrl` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`lastLoginAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `demo_users_id` PRIMARY KEY(`id`),
	CONSTRAINT `demo_users_username_unique` UNIQUE(`username`)
);
