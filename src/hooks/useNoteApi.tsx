import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  note: z.string().min(1).max(300, { message: 'no more' }),
});

type TNote = z.infer<typeof schema>;

export const useNoteApi = () => {
  const form = useForm<TNote>({
    resolver: zodResolver(schema),
    defaultValues: {
      note: '',
    },
  });

  const onSubmit: SubmitHandler<Zod.infer<typeof schema>> = values => {
    console.log(values);
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
  };
};
