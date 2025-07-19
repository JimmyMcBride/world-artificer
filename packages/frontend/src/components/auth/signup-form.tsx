'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.details) {
          // Handle validation errors from server
          const serverErrors: FormErrors = {};
          result.details.forEach((error: any) => {
            if (error.path.includes('email')) {
              serverErrors.email = error.message;
            } else if (error.path.includes('password')) {
              serverErrors.password = error.message;
            } else if (error.path.includes('name')) {
              serverErrors.name = error.message;
            }
          });
          setErrors(serverErrors);
        } else {
          setErrors({ general: result.error || 'Registration failed' });
        }
        return;
      }

      // Registration successful, now sign in
      const signInResult = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (signInResult?.ok) {
        router.push('/dashboard');
        router.refresh();
      } else {
        // Registration succeeded but sign-in failed
        router.push('/auth/signin?message=Registration successful. Please sign in.');
      }
    } catch (err) {
      setErrors({ general: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-neutral-900">Create your account</h1>
        <p className="mt-2 text-neutral-600">
          Start your worldbuilding journey with AI-powered confidence
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          value={formData.name}
          onChange={handleInputChange('name')}
          placeholder="Enter your full name"
          error={errors.name}
          required
          disabled={isLoading}
        />

        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
          placeholder="Enter your email"
          error={errors.email}
          required
          disabled={isLoading}
        />

        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleInputChange('password')}
          placeholder="Create a password"
          error={errors.password}
          helpText="Must be at least 8 characters"
          required
          disabled={isLoading}
        />

        <Input
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          placeholder="Confirm your password"
          error={errors.confirmPassword}
          required
          disabled={isLoading}
        />

        {errors.general && (
          <div className="rounded-md bg-red-50 p-3">
            <p className="text-sm text-red-600">{errors.general}</p>
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          isLoading={isLoading}
          disabled={!formData.name || !formData.email || !formData.password || !formData.confirmPassword}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-neutral-600">
          Already have an account?{' '}
          <Link
            href="/auth/signin"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}