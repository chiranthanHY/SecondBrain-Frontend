import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket } from 'lucide-react';
import screenshot from "@/assets/Screenshot 2025-02-27 225509.png";



const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-white rounded-full shadow-md px-6 py-3 mb-8 inline-flex items-center">
              <Rocket className="h-5 w-5 text-brain-blue mr-2" />
              <span className="font-medium">SecondBrain Beta - Ready to Use Now!</span>
            </div>
            
            <h1 className="hero-heading mb-6">
              <span className="text-brain-lightblue">The </span>
              <span className="text-brain-blue">AI-powered Brain</span>
              <br />
              <span className="text-brain-blue">Companion </span>
              <span className="text-brain-lightblue">for storing your ideas</span>
              <br />
              <span className="text-brain-lightblue">anytime, anywhere</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mb-8">
              SecondBrain transforms your notes and ideas into actionable insights
              with AI-powered intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button className="btn-primary text-lg px-8 py-6 w-full sm:w-auto">Get Started</Button>
              </Link>
              <Button variant="outline" className="btn-outline text-lg px-8 py-6 w-full sm:w-auto">
                Continue with Google
              </Button>
            </div>
          </div>
          
          {/* App Preview Image */}
          <div className="mt-16 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-100">
            <img 
              src={screenshot}  
              alt="SecondBrain App Interface" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brain-blue">Supercharge Your Second Brain</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capture content from anywhere and let our AI help you organize and retrieve it instantly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                <svg className="h-6 w-6 text-brain-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brain-blue">Save from Anywhere</h3>
              <p className="text-gray-600">
                Easily save articles, tweets, videos, and more with our browser extension and mobile app.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                <svg className="h-6 w-6 text-brain-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brain-blue">AI-Powered Search</h3>
              <p className="text-gray-600">
                Find anything in seconds with our semantic search that understands what you're looking for.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                <svg className="h-6 w-6 text-brain-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brain-blue">Smart Insights</h3>
              <p className="text-gray-600">
                Get personalized summaries and connections between your ideas you never knew existed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brain-blue py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to supercharge your second brain?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of people who organize their thoughts and boost their productivity with SecondBrain.
          </p>
          <Link to="/signup">
            <Button className="bg-white text-brain-blue hover:bg-blue-50 text-lg px-8 py-6">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
