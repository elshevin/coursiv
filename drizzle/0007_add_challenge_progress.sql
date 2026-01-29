CREATE TABLE `user_challenge_progress` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`userType` varchar(16) NOT NULL,
	`challengeId` varchar(64) NOT NULL,
	`startedAt` timestamp NOT NULL DEFAULT (now()),
	`completedTasks` text,
	`lastAccessedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`completedAt` timestamp,
	CONSTRAINT `user_challenge_progress_id` PRIMARY KEY(`id`)
);
