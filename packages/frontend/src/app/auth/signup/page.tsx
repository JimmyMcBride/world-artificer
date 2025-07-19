import { SignUpForm } from '@/components/auth/signup-form';

export const metadata = {
  title: 'Sign Up - World Artificer',
  description: 'Create your World Artificer account',
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-medium p-8">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}