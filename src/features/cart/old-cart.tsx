'use client';

import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Combobox } from '@/components/Combobox';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form } from '@/components/ui/form';
import { FormInput } from '@/components/ui/form-input';
import { Label } from '@/components/ui/label';

const seperate = (input: string) => {
  const words = input.split(/\s+/);

  const index = words.findIndex(word => /\d/.test(word));

  if (index === -1) {
    return { index: '', rest: input };
  }

  const wordWithNumber = words[index];

  const restOfString = words
    .slice(0, index)
    .concat(words.slice(index + 1))
    .join(' ');

  return { index: wordWithNumber, rest: restOfString };
};

const defaultValues: CartSchema = {
  list: [
    {
      group: 'base',
      ingredients: [],
    },
  ],
};

const itemSchema = z.object({
  list: z.array(
    z.object({
      group: z.string(),
      ingredients: z.array(
        z.object({
          value: z.string(),
        })
      ),
    })
  ),
});

export type CartSchema = z.infer<typeof itemSchema>;

export const Cart = () => {
  const form = useForm<CartSchema>({
    resolver: zodResolver(itemSchema),
    defaultValues,
  });

  const [current, setCurrent] = React.useState(defaultValues.list[0].group);
  const index = form.getValues('list').findIndex(i => i.group === current);

  const { append } = useFieldArray({
    control: form.control,
    name: `list.${index}.ingredients`,
  });

  const onSubmit: SubmitHandler<CartSchema> = values => {
    console.log(values);
  };

  const createIngredient = (value?: string) => {
    if (value) append({ value });
  };

  const lists = form.getValues('list');

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid w-full gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Lista zakupów
              </CardTitle>
              <CardDescription>Dodaj, lub zaznacz kupione artykuły.</CardDescription>
              <div className="mt-6 flex w-full justify-between">
                <Combobox setCurrent={setCurrent} search={current} />
                <FormInput
                  name="item"
                  placeholder="Dodaj do listy..."
                  type="text"
                  onClick={createIngredient}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 py-6">
              {lists.map(({ group, ingredients }, index) => (
                <Group key={`${group}-${index}`} name={group} ingredients={ingredients} />
              ))}
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export const Group = ({
  name,
  ingredients,
}: {
  name: CartSchema['list'][number]['group'];
  ingredients: CartSchema['list'][number]['ingredients'];
}) => (
  <div className="w-fit space-y-3">
    {name && name !== 'base' && <h4 className="text-sm font-semibold">{name}</h4>}
    {ingredients.map(({ value }, index) => (
      <Ingredient key={`${value}-${index}-ingredient`} value={value} />
    ))}
  </div>
);

export const Ingredient = ({ value }: { value: string }) => {
  const id = React.useId();
  const { index, rest } = seperate(value);

  return (
    <div className="flex items-center">
      <Checkbox id={id} />
      <Label htmlFor={id} className="leading-base px-2 text-muted-foreground">
        <span className="text-white">{index}</span> {rest}
      </Label>
    </div>
  );
};
