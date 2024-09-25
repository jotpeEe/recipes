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
import { Form } from '@/components/ui/form';
import { FormInput } from '@/components/ui/form-input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

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
  const inputRef = React.useRef<Record<string, HTMLInputElement | null>>();

  const form = useForm<CartSchema>({
    resolver: zodResolver(itemSchema),
    defaultValues,
  });

  const [current, setCurrent] = React.useState(defaultValues.list[0].group);

  const { fields, append } = useFieldArray({
    control: form.control,
    name: 'list',
  });

  const addCathegory = (value: string) => {
    append({ group: value, ingredients: [] });
  };

  const onSubmit: SubmitHandler<CartSchema> = values => {
    console.log(values);
  };

  React.useEffect(() => {
    inputRef?.current?.[current]?.focus();
  }, [current]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className="flex flex-col items-start gap-3 bg-muted/50">
            <div className="grid w-full gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Lista zakupów
              </CardTitle>
              <CardDescription>Dodaj, lub zaznacz kupione artykuły.</CardDescription>
            </div>
            <Combobox
              search={current}
              setSearch={setCurrent}
              options={fields.map(field => field.group)}
              onSubmit={addCathegory}
            />
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              value={current}
              onValueChange={v => setCurrent(v)}
            >
              {fields.map(({ id, group }, index) => (
                <Categories
                  ref={e => {
                    inputRef.current = { ...inputRef.current, [group]: e };
                  }}
                  key={id}
                  index={index}
                  name={group}
                  current={current}
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
  current: string;
  index: number;
  name: CartSchema['list'][number]['group'];
};

export const Categories = React.forwardRef<HTMLInputElement, TCategories>(
  ({ index, name, current }, ref) => {
    const { control } = useFormContext<CartSchema>();

    const { fields, append, remove } = useFieldArray({
      control,
      name: `list.${index}.ingredients`,
    });

    const createIngredient = (value: string) => {
      append({ value });
    };

    const active = current === name;

    return (
      <AccordionItem value={name}>
        <AccordionTrigger>
          <h4 className="pr-2 text-sm font-semibold">{name}</h4>
        </AccordionTrigger>
        <AccordionContent className="space-y-3 p-1">
          <FormInput
            ref={ref}
            name={`${name}-ingredient`}
            placeholder="Dodaj do listy..."
            type="text"
            onClick={createIngredient}
          />
          {fields.map(({ id, value }, index) => (
            <div key={id} className="flex items-center justify-between">
              <Ingredient value={value} />
              <Button
                size="icon"
                variant="outline"
                className="size-7"
                onClick={() => remove(index)}
              >
                <Trash className="size-3" />
              </Button>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }
);

Categories.displayName = 'Categories';

export const Ingredient = ({ value }: { value: string }) => {
  const [clicked, setClicked] = React.useState(false);
  const id = React.useId();
  const { index, rest } = seperate(value);

  return (
    <div className="flex items-center">
      <Checkbox id={id} />
      <Label
        htmlFor={id}
        onClick={() => setClicked(s => !s)}
        className={cn(
          clicked && 'line-through',
          'leading-base px-2 text-muted-foreground'
        )}
      >
        <span className="text-white">{index}</span> {rest}
      </Label>
    </div>
  );
};
