import { Ruler } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type TRecipeScale = {
  value?: number;
};
export const RecipeScale = ({ value }: TRecipeScale) => (
  <div className="fixed bottom-0 right-0 p-5">
    <Popover>
      <PopoverTrigger>
        <Button size="icon" variant="outline" className="size-12">
          <Ruler className="size-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">Place content for the popover here.</PopoverContent>
    </Popover>
  </div>
);
