import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            World{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Artificer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            AI-powered worldbuilding assistant that builds creative confidence and prevents creative paralysis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/auth/signup"
              className="btn-primary text-lg px-8 py-3"
            >
              Start Building Worlds
            </Link>
            <Link
              href="/auth/signin"
              className="btn-secondary text-lg px-8 py-3"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          <FeatureCard
            icon="🎭"
            title="Creative Confidence Engine"
            description="AI analyzes your world and provides confidence assessments, helping you know when you're ready to start writing."
          />
          <FeatureCard
            icon="🧠"
            title="Block Prevention System"
            description="Intelligent pattern recognition prevents creative paralysis before it happens, keeping you in creative flow."
          />
          <FeatureCard
            icon="✨"
            title="Guided Worldbuilding"
            description="Smart templates and contextual questions help transform scattered ideas into organized, compelling worlds."
          />
        </div>

        {/* Stats Section */}
        <div className="text-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatCard
              number="42%"
              label="of creators suffer from worldbuilding paralysis"
              subtext="We're here to help break through"
            />
            <StatCard
              number="67%"
              label="fail at the worldbuilding-to-writing transition"
              subtext="Our AI guides you through it"
            />
            <StatCard
              number="60%"
              label="project completion rate goal"
              subtext="vs industry average of 33%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: string; 
  title: string; 
  description: string;
}) {
  return (
    <div className="card card-hover text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-heading-3 mb-3">{title}</h3>
      <p className="text-body">{description}</p>
    </div>
  );
}

function StatCard({ 
  number, 
  label, 
  subtext 
}: { 
  number: string; 
  label: string; 
  subtext: string;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {number}
      </div>
      <div className="text-neutral-700 font-medium mb-1">{label}</div>
      <div className="text-muted">{subtext}</div>
    </div>
  );
}