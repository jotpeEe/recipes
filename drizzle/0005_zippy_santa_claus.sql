ALTER TABLE "recipe" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "recipe" ADD COLUMN "updated" timestamp DEFAULT now();