import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-10 lg:px-20 flex justify-between items-center absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <Link to="/" className="text-brain-blue text-2xl font-bold">SecondBrain.</Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-gray-700 hover:text-brain-blue transition-colors">Home</Link>
        <Link to="/features" className="text-gray-700 hover:text-brain-blue transition-colors">Features</Link>
        <Link to="/pricing" className="text-gray-700 hover:text-brain-blue transition-colors">Pricing</Link>
        <Link to="/about" className="text-gray-700 hover:text-brain-blue transition-colors">About</Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <Link to="/signin">
          <Button variant="outline" className="rounded-full">Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button className="rounded-full">Get Started</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
