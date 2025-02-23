import { Button } from '@/components/ui/button';
import { Menu, User, Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Header() {
    return (
      <header className="border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
              
              <div className="flex items-center space-x-2">
                {/* <Basketball className="h-8 w-8 text-primary" /> */}
                <span className="text-xl font-bold hidden sm:inline">Fantasy NBA</span>
              </div>
              
              <nav className="hidden lg:flex items-center space-x-6">
                <Link href="/" className="text-sm font-medium">
                  Home
                </Link>
                <Link href="/schedule" className="text-sm font-medium">
                  Weekly Schedule
                </Link>
                <Button variant="ghost" className="text-sm font-medium">
                  Stats Explorer
                </Button>
                <Button variant="ghost" className="text-sm font-medium">
                  AI Predictor
                </Button>
              </nav>
            </div>
  
            {/* <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div> */}
          </div>
        </div>
      </header>
    );
  };
  