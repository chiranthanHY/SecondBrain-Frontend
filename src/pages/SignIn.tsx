import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username: email,
        password,
      });

      // ✅ Store JWT token in localStorage
      localStorage.setItem("token", response.data.token);

      toast({
        title: "Success",
        description: "Signed in successfully!",
      });

      navigate('/dashboard');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast({
          title: "Authentication Failed",
          description: err.response?.data?.message || 'Invalid credentials',
          variant: "destructive",
        });
      } else {
        toast({
          title: "Unexpected Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
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

        <h1 className="text-2xl font-bold mb-1 text-gray-800">Welcome back</h1>
        <p className="text-gray-600 mb-8">Sign in to your account to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Link to="/forgot-password" className="text-sm text-brain-blue hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input-field pr-10"
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
            </div>

            <div className="flex items-center">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="data-[state=checked]:bg-brain-blue data-[state=checked]:border-brain-blue"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me for 30 days
              </label>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full btn-primary py-6">
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>

            <div className="relative flex items-center justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or continue with</span>
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300"></span>
              </div>
            </div>

            <Button variant="outline" className="w-full py-6 border-gray-300 hover:bg-gray-50">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                {/* Google logo SVG paths here */}
              </svg>
              Continue with Google
            </Button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-brain-blue font-semibold hover:underline">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
