
// src/app/dashboard/page.tsx
'use client';

import { useActionState, useFormStatus } from 'react-dom';
import { handleCvTailoring, State } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, Loader, Download, Copy, FileText, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useToast } from "@/hooks/use-toast"

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Generate Documents
        </>
      )}
    </Button>
  );
}

export default function DashboardPage() {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useActionState(handleCvTailoring, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [copied, setCopied] = useState<'cv' | 'letter' | null>(null);

  useEffect(() => {
    if (state.message && state.message.startsWith('An unexpected error')) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: state.message,
      })
    }
    if (state.data) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  const handleCopy = (content: string, type: 'cv' | 'letter') => {
    navigator.clipboard.writeText(content);
    setCopied(type);
    toast({
      title: "Copied to clipboard!",
      description: `Your ${type === 'cv' ? 'tailored CV' : 'cover letter'} has been copied.`,
    })
    setTimeout(() => setCopied(null), 2000);
  }

  const handleDownload = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
        title: "Download Started",
        description: `Downloading ${filename}.txt.`,
      })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
       <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">CV Generator</h2>
      </div>
      <div className="space-y-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Create New</CardTitle>
              <CardDescription>Fill in the details below to generate your documents.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={dispatch} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jobLink">Job Post Link</Label>
                  <Input id="jobLink" name="jobLink" placeholder="linkedin.com/jobs/..." />
                  {state.errors?.jobLink && (
                    <p className="text-sm font-medium text-destructive">{state.errors.jobLink}</p>
                  )}
                </div>
                <div className="relative text-center my-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Or
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobDescription">Paste Job Description</Label>
                  <Textarea id="jobDescription" name="jobDescription" placeholder="Paste the full job description here..." className="min-h-[150px]" />
                   {state.errors?.jobDescription && (
                    <p className="text-sm font-medium text-destructive">{state.errors.jobDescription}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cv">Upload Your CV</Label>
                  <Input id="cv" name="cv" type="file" required accept=".pdf,.doc,.docx,.txt" />
                  {state.errors?.cv && (
                    <p className="text-sm font-medium text-destructive">{state.errors.cv}</p>
                  )}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
        <div>
          {state.data ? (
            <Tabs defaultValue="cv">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cv">
                    <FileText className="mr-2" />
                    Tailored CV
                </TabsTrigger>
                <TabsTrigger value="letter">
                    <FileText className="mr-2" />
                    Cover Letter
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cv" className="mt-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Tailored CV</CardTitle>
                      <CardDescription>Your CV optimized for the job.</CardDescription>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleCopy(state.data?.tailoredCv ?? '', 'cv')}>
                            {copied === 'cv' ? <Check className="text-green-500" /> : <Copy />}
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => handleDownload(state.data?.tailoredCv ?? '', 'tailored-cv')}>
                            <Download />
                        </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Textarea className="min-h-[60vh] font-mono text-sm" readOnly value={state.data.tailoredCv} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="letter" className="mt-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Cover Letter</CardTitle>
                      <CardDescription>A compelling letter to introduce you.</CardDescription>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleCopy(state.data?.coverLetter ?? '', 'letter')}>
                           {copied === 'letter' ? <Check className="text-green-500" /> : <Copy />}
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => handleDownload(state.data?.coverLetter ?? '', 'cover-letter')}>
                           <Download />
                        </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Textarea className="min-h-[60vh] text-sm leading-relaxed" readOnly value={state.data.coverLetter} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <Card className="flex h-full min-h-[70vh] items-center justify-center border-dashed">
              <div className="text-center">
                <div className="rounded-full bg-secondary p-4 inline-block">
                    <FileText className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Your documents will appear here</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form to get started.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
