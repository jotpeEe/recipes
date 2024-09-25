import { Edit, Utensils } from 'lucide-react';

import { Button } from '@/components/ui/button';

type TRecipeServings = {
  value?: number;
};
export const RecipeServings = ({ value }: TRecipeServings) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center justify-center gap-1">
      <Utensils className="size-4" />
      <span className="text-muted-foreground">porcje</span>
    </div>
    <div className="space-x-2">
      <div className="flex items-center space-x-2">
        <span>{value}</span>
        <Button size="icon" variant="outline" className="h-6 w-6">
          <Edit className="h-3 w-3" />
        </Button>
      </div>
    </div>
  </div>
);
