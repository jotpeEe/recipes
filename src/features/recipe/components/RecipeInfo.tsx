import { Clock, CookingPot, SlidersHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

import { type RecipeProps } from './Recipe';
import { RecipeServings } from './recipe-servings';

export const RecipeInfo = ({
  prepTime,
  cookTime,
  servings,
  tags,
}: Pick<RecipeProps, 'prepTime' | 'cookTime' | 'servings' | 'tags'>) => (
  <>
    <div className="font-semibold">Informacje:</div>
    <ul className="grid gap-3">
      <li className="flex items-start justify-between gap-2 sm:gap-12">
        <div className="flex items-center justify-center gap-1">
          <SlidersHorizontal className="size-4" />
          <span className="text-muted-foreground">kategorie</span>
        </div>
        <div className="grid w-full grid-cols-[repeat(auto-fill,_minmax(50px,_1fr))] gap-2">
          {tags?.map((tag, index) => (
            <Badge
              key={`${tag}-${index}`}
              className="flex items-center justify-center rounded-md"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </li>
      <li className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <Clock className="size-4" />
          <span className="text-muted-foreground">przygotowanie</span>
        </div>
        <span>{prepTime}</span>
      </li>
      <li className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <CookingPot className="size-4" />
          <span className="text-muted-foreground">gotowanie</span>
        </div>
        <span>{cookTime}</span>
      </li>
      <li>
        <RecipeServings value={0} />
      </li>
    </ul>
  </>
);
