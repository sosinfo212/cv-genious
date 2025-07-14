import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Check, Bot, FileText, Download, Target, PenSquare, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const features = [
    { name: 'AI-Powered CV Tailoring', included: true },
    { name: 'Custom Cover Letter Generation', included: true },
    { name: 'ATS-Friendly Templates', included: true },
    { name: 'Unlimited Downloads', included: false },
    { name: 'Priority Support', included: false },
  ];

  const proFeatures = [
    { name: 'AI-Powered CV Tailoring', included: true },
    { name: 'Custom Cover Letter Generation', included: true },
    { name: 'ATS-Friendly Templates', included: true },
    { name: 'Unlimited Downloads', included: true },
    { name: 'Priority Support', included: true },
  ];

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

      <section id="pricing" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Choose Your Plan</h2>
            <p className="mt-4 text-muted-foreground">
              Simple, transparent pricing. No hidden fees.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:items-start">
            <Card className="bg-background/80 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Get started with our basic features.</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className={`h-5 w-5 ${feature.included ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={!feature.included ? 'text-muted-foreground line-through' : ''}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="outline" className="w-full">
                  <Link href="/register">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="relative bg-background/80 border-primary border-2 backdrop-blur-sm shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-4 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Unlock all features to supercharge your job hunt.</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                    {proFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
               <CardFooter>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/register">Choose Pro</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-background/80 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For teams and businesses.</CardDescription>
                 <div className="pt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                    Custom solutions for your entire team. Get in touch for a personalized quote.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Everything in Pro, plus:</span>
                  </li>
                  <li className="flex items-center gap-2 pl-6">
                     <Check className="h-4 w-4 text-primary" />
                    <span>Team management</span>
                  </li>
                  <li className="flex items-center gap-2 pl-6">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Volume discounts</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24">
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
