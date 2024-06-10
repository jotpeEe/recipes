CREATE TABLE IF NOT EXISTS "ingredient" (
	"id" text PRIMARY KEY NOT NULL,
	"step_id" text NOT NULL,
	"name" text NOT NULL,
	"amount" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "recipe" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"prep_time" text,
	"cook_time" text,
	"servings" integer,
	"tags" text[],
	"created_at" timestamp,
	"image" text[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "steps" (
	"id" text PRIMARY KEY NOT NULL,
	"recipeId" text NOT NULL,
	"cathegory" text,
	"instructions" text[] NOT NULL,
	"temp" text,
	"measure" text,
	"time" text
);
--> statement-breakpoint
ALTER TABLE "note" ALTER COLUMN "text" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "note" ALTER COLUMN "text" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "note" ADD COLUMN "recipeId" text NOT NULL;--> statement-breakpoint
ALTER TABLE "note" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "note" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_step_id_steps_id_fk" FOREIGN KEY ("step_id") REFERENCES "public"."steps"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "steps" ADD CONSTRAINT "steps_recipeId_recipe_id_fk" FOREIGN KEY ("recipeId") REFERENCES "public"."recipe"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "note" ADD CONSTRAINT "note_recipeId_recipe_id_fk" FOREIGN KEY ("recipeId") REFERENCES "public"."recipe"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
