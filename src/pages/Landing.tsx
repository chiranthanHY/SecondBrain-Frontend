import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, Zap, Clock, Share2, CheckCircle2, ArrowRight, BookOpen, Network, Lightbulb, Search } from 'lucide-react';

export default function Landing() {
  return (
    <div className="relative">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-5"></div>
        </div>
        <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="px-3 py-1 text-sm text-purple-700 bg-purple-100 rounded-full">
                  ✨ AI-Powered Knowledge Management
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Your Second Brain for{' '}
                <span className="relative">
                  <span className="relative inline-block text-purple-600">
                    Seamless Thinking
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 358 8" fill="none">
                      <path d="M2 5.5C88.3333 3.16667 267.667 3.16667 354 5.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                  </span>
                </span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
                Transform your thoughts into organized knowledge. Capture, connect, and create with an AI-powered second brain that evolves with your thinking.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/signup"
                  className="rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-purple-500 transition-all duration-200 hover:shadow-purple-200 hover:scale-105"
                >
                  Start Your Free Trial
                </Link>
                <Link to="#demo" className="group text-lg font-semibold leading-6 text-gray-900 hover:text-purple-600 flex items-center gap-2">
                  Watch demo
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="mt-12 flex items-center justify-center gap-x-8">
                {[
                  '30-day free trial',
                  'No credit card required',
                  'Cancel anytime'
                ].map((text) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Browser Frame Preview */}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          <div className="rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
              alt="App screenshot"
              className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Think Better</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to organize your thoughts
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unlock your mind's potential with powerful features designed to enhance your thinking and creativity.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'AI-Powered Insights',
                  description: 'Our advanced AI analyzes your notes to surface connections, patterns, and insights you might have missed.',
                  icon: Sparkles,
                  color: 'text-yellow-500',
                },
                {
                  name: 'Quick Capture',
                  description: 'Capture thoughts instantly with our lightning-fast note-taking system, available on all your devices.',
                  icon: Zap,
                  color: 'text-blue-500',
                },
                {
                  name: 'Smart Organization',
                  description: 'Let AI automatically organize your notes into a coherent knowledge structure.',
                  icon: Brain,
                  color: 'text-purple-500',
                },
                {
                  name: 'Powerful Search',
                  description: 'Find anything in seconds with our semantic search that understands context and meaning.',
                  icon: Search,
                  color: 'text-green-500',
                },
                {
                  name: 'Knowledge Graph',
                  description: 'Visualize connections between your ideas with an interactive knowledge graph.',
                  icon: Network,
                  color: 'text-indigo-500',
                },
                {
                  name: 'Idea Generation',
                  description: 'Get AI-powered suggestions and prompts to spark new ideas and connections.',
                  icon: Lightbulb,
                  color: 'text-orange-500',
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    <div className={`rounded-lg bg-gray-50 p-3 ring-1 ring-gray-200/50 ${feature.color}`}>
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative isolate bg-purple-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-purple-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Loved by knowledge workers worldwide
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
            {[
              {
                title: "Transformed my research workflow",
                content: "SecondBrain has completely changed how I organize my research. The AI-powered connections have helped me discover insights I would have missed.",
                author: "Dr. Sarah Chen",
                role: "Research Scientist",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              },
              {
                title: "A game-changer for content creation",
                content: "As a content creator, having all my ideas organized and easily accessible has boosted my productivity tremendously. The AI suggestions are like having a creative partner.",
                author: "Mark Thompson",
                role: "Content Creator",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              },
              {
                title: "Essential for remote work",
                content: "SecondBrain helps our team stay aligned and build on each other's ideas, even when working remotely. It's become our shared knowledge hub.",
                author: "Lisa Rodriguez",
                role: "Product Manager",
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            ].map((testimonial) => (
              <div key={testimonial.author} className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 hover:shadow-lg transition-shadow">
                <blockquote className="text-gray-900">
                  <h3 className="font-semibold text-lg mb-4">{testimonial.title}</h3>
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.image} alt="" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-purple-600 rounded-3xl px-6 py-24 text-center shadow-2xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start organizing your thoughts today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-purple-100">
              Join thousands of knowledge workers who have transformed their thinking with SecondBrain.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/signup"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-sm hover:bg-purple-50 transition-all duration-200"
              >
                Get started for free
              </Link>
              <Link
                to="/pricing"
                className="text-lg font-semibold leading-6 text-white hover:text-purple-100"
              >
                View pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.25" />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}