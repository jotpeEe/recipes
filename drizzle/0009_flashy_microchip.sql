ALTER TABLE "steps" RENAME TO "step";--> statement-breakpoint
ALTER TABLE "ingredient" DROP CONSTRAINT "ingredient_step_id_steps_id_fk";
--> statement-breakpoint
ALTER TABLE "step" DROP CONSTRAINT "steps_recipeId_recipe_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_step_id_step_id_fk" FOREIGN KEY ("step_id") REFERENCES "public"."step"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "step" ADD CONSTRAINT "step_recipeId_recipe_id_fk" FOREIGN KEY ("recipeId") REFERENCES "public"."recipe"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
