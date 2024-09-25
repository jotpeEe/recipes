import { forwardRef } from 'react';

import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Input,
  InputResetButton,
  InputSubmitButton,
  InputTextArea,
} from '@/components/ui/input';
import { useFormInput } from '@/hooks/useFormInput';

type TInputProps = {
  name: string;
  placeholder?: string;
  label?: string;
  onClick?: (value: string) => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'text' | 'password';
  as?: 'input' | 'textarea';
};

export const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, TInputProps>(
  ({ name, label, onClick, disabled, isLoading, as = 'input', ...rest }, ref) => {
    const { inputRef, submitButtonRef, handleClick, handleResetField, handleSubmit } =
      useFormInput({ name, onClick, ref, as });

    const form = useFormContext();

    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <div className="relative">
                {as === 'input' ? (
                  <Input
                    {...field}
                    {...rest}
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    onKeyDown={handleSubmit}
                    disabled={disabled || isLoading}
                  />
                ) : (
                  <InputTextArea
                    {...field}
                    {...rest}
                    className="flex-grow resize-none overflow-y-hidden"
                    rows={1}
                    ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                    onKeyDown={handleSubmit}
                    disabled={disabled || isLoading}
                  />
                )}
                <div className="absolute bottom-0 right-0 z-30 flex">
                  <InputResetButton
                    active={field.value?.length > 0}
                    onClick={handleResetField}
                  />
                  <InputSubmitButton
                    ref={submitButtonRef}
                    status={
                      field.value?.trim().length > 0
                        ? 'active'
                        : isLoading
                          ? 'loading'
                          : 'disabled'
                    }
                    onClick={
                      !!onClick && field.value?.trim().length > 0
                        ? e => handleClick?.(e, field.value)
                        : undefined
                    }
                  />
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
);

FormInput.displayName = 'FormInput';
