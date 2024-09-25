import {
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type MouseEvent,
  type TextareaHTMLAttributes,
  forwardRef,
} from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Loader, X } from 'lucide-react';

import { Send } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface InputTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const InputTextArea = forwardRef<HTMLTextAreaElement, InputTextAreaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        'flex w-full rounded-md border border-input bg-background py-2 pl-2 pr-20 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

InputTextArea.displayName = 'InputAreatext';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = 'Input';

type TSubmitButton = {
  status: 'active' | 'loading' | 'disabled';
  onClick?: (e: MouseEvent, value: string) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const InputSubmitButton = forwardRef<HTMLButtonElement, TSubmitButton>(
  ({ status, onClick, ...rest }, ref) => (
    <>
      {status === 'loading' ? (
        <Loader className="z-30 mx-2 mt-3 h-4 animate-spin" />
      ) : (
        <button
          ref={ref}
          className="z-30 cursor-pointer p-1.5 text-black transition hover:text-stone-800 disabled:text-stone-300 dark:text-white hover:dark:text-white dark:disabled:text-stone-600"
          onClick={onClick}
          disabled={status === 'disabled'}
          type={onClick ? 'button' : 'submit'}
          data-testid="submit-button"
          {...rest}
        >
          <Send className="h-6" />
        </button>
      )}
    </>
  )
);

InputSubmitButton.displayName = 'InputSubmitButton';

type TResetButton = {
  active?: boolean;
  onClick: React.MouseEventHandler;
};

export const InputResetButton = ({ active, onClick }: TResetButton) => (
  <AnimatePresence>
    {active && (
      <motion.div
        key={'input-reset-button'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          className="cursor-pointer p-1.5 text-stone-500 transition"
          onClick={onClick}
          type="button"
          data-testid="reset-button"
        >
          <X className="size-6" />
        </button>
      </motion.div>
    )}
  </AnimatePresence>
);
