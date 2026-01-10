import React from 'react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-[#24234C] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full max-w-[1655px] mx-auto pt-4 pb-9 lg:pb-[80px] px-2 lg:px-0">
        <div className="relative w-full rounded-[16px] border border-[#E2E5E9] overflow-hidden bg-white">
          {/* Navbar with Demo Login */}
          <Navbar />

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-20 gap-12">
            <div className="flex-1 max-w-[600px] z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F2F5] text-xs font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#5A4CFF]"></span>
                Master AI
              </div>
              <h1 className="text-[40px] lg:text-[80px] font-bold leading-[1.1] mb-6 tracking-[-2px]">
                Become the <br/>
                <span className="text-[#5A4CFF]">Master of AI</span>
              </h1>
              <p className="text-[18px] lg:text-[20px] text-[#24234C]/80 mb-10 max-w-[480px] leading-[1.4]">
                Learn AI skills to advance your career and stay competitive in the digital age.
              </p>
              <Button className="h-[60px] px-10 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full text-[20px] font-medium shadow-lg shadow-[#5A4CFF]/20">
                Get Started
              </Button>
              
              <div className="mt-8 flex items-center gap-4">
                <a href="#" className="transition-transform hover:scale-105">
                  <img src="/app-store-badge.webp" alt="Download on App Store" className="h-12 w-auto object-contain" />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                  <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-12 w-auto object-contain" />
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative w-full max-w-[600px] flex justify-center lg:justify-end">
              {/* Phone Mockups */}
              <div className="relative w-[300px] lg:w-[360px]">
                <img src="/2-323.webp" alt="App Interface" className="w-full h-auto drop-shadow-2xl rounded-[32px]" />
                <div className="absolute -left-12 bottom-20 bg-white p-4 rounded-2xl shadow-xl max-w-[200px] hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#E0E7FF] flex items-center justify-center text-[#5A4CFF]">
                      AI
                    </div>
                    <div className="text-sm font-bold">AI Assistant</div>
                  </div>
                  <div className="text-xs text-gray-500">How can I help you today?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full max-w-[1000px] mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl lg:text-3xl font-medium italic leading-relaxed">
          "Using AI doesn't make you the best... You have to learn to take the best out of it. Coursiv helps you do that, perfectly!"
        </h2>
        <div className="mt-4 w-12 h-1 bg-[#E2E5E9] mx-auto rounded-full"></div>
      </section>

      {/* Why People Love Coursiv */}
      <section className="w-full max-w-[1280px] mx-auto px-4 py-[60px] lg:py-[100px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[100px] items-center border border-[#E2E5E9] rounded-[24px] px-6 py-10 lg:px-[40px] lg:py-[80px] shadow-[0px_4px_4px_0px_rgba(20,21,26,0.05)]">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-[32px] lg:text-[48px] font-medium mb-6 tracking-[-1px]">Why people love Coursiv</h2>
            <p className="text-[18px] lg:text-[20px] text-[#24234C]/80 mb-10 leading-[1.4]">
              Thousands of users trust Coursiv to learn AI. Get the tools, skills, and confidence to grow in your career.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-6">
                <div className="w-10 flex-shrink-0 pt-1">
                  <img src="/2-2420.svg" alt="Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Quick and easy to follow:</h3>
                  <p className="text-lg text-[#24234C]/80">Learn AI in just 15 minutes a day—perfect for any age or experience level.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-10 flex-shrink-0 pt-1">
                  <img src="/2-2433.svg" alt="Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Multiple learning formats:</h3>
                  <p className="text-lg text-[#24234C]/80">Choose from audio lessons, step-by-step guides, and interactive courses to suit your style.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-10 flex-shrink-0 pt-1">
                  <img src="/2-2441.svg" alt="Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Accessible anytime, anywhere:</h3>
                  <p className="text-lg text-[#24234C]/80">Our app is available on the Play Market for learning on the go.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-10 flex-shrink-0 pt-1">
                  <img src="/2-2450.svg" alt="Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Practical and actionable:</h3>
                  <p className="text-lg text-[#24234C]/80">Gain hands-on experience with AI tools you can apply immediately to work smarter and stay competitive.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 flex justify-center">
            <img src="/2-2458.webp" alt="Why Coursiv" className="max-w-full h-auto max-h-[550px]" />
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="w-full max-w-[1280px] mx-auto px-4 py-[80px] lg:py-[120px] text-center">
        <h2 className="text-[32px] lg:text-[48px] font-medium mb-6 tracking-[-1px]">Choose your path</h2>
        <p className="text-[18px] lg:text-[20px] text-[#24234C]/80 mb-16 max-w-[600px] mx-auto leading-[1.4]">
          Explore different paths where you could apply AI that will help you grow in today's digital world
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-[#E2E5E9] rounded-2xl p-10 text-left hover:shadow-lg transition-shadow duration-300">
            <img src="/2-2573.svg" alt="Icon" className="w-12 h-12 mb-8" />
            <h3 className="text-2xl font-medium mb-4">AI-powered business</h3>
            <p className="text-lg text-[#24234C]/80">
              Use tools to automate workflows, analyze data, and make smarter decisions that save time and money
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white border border-[#E2E5E9] rounded-2xl p-10 text-left hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-12 h-12 mb-8">
              <img src="/2-2583.svg" alt="Icon" className="absolute inset-0 w-full h-full" />
              <img src="/2-2584.svg" alt="Icon Overlay" className="absolute top-1/4 left-1/4 w-1/2 h-1/2" />
            </div>
            <h3 className="text-2xl font-medium mb-4">AI marketing</h3>
            <p className="text-lg text-[#24234C]/80">
              Learn how to increase sales with AI-driven tools for ads, social media, and more...
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white border border-[#E2E5E9] rounded-2xl p-10 text-left hover:shadow-lg transition-shadow duration-300">
            <img src="/2-2549.svg" alt="Icon" className="w-12 h-12 mb-8" />
            <h3 className="text-2xl font-medium mb-4">AI productivity</h3>
            <p className="text-lg text-[#24234C]/80">
              Simplify your daily tasks with AI tools that save time and increase efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Advance Your Career */}
      <section className="w-full max-w-[1280px] mx-auto px-4 py-16">
        <div className="relative rounded-[24px] overflow-hidden bg-[#F9FAFB] border border-[#E2E5E9]">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 p-8 lg:p-20">
              <h2 className="text-4xl lg:text-5xl font-medium mb-6">Advance your career with AI skills</h2>
              <p className="text-xl text-[#24234C]/80 mb-10">
                Learn practical skills that top professionals use to work smarter and stay ahead.
              </p>
              <Button className="h-12 px-8 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full text-lg">
                Start Now
              </Button>
            </div>
            <div className="flex-1 relative h-[400px] lg:h-[500px] w-full bg-gradient-to-br from-[#F0F2F5] to-white flex items-center justify-center overflow-hidden">
              {/* Abstract representation of career growth/network */}
              <div className="relative w-full h-full">
                 <img src="/2-2659.webp" alt="Career Growth" className="absolute inset-0 w-full h-full object-cover" />
                 
                 {/* Floating Avatars/Badges */}
                 <div className="absolute top-1/4 left-1/4 animate-bounce duration-[3000ms]">
                   <img src="/2-2662.webp" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-lg" />
                 </div>
                 <div className="absolute bottom-1/3 right-1/4 animate-bounce duration-[4000ms] delay-700">
                   <img src="/2-2673.webp" alt="User" className="w-14 h-14 rounded-full border-2 border-white shadow-lg" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Coursiv Works */}
      <section className="w-full max-w-[1280px] mx-auto px-4 py-[80px] lg:py-[120px] text-center">
        <h2 className="text-[32px] lg:text-[48px] font-medium mb-6 tracking-[-1px]">How Coursiv works</h2>
        <p className="text-[18px] lg:text-[20px] text-[#24234C]/80 mb-20">
          Learn at your own pace and discover how AI and digital tools can help you grow
        </p>
        
        <div className="flex flex-col gap-[100px]">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[100px] text-left">
            <div className="flex-1">
              <div className="text-[#5A4CFF] text-[18px] font-medium mb-4">Step 1</div>
              <h3 className="text-[32px] lg:text-[40px] font-medium mb-6 leading-[1.2]">Take a quiz and receive a learning plan</h3>
              <p className="text-[18px] text-[#24234C]/80 leading-[1.6]">
                Our smart AI algorithm will review your answers and create a personalized learning plan tailored to your goals and proficiency level.
              </p>
            </div>
            <div className="flex-1 bg-[#F9FAFB] rounded-2xl p-8 border border-[#E2E5E9] shadow-sm">
              <img src="/2-2461.webp" alt="Quiz Interface" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-[100px] text-left">
            <div className="flex-1">
              <div className="text-[#5A4CFF] text-[18px] font-medium mb-4">Step 2</div>
              <h3 className="text-[32px] lg:text-[40px] font-medium mb-6 leading-[1.2]">Learn the skills you need</h3>
              <p className="text-[18px] text-[#24234C]/80 leading-[1.6]">
                Access bite-sized lessons and hands-on tutorials that fit into your schedule. Learn practical AI tools you can use immediately.
              </p>
            </div>
            <div className="flex-1 bg-[#F9FAFB] rounded-2xl p-8 border border-[#E2E5E9] shadow-sm">
              <img src="/2-2458.webp" alt="Learning Interface" className="w-full h-auto max-h-[400px] object-contain mx-auto" />
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[100px] text-left">
            <div className="flex-1">
              <div className="text-[#5A4CFF] text-[18px] font-medium mb-4">Step 3</div>
              <h3 className="text-[32px] lg:text-[40px] font-medium mb-6 leading-[1.2]">Master AI for your goals</h3>
              <p className="text-[18px] text-[#24234C]/80 leading-[1.6]">
                Apply what you've learned to real-world tasks. Earn a certificate to showcase your new skills and advance your career.
              </p>
            </div>
            <div className="flex-1 bg-[#F9FAFB] rounded-2xl p-8 border border-[#E2E5E9] shadow-sm">
              <img src="/2-2729.webp" alt="Certificate" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full max-w-[1280px] mx-auto px-4 py-[80px] lg:py-[120px] text-center">
        <h2 className="text-[32px] lg:text-[48px] font-medium mb-6 tracking-[-1px]">Coursiv in action</h2>
        <p className="text-[18px] lg:text-[20px] text-[#24234C]/80 mb-20">
          Discover Coursiv's impact on learners and our success in numbers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <div className="text-[48px] lg:text-[64px] font-bold mb-2 tracking-[-2px]">1,456k+</div>
            <div className="text-[18px] text-[#24234C]/60">Users learned new skills</div>
          </div>
          <div>
            <div className="text-[48px] lg:text-[64px] font-bold mb-2 tracking-[-2px]">12,751k+</div>
            <div className="text-[18px] text-[#24234C]/60">Minutes of content consumed</div>
          </div>
          <div>
            <div className="text-[48px] lg:text-[64px] font-bold mb-2 tracking-[-2px]">149k+</div>
            <div className="text-[18px] text-[#24234C]/60">AI prompts written</div>
          </div>
        </div>
        
        <div className="w-full opacity-50">
          <img src="/2-2648.webp" alt="World Map" className="w-full h-auto" />
        </div>
      </section>

      {/* Certificate Section */}
      <section className="w-full bg-[#F9FAFB] py-[80px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-[100px]">
          <div className="flex-1">
            <h2 className="text-[32px] lg:text-[48px] font-medium mb-6 tracking-[-1px] leading-[1.2]">Earn a certificate that proves your AI skills</h2>
            <p className="text-[18px] lg:text-[20px] text-[#24234C]/80 mb-10 leading-[1.4]">
              Complete your courses and receive a verified certificate to showcase your skills. Add it to your LinkedIn profile or resume to stand out.
            </p>
            <Button className="h-[60px] px-10 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full text-[20px] font-medium">
              Get Certified Today
            </Button>
          </div>
          <div className="flex-1">
            <img src="/2-2729.webp" alt="Certificate Preview" className="w-full h-auto rounded-xl shadow-xl border border-[#E2E5E9]" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-[1280px] mx-auto px-4 py-[80px] lg:py-[120px] text-center">
        <h2 className="text-[32px] lg:text-[48px] font-medium mb-6 tracking-[-1px]">See how Coursiv changes lives</h2>
        <div className="flex justify-center items-center gap-2 mb-16">
          <span className="text-[20px] font-medium">Excellent</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-6 h-6 bg-[#00B67A] flex items-center justify-center text-white text-xs">★</div>
            ))}
          </div>
          <span className="text-[16px] text-[#24234C]/60 ml-2">Based on 1,200+ reviews on Trustpilot</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white border border-[#E2E5E9] rounded-xl p-6 text-left shadow-sm">
            <div className="flex gap-1 text-[#00B67A] mb-4">★★★★★</div>
            <h4 className="font-bold mb-2">Truly valuable!</h4>
            <p className="text-sm text-[#24234C]/80 mb-4">
              "Easy to follow, straight to the point. Helps you learn AI tools and concepts in a very practical way. A must-have for anyone wanting to stay competitive."
            </p>
            <div className="text-xs text-[#24234C]/40">Sarah J.</div>
          </div>
          
          {/* Review 2 */}
          <div className="bg-white border border-[#E2E5E9] rounded-xl p-6 text-left shadow-sm">
            <div className="flex gap-1 text-[#00B67A] mb-4">★★★★★</div>
            <h4 className="font-bold mb-2">Best AI learning app</h4>
            <p className="text-sm text-[#24234C]/80 mb-4">
              "I've tried several apps but this is the best one. It breaks down complex topics into simple lessons. Highly recommended!"
            </p>
            <div className="text-xs text-[#24234C]/40">Michael T.</div>
          </div>
          
          {/* Review 3 */}
          <div className="bg-white border border-[#E2E5E9] rounded-xl p-6 text-left shadow-sm">
            <div className="flex gap-1 text-[#00B67A] mb-4">★★★★★</div>
            <h4 className="font-bold mb-2">It's a life changer!</h4>
            <p className="text-sm text-[#24234C]/80 mb-4">
              "I didn't know much about AI before, but now I use it daily for my work. This app gave me the confidence to use these new tools."
            </p>
            <div className="text-xs text-[#24234C]/40">Jessica R.</div>
          </div>
        </div>
      </section>

      {/* 28-Day Challenge Section */}
      <section className="w-full max-w-[1280px] mx-auto px-4 py-[80px] lg:py-[120px]">
        <div className="bg-gradient-to-r from-[#5A4CFF] to-[#7B6FFF] rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-[28px] lg:text-[40px] font-bold mb-4 leading-tight">Learn new AI every day in our 28-day Challenge</h2>
              <p className="text-[18px] lg:text-[20px] text-white/80 mb-6">
                Get the best guided experience to master AI tools and become more productive every single day.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <span className="text-sm font-medium">AI Masters</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-[300px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#5A4CFF] flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <div className="text-[#24234C] font-bold">Day 1</div>
                    <div className="text-[#24234C]/60 text-sm">Introduction to AI</div>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(28)].map((_, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${i < 3 ? 'bg-[#5A4CFF] text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-[1000px] mx-auto px-4 py-[80px] lg:py-[120px]">
        <h2 className="text-[32px] lg:text-[48px] font-medium mb-16 text-center lg:text-left tracking-[-1px]">Frequently asked questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-[#E2E5E9]">
            <AccordionTrigger className="text-[20px] font-medium hover:text-[#5A4CFF] py-6 [&[data-state=open]>svg]:rotate-180">
              What is Coursiv?
            </AccordionTrigger>
            <AccordionContent className="text-[#24234C]/80 text-lg pb-6">
              Coursiv is an AI-powered learning platform designed to help you master artificial intelligence skills. Our platform offers bite-sized lessons, interactive tutorials, and hands-on projects to help you learn AI at your own pace.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-[#E2E5E9]">
            <AccordionTrigger className="text-[20px] font-medium hover:text-[#5A4CFF] py-6 [&[data-state=open]>svg]:rotate-180">
              How to download and use Coursiv?
            </AccordionTrigger>
            <AccordionContent className="text-[#24234C]/80 text-lg pb-6">
              You can download Coursiv from the App Store or Google Play Store. Simply search for "Coursiv" and install the app. Once installed, create an account and take our quick quiz to get a personalized learning plan.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-b border-[#E2E5E9]">
            <AccordionTrigger className="text-[20px] font-medium hover:text-[#5A4CFF] py-6 [&[data-state=open]>svg]:rotate-180">
              How long is the course?
            </AccordionTrigger>
            <AccordionContent className="text-[#24234C]/80 text-lg pb-6">
              Our courses are designed to fit your schedule. Most lessons take just 15 minutes a day. The complete learning path typically takes 4-8 weeks depending on your pace and the topics you choose to explore.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-b border-[#E2E5E9]">
            <AccordionTrigger className="text-[20px] font-medium hover:text-[#5A4CFF] py-6 [&[data-state=open]>svg]:rotate-180">
              How to cancel Coursiv subscription?
            </AccordionTrigger>
            <AccordionContent className="text-[#24234C]/80 text-lg pb-6">
              You can cancel your subscription at any time through your account settings or by contacting our support team at support@coursiv.io. If you cancel, you'll continue to have access until the end of your current billing period.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Join Learners */}
      <section className="w-full max-w-[1280px] mx-auto px-4 py-[80px] lg:py-[120px] flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-[600px]">
          <h2 className="text-[32px] lg:text-[48px] font-medium mb-6 tracking-[-1px] leading-[1.2]">Join 300,000+ learners around the world</h2>
          <div className="flex items-center gap-2 text-[18px]">
            <span className="font-bold">Excellent 4.8/5</span>
            <span className="text-[#00B67A]">on Trustpilot</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-14 h-14 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                <img src={`/2-2662.webp`} alt="User" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <Button className="h-[60px] px-10 bg-[#00B67A] hover:bg-[#009e6a] text-white rounded-full text-[20px] font-medium">
            Join Now
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-[#F9FAFB] py-[80px] lg:py-[120px] text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-[32px] lg:text-[48px] font-medium mb-6 tracking-[-1px] leading-[1.2]">Start your AI journey with Coursiv today!</h2>
          <p className="text-[18px] lg:text-[20px] text-[#24234C]/80 mb-12 leading-[1.4]">
            Learn today, take control of your future, and build new skills in AI and digitization.
          </p>
          <Button className="h-[72px] px-12 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full text-[24px] font-medium shadow-lg shadow-[#5A4CFF]/20">
            Start Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#E2E5E9] bg-white pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <img src="/2-2745.svg" alt="Coursiv Logo" className="h-8 mb-6" />
              <div className="flex gap-4">
                <img src="/2-2766.webp" alt="App Store" className="h-10" />
              </div>
            </div>
            
            <div className="flex gap-16 flex-wrap">
              <div>
                <h4 className="font-bold text-lg mb-4">Coursiv</h4>
                <ul className="space-y-2 text-sm text-[#24234C]/80">
                  <li><a href="#" className="hover:text-[#5A4CFF]">Home</a></li>
                  <li><a href="#" className="hover:text-[#5A4CFF]">Blog</a></li>
                  <li><a href="#" className="hover:text-[#5A4CFF]">Support Center</a></li>
                  <li><a href="#" className="hover:text-[#5A4CFF]">support@coursiv.io</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-[#24234C]/80">
                  <li><a href="#" className="hover:text-[#5A4CFF]">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#5A4CFF]">Terms and Conditions</a></li>
                  <li><a href="#" className="hover:text-[#5A4CFF]">Subscription Terms</a></li>
                </ul>
              </div>
              
              <div className="max-w-[300px]">
                <h4 className="font-bold text-lg mb-4">Disclaimer</h4>
                <p className="text-sm text-[#24234C]/80 leading-relaxed">
                  Coursiv as an educational platform does not provide any financial or career advice. Please consult with your financial or career advisor first before making any career decisions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#E2E5E9] pt-8 text-center text-sm text-[#24234C]/40">
            <p>Coursiv. All right reserved. © 2025. Coursiv Limited. Limassol, Cyprus</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
