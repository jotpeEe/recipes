import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { FormInput } from '@/components/ui/form-input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useNoteApi } from '@/hooks/useNoteApi';

import { type RecipeProps } from './Recipe';

type TNote = {
  author: string;
  subTitle?: string;
  text: string;
  date: string;
};

const Note = ({ author, subTitle, text, date }: TNote) => (
  <>
    <div className="flex w-full flex-col gap-1">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="font-semibold">{author}</div>
        </div>
        <div className={'ml-auto text-xs'}>{date}</div>
      </div>
      {subTitle && <div className="text-xs font-medium">{subTitle}</div>}
    </div>
    <div className="line-clamp-2 text-xs text-muted-foreground">{text}</div>
  </>
);

type TRecipeNotes = {
  notes: RecipeProps['notes'];
};

export const RecipeNotes = ({ notes }: TRecipeNotes) => {
  const { form, handleSubmit } = useNoteApi();

  if (!notes) return null;

  return (
    <div className="relative grid gap-3">
      <div className="flex items-center justify-between">
        <div className="font-semibold">Notatki:</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="size-6">
              <Plus className="h-3.5 w-3.5" />
              <span className="sr-only">More</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader className="mx-auto max-w-lg">
              <SheetTitle>Napisz notatkę</SheetTitle>
              <SheetDescription>
                Notatki pomagają przy następnej próbie robienia.
              </SheetDescription>
              <Form {...form}>
                <form onSubmit={handleSubmit}>
                  <FormInput name="note" placeholder="Dodaj notatkę" as="textarea" />
                </form>
              </Form>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <ScrollArea className="max-h-72">
        <div className="flex flex-col gap-2 pr-4 pt-0">
          {notes.map(note => (
            <button
              key={note.id}
              className="flex flex-col items-start gap-2 rounded-lg border bg-muted p-3 text-left text-sm transition-all hover:bg-accent"
            >
              <Note
                author={note.author}
                subTitle={note.author}
                text={note.text}
                date={note.date}
              />
            </button>
          ))}
        </div>
      </ScrollArea>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-card"></div>
    </div>
  );
};
