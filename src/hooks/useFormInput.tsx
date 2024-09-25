import type React from 'react';
import { useCallback, useEffect, useImperativeHandle, useRef } from 'react';

import { useFormContext } from 'react-hook-form';

type UseFormFieldLogicProps = {
  name: string;
  as?: 'input' | 'textarea';
  onClick?: (value: string) => void;
  ref: React.Ref<HTMLInputElement | HTMLTextAreaElement | null>;
};

export const useFormInput = ({ name, onClick, ref, as }: UseFormFieldLogicProps) => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const form = useFormContext();

  const handleSubmit: React.KeyboardEventHandler = useCallback(
    e => {
      if (e.key === 'Enter' && onClick) {
        e.preventDefault();
        submitButtonRef.current?.click();
      }
    },
    [onClick]
  );

  const handleResetField = useCallback(() => {
    if (name) form.resetField(name);
    const input = inputRef.current;
    if (input) {
      input.value = '';
      input.style.height = '36px';
      input.focus();
    }
  }, [form, name]);

  const handleClick = useCallback(
    (e: React.MouseEvent, value: string) => {
      e.preventDefault();
      if (name) form.resetField(name);

      const input = inputRef.current;

      if (input) {
        input.value = '';
        input.focus();
      }

      onClick?.(value);
    },
    [form, name, onClick]
  );

  useImperativeHandle(ref, () => inputRef.current);

  useEffect(() => {
    if (as === 'textarea') {
      const element = inputRef.current;

      const autoResize = () => {
        if (element) {
          element.style.height = 'auto';
          element.style.height = element?.scrollHeight + 'px';
        }
      };

      element?.setAttribute('style', 'height:' + element?.scrollHeight + 'px;');
      element?.addEventListener('input', autoResize, false);

      return () => {
        element?.removeEventListener('input', autoResize, false);
      };
    }
  }, [as]);

  return {
    inputRef,
    submitButtonRef,
    handleSubmit,
    handleResetField,
    handleClick,
  };
};
