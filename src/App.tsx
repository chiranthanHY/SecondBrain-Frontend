import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Dashboard } from './pages/dashboard';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // Don't render navbar on dashboard
  if (location.pathname === '/dashboard') {
    return null;
  }

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">SecondBrain</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link to="/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link>
            <Link to="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link to="/pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</Link>
            <Link to="/signin" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Sign In</Link>
            <Link to="/signup" className="block px-3 py-2 text-purple-600 hover:text-purple-700">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;