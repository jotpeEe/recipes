'use client';

import type { PropsWithChildren } from 'react';

type Props = {
  onClick: () => Promise<unknown>;
};
export const OAuthButton: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
}) => (
  <button
    type="button"
    className="flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/10 px-4 text-sm font-semibold text-white duration-500 hover:bg-white hover:text-black"
    onClick={onClick}
  >
    {children}
  </button>
);
