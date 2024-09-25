import { Badge } from '@/components/ui/badge';

type TRecipeTags = {
  tags: string[];
};
export const RecipeTags = ({ tags }: TRecipeTags) => (
  <div className="grid w-full grid-cols-[repeat(auto-fill,_minmax(50px,_1fr))] gap-2">
    {tags?.map((tag, index) => (
      <Badge
        key={`tag-${tag}-${index}`}
        className="flex items-center justify-center rounded-md"
      >
        {tag}
      </Badge>
    ))}
  </div>
);
