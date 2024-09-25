'use client';

import React from 'react';

import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { Separator } from '@/components/ui/separator';

import { RecipeScale } from './recipe-scale';
import { RecipeDetails } from './RecipeDetails';
import { RecipeImages } from './RecipeImages';
import { RecipeInfo } from './RecipeInfo';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeNotes } from './RecipeNotes';
import { RecipeSteps } from './RecipeSteps';
import { RecipeTabs } from './RecipeTabs';

export type RecipeProps = {
  title: string;
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  tags?: string[] | undefined;
  notes?:
    | { id: string; author: string; subTitle?: string; text: string; date: string }[]
    | undefined;
  steps: {
    cathegory?: string;
    ingredients: {
      name: string;
      amount: string;
    }[];
    instructions: string[];
    details: {
      temp?: string;
      measure?: string;
      time?: string;
    };
  }[];
  createdAt: string;
  updatedAt: string;
  images?: string[];
};

const Recipe = ({
  title,
  prepTime,
  cookTime,
  servings,
  tags,
  notes,
  steps,
  createdAt,
  updatedAt,
}: RecipeProps) => {
  const categories = steps.map(step => step.cathegory);
  const [current, setCurrent] = React.useState<string | undefined>(categories[0]);
  const [setscale, setSetscale] = React.useState(1);

  const data = React.useMemo(
    () => steps.find(step => step.cathegory === current),
    [current, steps]
  );

  const handleTabChange = (value: string) => {
    setCurrent(value);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">{title}</CardTitle>
          <CardDescription>{createdAt}</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="h-8 w-8">
                <MoreVertical className="h-3.5 w-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6 p-6 text-sm sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] lg:max-w-[1100px]">
        <div className="space-y-6">
          <RecipeImages
            images={[
              { imageUrl: '/post.jpg', alt: 'image' },
              { imageUrl: '/post.jpg', alt: 'image' },
              { imageUrl: '/post.jpg', alt: 'image' },
              { imageUrl: '/post.jpg', alt: 'image' },
            ]}
          />
          <RecipeInfo {...{ ...tags, prepTime, cookTime, servings }} />
          <RecipeNotes notes={notes} />
        </div>
        <div className="space-y-6">
          <RecipeTabs tabs={categories} handleChange={handleTabChange} />
          <RecipeIngredients ingredients={data?.ingredients} />
          <Separator />
          <RecipeSteps steps={data?.instructions} />
          <Separator />
          <RecipeDetails {...data?.details} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Edytowane: <time dateTime="2023-11-23">{updatedAt}</time>
        </div>
        <Pagination className="ml-auto mr-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronLeft className="h-3.5 w-3.5" />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
      <RecipeScale />
    </Card>
  );
};

export default Recipe;
