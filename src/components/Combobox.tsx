'use client';

import * as React from 'react';

import { Check, ChevronsUpDown } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { type CartSchema } from '@/features/cart/cart-edit';
import { cn } from '@/lib/utils';

type TCombobox = {
  options: string[];
  onSubmit?: (value: string) => void;
};

export const Combobox = ({ options, onSubmit }: TCombobox) => {
  const [open, setOpen] = React.useState(false);

  const { getValues, setValue } = useFormContext<CartSchema>();

  const search = getValues('search');

  const handleSubmit = (search: string, value?: string) => {
    if (!!search.trim()) {
      onSubmit?.(search);
      if (value) setValue('search', value);
    }

    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {search.length > 0
            ? options.find(option => option === search)
            : 'Add or search shops...'}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search shops..." onEnter={handleSubmit} />
            <CommandEmpty>No results, create new one.</CommandEmpty>
            <CommandGroup>
              {options?.map((group, index) => (
                <CommandItem
                  key={`${group}-${index}-command`}
                  value={group}
                  onSelect={currentValue => {
                    setValue('search', currentValue === search ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 size-4',
                      search === group ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {group}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
