import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1655px] mx-auto px-4">
        <div className="border border-[#E2E5E9] rounded-[16px] overflow-hidden">
          <Navbar />
          
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
            {/* Icon */}
            <div className="w-20 h-20 bg-[#5A4CFF]/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-10 h-10 text-[#5A4CFF]" />
            </div>
            
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#24234C] mb-4">
              {title}
            </h1>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5A4CFF]/10 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5A4CFF] animate-pulse"></span>
              <span className="text-[#5A4CFF] font-medium">Coming Soon</span>
            </div>
            
            {/* Description */}
            <p className="text-[#24234C]/70 text-lg max-w-md mb-8">
              {description || "We're working hard to bring you something amazing. Stay tuned for updates!"}
            </p>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/">
                <Button variant="outline" className="rounded-full px-6 border-[#E2E5E9]">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                className="rounded-full px-6 bg-[#5A4CFF] hover:bg-[#4B3FE0]"
                disabled
              >
                <Bell className="w-4 h-4 mr-2" />
                Notify Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog Coming Soon Page
export function BlogComingSoon() {
  return (
    <ComingSoon 
      title="Blog" 
      description="Our blog is coming soon! We'll be sharing AI tips, tutorials, and industry insights to help you stay ahead."
    />
  );
}

// Support Center Coming Soon Page
export function SupportComingSoon() {
  return (
    <ComingSoon 
      title="Support Center" 
      description="Our support center is being built. Soon you'll have access to FAQs, guides, and direct support from our team."
    />
  );
}
