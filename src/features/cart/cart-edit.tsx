'use client';

import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import {
  type SubmitHandler,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { z } from 'zod';

import { Combobox } from '@/components/Combobox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { FormInput } from '@/components/ui/form-input';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

const seperate = (input: string) => {
  const words = input.split(/\s+/);

  const base = words.findIndex(word => /\d/.test(word));

  if (base === -1) {
    return { index: '', rest: input };
  }

  const wordWithNumber = words[base];

  const restOfString = words
    .slice(0, base)
    .concat(words.slice(base + 1))
    .join(' ');

  return { base: wordWithNumber, rest: restOfString };
};

const path = (category: number, ingredient?: number) => {
  if (ingredient) {
    return `cart.${category}.ingredients.${ingredient}` as `cart.${number}.ingredients.${number}`;
  } else {
    return `cart.${category}.ingredients` as `cart.${number}.ingredients`;
  }
};

const defaultValues: CartSchema = {
  search: '',
  edit: true,
  cart: [],
};

const itemSchema = z.object({
  search: z.string(),
  edit: z.boolean(),
  cart: z.array(
    z.object({
      group: z.string(),
      ingredients: z.array(
        z.object({
          value: z.string(),
          clicked: z.boolean(),
        })
      ),
    })
  ),
});

export type CartSchema = z.infer<typeof itemSchema>;

export const Cart = () => {
  const inputRef = React.useRef<Record<string, HTMLInputElement | null>>();

  const form = useForm<CartSchema>({
    resolver: zodResolver(itemSchema),
    defaultValues,
  });

  const { getValues, setValue } = form;
  const { search, edit } = getValues();

  const { fields, append } = useFieldArray({
    control: form.control,
    name: 'cart',
  });

  const addCathegory = (value: string) => {
    append({ group: value, ingredients: [] });
  };

  const onSubmit: SubmitHandler<CartSchema> = values => {
    console.log(values);
  };

  React.useEffect(() => {
    inputRef?.current?.[search]?.focus();
  }, [search]);

  console.log({ edit });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className="space-y-3 bg-muted/50">
            <div className="flex flex-row items-start gap-3">
              <div className="grid w-full gap-0.5">
                <CardTitle className="group flex items-center gap-2 text-lg">
                  Lista zakupów
                </CardTitle>
                <CardDescription>Dodaj, lub zaznacz kupione artykuły.</CardDescription>
              </div>
              <div className="ml-auto">
                <FormField
                  control={form.control}
                  name="edit"
                  render={({ field }) => (
                    <FormItem className="h-7 items-center justify-between gap-2 md:flex">
                      <FormLabel className="text-nowrap text-xs">Edit mode</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          aria-readonly
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            {edit && (
              <Combobox
                options={fields.map(field => field.group)}
                onSubmit={addCathegory}
              />
            )}
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              value={search}
              onValueChange={value => setValue('search', value)}
            >
              {fields.map(({ id, group }, index) => (
                <Categories
                  ref={e => {
                    inputRef.current = { ...inputRef.current, [group]: e };
                  }}
                  key={id}
                  index={index}
                  name={group}
                  search={search}
                />
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

type TCategories = {
  search: string;
  index: number;
  mode?: 'edit' | 'normal';
  name: CartSchema['cart'][number]['group'];
};

export const Categories = React.forwardRef<HTMLInputElement, TCategories>(
  ({ index, name }, ref) => {
    const { control, getValues } = useFormContext<CartSchema>();
    const { search, edit } = getValues();

    const { fields, append, remove } = useFieldArray({
      control,
      name: `cart.${index}.ingredients`,
    });

    const createIngredient = (value: string) => {
      append({ value, clicked: false });
    };

    const active = search === name;

    return (
      <AccordionItem value={name}>
        <AccordionTrigger>
          <h4 className="pr-2 text-sm font-semibold">{name}</h4>
        </AccordionTrigger>
        <AccordionContent className="space-y-3 p-1">
          {edit && (
            <FormInput
              ref={ref}
              name={`${name}-ingredient`}
              placeholder="Dodaj do listy..."
              type="text"
              onClick={createIngredient}
            />
          )}
          {fields.map(({ id }, idx) => (
            <div key={id} className="flex items-center justify-between">
              <Ingredient index={idx} catIndex={index} />
              {edit && (
                <Button
                  size="icon"
                  variant="outline"
                  className="size-7"
                  onClick={() => remove(index)}
                >
                  <Trash className="size-3" />
                </Button>
              )}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }
);

Categories.displayName = 'Categories';

export const Ingredient = ({ index, catIndex }: { index: number; catIndex: number }) => {
  const id = React.useId();

  const { control, getValues, setValue } = useFormContext<CartSchema>();
  const cart = getValues('cart');
  const { value, clicked } = cart[catIndex]?.ingredients?.[index];
  const { base, rest } = seperate(value);

  const moveUp = React.useCallback(() => {
    if (catIndex !== 0) {
      setValue(path(catIndex - 1), [
        ...cart[catIndex - 1].ingredients,
        { value, clicked },
      ]);
      setValue(path(catIndex), [
        ...cart[catIndex].ingredients.filter((_, i) => i !== index),
      ]);
    }
  }, [catIndex, index, clicked, cart, setValue, value]);

  const moveDown = React.useCallback(() => {
    if (catIndex < cart.length - 1) {
      setValue(path(catIndex + 1), [
        ...cart[catIndex + 1].ingredients,
        { value, clicked },
      ]);
      setValue(path(catIndex), [
        ...cart[catIndex].ingredients.filter((_, i) => i !== index),
      ]);
    }
  }, [catIndex, index, clicked, cart, setValue, value]);

  return (
    <FormField
      control={control}
      name={`cart.${catIndex}.ingredients.${index}.clicked`}
      render={({ field }) => (
        <FormItem className="flex w-full items-center space-x-2">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="w-full space-y-1 leading-none">
            <FormLabel
              className={cn(
                field.value && 'line-through',
                'leading-base w-full cursor-pointer text-muted-foreground'
              )}
            >
              <span className="text-white">{base}</span> {rest}
            </FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
};
