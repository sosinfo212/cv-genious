// src/app/contact/page.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question, feedback, or need support? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
             <Card className="bg-secondary/20 border-0">
                <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>
                        You can reach us through the following channels. We strive to respond within 24 hours.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3 text-primary">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-semibold">Email</p>
                            <a href="mailto:support@cvgenius.ai" className="text-muted-foreground hover:text-primary">
                                support@cvgenius.ai
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3 text-primary">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-semibold">Phone</p>
                            <p className="text-muted-foreground">(123) 456-7890</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3 text-primary">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-semibold">Office</p>
                            <p className="text-muted-foreground">123 Innovation Drive, Tech City, 12345</p>
                        </div>
                    </div>
                </CardContent>
             </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
