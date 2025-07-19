import { SignInForm } from '@/components/auth/signin-form';

export const metadata = {
  title: 'Sign In - World Artificer',
  description: 'Sign in to your World Artificer account',
};

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-medium p-8">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}