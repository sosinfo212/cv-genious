import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, FileText, Download, Target, PenSquare, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground">
      <section className="bg-background">
        <div className="container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:gap-16">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Land Your Dream Job with an AI-Powered CV
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Stop spending hours tailoring your resume. Upload your CV, provide a job description, and let our AI craft a perfectly optimized, ATS-friendly CV and cover letter in seconds.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/dashboard">Get Started Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="AI-powered CV generation"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl shadow-primary/20"
              data-ai-hint="futuristic cv"
            />
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">A Smarter Way to Apply for Jobs</h2>
            <p className="mt-4 text-muted-foreground">
              Our intelligent platform simplifies your job application process into three easy steps.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-background/80 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                 <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-medium">1. Provide Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload your existing CV and paste the job description for the role you want. Our AI needs this context to work its magic.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/80 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <PenSquare className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-medium">2. AI-Powered Tailoring</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our algorithm analyzes the job's key requirements and strategically rewrites your CV to highlight your most relevant skills.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/80 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-medium">3. Apply with Confidence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Download your new, professionally tailored CV and a matching cover letter. You're now ready to stand out and get hired.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Ready to Accelerate Your Career?</h2>
            <p className="mt-4 text-muted-foreground">
              Join hundreds of successful professionals who have supercharged their job search with CV Genius AI.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
              <Link href="/register">Create Your Winning CV Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
