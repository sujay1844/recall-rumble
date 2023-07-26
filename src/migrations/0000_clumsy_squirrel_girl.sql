CREATE TABLE `entries` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`time` decimal(6,3),
	CONSTRAINT `entries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `time_idx` ON `entries` (`time`);