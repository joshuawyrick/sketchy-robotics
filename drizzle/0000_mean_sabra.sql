CREATE TABLE `activities` (
	`id` text PRIMARY KEY NOT NULL,
	`lead_id` text NOT NULL,
	`actor` text NOT NULL,
	`action` text NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `cms_pages` (
	`url` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`h1` text NOT NULL,
	`meta` text NOT NULL,
	`body` text NOT NULL,
	`state` text DEFAULT 'draft' NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` text PRIMARY KEY NOT NULL,
	`reference` text NOT NULL,
	`idempotency` text NOT NULL,
	`type` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text DEFAULT '' NOT NULL,
	`city` text NOT NULL,
	`event_date` text,
	`status` text DEFAULT 'new' NOT NULL,
	`details` text NOT NULL,
	`source` text NOT NULL,
	`consent` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `leads_reference_unique` ON `leads` (`reference`);--> statement-breakpoint
CREATE UNIQUE INDEX `leads_idempotency_unique` ON `leads` (`idempotency`);--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` text PRIMARY KEY NOT NULL,
	`lead_id` text NOT NULL,
	`status` text NOT NULL,
	`attempts` integer DEFAULT 0 NOT NULL,
	`error` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `quotes` (
	`id` text PRIMARY KEY NOT NULL,
	`lead_id` text NOT NULL,
	`title` text NOT NULL,
	`lines` text NOT NULL,
	`total` integer NOT NULL,
	`state` text DEFAULT 'draft' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rate_limits` (
	`key` text PRIMARY KEY NOT NULL,
	`hits` integer DEFAULT 1 NOT NULL,
	`expires_at` integer NOT NULL
);
