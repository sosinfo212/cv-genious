import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Bot } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b bg-card px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2">
        <Bot className="h-6 w-6 text-primary" />
        <span className="font-headline text-lg font-semibold">CV Genius AI</span>
      </Link>
      <div className="hidden items-center gap-4 md:flex">
        <Button variant="ghost" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/register">Get Started</Link>
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-6 p-6">
            <Link href="/" className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg font-semibold">CV Genius AI</span>
            </Link>
            <Link href="/login" className="text-lg font-medium hover:underline">
              Login
            </Link>
            <Link href="/register" className="text-lg font-medium hover:underline">
              Register
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
