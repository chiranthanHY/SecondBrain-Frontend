import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !name) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (!agreeToTerms) {
      toast({
        title: "Error",
        description: "You must agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(BACKEND_URL + "/api/v1/signup", {
        username: email,
        password,
        name, // send name if backend accepts it
      });

      toast({
        title: "Success",
        description: "You have successfully signed up!",
      });

      navigate("/signin");
    } catch (err: any) {
      const message =
        axios.isAxiosError(err) && err.response?.data?.message
          ? err.response.data.message
          : "An unexpected error occurred";

      toast({
        title: "Sign up failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-6">
      <div className="auth-card">
        <div className="mb-8 flex justify-between items-center">
          <Link to="/" className="text-gray-500 hover:text-brain-blue flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to home</span>
          </Link>
          <Link to="/" className="text-brain-blue text-2xl font-bold">SecondBrain.</Link>
        </div>

        <h1 className="text-2xl font-bold mb-1 text-gray-800">Create your account</h1>
        <p className="text-gray-600 mb-8">Start organizing your ideas with SecondBrain</p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Must be at least 8 characters long.
              </p>
            </div>

            <div className="flex items-start">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                className="mt-1 data-[state=checked]:bg-brain-blue data-[state=checked]:border-brain-blue"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <Link to="/terms" className="text-brain-blue hover:underline">Terms of Service</Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-brain-blue hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full btn-primary py-6"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </Button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-brain-blue font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
