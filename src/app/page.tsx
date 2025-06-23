import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, FileText, Download, Link as LinkIcon, Upload } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      <section className="bg-background">
        <div className="container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:gap-16">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Craft the Perfect CV, Instantly.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Stop tailoring your CV for every job application. Upload your CV, paste a job link, and let our AI create a perfectly matched, ATS-friendly resume and cover letter for you.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/dashboard">Get Started Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Bot className="h-64 w-64 text-primary opacity-20" />
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-muted-foreground">
              A simple three-step process to land your dream job.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">1. Upload & Link</CardTitle>
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Upload className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload your existing CV in PDF or DOCX format and paste the link to the job position you're applying for.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">2. AI Analysis</CardTitle>
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Bot className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI analyzes your CV against the job description to identify key skills and experiences, then tailors your resume.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">3. Download</CardTitle>
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Download className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Download your new, optimized CV and a custom-generated cover letter, ready to submit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Hired?</h2>
            <p className="mt-4 text-muted-foreground">
              Join hundreds of successful professionals who have supercharged their job search with CV Genius AI.
            </p>
            <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/register">Create Your CV Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
