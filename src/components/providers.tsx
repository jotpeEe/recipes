'use client';

import React from 'react';

import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

type ProvidersProps = {
  messages: AbstractIntlMessages | undefined;
  locale: string;
  session: Session | null;
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children, messages, locale, session }) => (
  <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/London">
    <SessionProvider session={session}>{children}</SessionProvider>
  </NextIntlClientProvider>
);

export default Providers;
