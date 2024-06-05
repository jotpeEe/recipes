'use client';
import * as React from 'react';

import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';

import { GitHub, Google } from '@/components/ui/icons';

import { OAuthButton } from './OAuthButton';

type TProviders = 'github' | 'google';

const providers = ['github', 'google'] as const;

const ProviderIcon = {
  github: <GitHub className="h-4 w-4" />,
  google: <Google className="h-4 w-4" />,
} as const;

export const OAuthSignin = () => {
  const [isLoading, setIsLoading] = React.useState<TProviders | null>(null);

  const oauthSignIn = async (provider: TProviders) => {
    setIsLoading(provider);

    try {
      await signIn(provider, { callbackUrl: '/' }).then(() => setIsLoading(null));
    } catch (err) {
      console.error(err);
      setIsLoading(null);
    }
  };

  return (
    <div className="mx-auto space-y-4 sm:w-[350px]">
      <div className="flex flex-col space-y-2 px-1.5 pb-4">
        <h1 className="text-3xl font-semibold tracking-tight">Sign in</h1>
        <p className="text-md text-sm text-white/50">sign in with your oauth</p>
      </div>
      <div className="flex w-full flex-col gap-2 px-1.5">
        {providers.map(provider => (
          <OAuthButton key={provider} onClick={() => oauthSignIn(provider)}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              ProviderIcon[provider]
            )}{' '}
            {provider}
          </OAuthButton>
        ))}
      </div>
    </div>
  );
};
