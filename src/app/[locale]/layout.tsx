import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { getMessages } from 'next-intl/server';

import Providers from '@/components/providers';
import { locales } from '@/i18n';
import { getServerAuthSession } from '@/lib/auth';
import { cn } from '@/lib/utils';

import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Web app for storing recipes',
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export const generateStaticParams = () => locales.map(locale => ({ locale }));

const LocaleLayout = async ({ children, params: { locale } }: RootLayoutProps) => {
  const messages = await getMessages();
  const session = await getServerAuthSession();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'dark min-h-screen bg-black font-sans antialiased',
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <Providers session={session} messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;
