import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export const metadata = {
  title: 'Dashboard - World Artificer',
  description: 'Your worldbuilding dashboard',
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-neutral-900">
              Welcome back, {session.user?.name || 'Creator'}!
            </h1>
            <div className="text-sm text-neutral-600">
              {session.user?.email}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Quick Stats */}
          <div className="card">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Your Worlds
            </h3>
            <p className="text-3xl font-bold text-primary-600">0</p>
            <p className="text-sm text-neutral-600">Ready to create your first world?</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Story Readiness
            </h3>
            <p className="text-3xl font-bold text-secondary-600">0%</p>
            <p className="text-sm text-neutral-600">No worlds to analyze yet</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Creative Streak
            </h3>
            <p className="text-3xl font-bold text-accent-600">0 days</p>
            <p className="text-sm text-neutral-600">Start building to begin your streak</p>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-8">
          <div className="card">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              🎭 Ready to Start Your Worldbuilding Journey?
            </h2>
            <p className="text-neutral-600 mb-6">
              World Artificer helps you build creative confidence and break through worldbuilding paralysis. 
              Let's create your first world and see how our AI can guide you toward story-ready confidence.
            </p>
            <button className="btn-primary">
              Create Your First World
            </button>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              🧠 AI Creative Confidence Engine
            </h3>
            <p className="text-neutral-600 text-sm">
              Our AI analyzes your world content and provides confidence assessments, 
              helping you know when you're ready to start writing.
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              ✨ Guided Worldbuilding Assistant
            </h3>
            <p className="text-neutral-600 text-sm">
              Transform scattered ideas into organized worlds with AI-powered templates 
              and contextual questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}