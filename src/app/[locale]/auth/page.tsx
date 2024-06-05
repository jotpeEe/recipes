import { TopLeftShine } from '@/components/ui/icons';
import { OAuthSignin } from '@/features/auth/components/OAuthSignup';

const AuthPage = async () => (
  <section className="flex h-screen items-center justify-center overflow-hidden">
    <div className="pointer-events-none absolute left-0 top-0 flex justify-start lg:left-[20vw] lg:w-[80vw]">
      <TopLeftShine />
    </div>
    <OAuthSignin />
  </section>
);

export default AuthPage;
