ALTER TABLE `email_users` ADD COLUMN `subscriptionStatus` varchar(32) DEFAULT 'none';
--> statement-breakpoint
ALTER TABLE `email_users` ADD COLUMN `subscriptionPlan` varchar(32);
--> statement-breakpoint
ALTER TABLE `email_users` ADD COLUMN `subscriptionStartDate` timestamp;
--> statement-breakpoint
ALTER TABLE `email_users` ADD COLUMN `subscriptionEndDate` timestamp;
--> statement-breakpoint
ALTER TABLE `email_users` ADD COLUMN `fastspringSubscriptionId` varchar(128);
