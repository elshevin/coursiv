CREATE TABLE `user_course_progress` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`userType` varchar(16) NOT NULL,
	`courseId` varchar(64) NOT NULL,
	`completedModules` text DEFAULT ('[]'),
	`currentModuleId` varchar(64),
	`startedAt` timestamp NOT NULL DEFAULT (now()),
	`lastAccessedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`completedAt` timestamp,
	CONSTRAINT `user_course_progress_id` PRIMARY KEY(`id`)
);
