CREATE TABLE `gallery_items` (
	`id` text PRIMARY KEY NOT NULL,
	`object_key` text NOT NULL,
	`mime` text NOT NULL,
	`title` text DEFAULT '' NOT NULL,
	`title_es` text DEFAULT '' NOT NULL,
	`caption` text DEFAULT '' NOT NULL,
	`caption_es` text DEFAULT '' NOT NULL,
	`alt` text DEFAULT '' NOT NULL,
	`alt_es` text DEFAULT '' NOT NULL,
	`category` text DEFAULT 'portraits' NOT NULL,
	`kind` text DEFAULT 'actual' NOT NULL,
	`state` text DEFAULT 'draft' NOT NULL,
	`featured` integer DEFAULT false NOT NULL,
	`position` integer DEFAULT 0 NOT NULL,
	`rights_confirmed` integer DEFAULT false NOT NULL,
	`created_at` text NOT NULL
);
