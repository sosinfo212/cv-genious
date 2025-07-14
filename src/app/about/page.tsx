// src/app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    avatarUrl: 'https://placehold.co/100x100.png',
    bio: 'Visionary leader with a passion for leveraging AI to solve real-world career challenges.',
  },
  {
    name: 'Samantha Lee',
    role: 'Lead AI Engineer',
    avatarUrl: 'https://placehold.co/100x100.png',
    bio: 'Expert in natural language processing and the architect behind our CV tailoring technology.',
  },
  {
    name: 'David Chen',
    role: 'Head of Product',
    avatarUrl: 'https://placehold.co/100x100.png',
    bio: 'Dedicated to creating intuitive and impactful user experiences for job seekers.',
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              About CV Genius AI
            </h1>
            <p className="text-lg text-muted-foreground">
              We believe that landing your dream job shouldn't be a game of chance. It should be about showcasing your true potential. CV Genius AI was born from a simple idea: to empower every job seeker with the tools they need to stand out in a competitive market.
            </p>
            <p className="text-muted-foreground">
              Our mission is to bridge the gap between talented individuals and their ideal careers by eliminating the friction of the application process. We use cutting-edge AI to analyze job requirements and tailor your professional story, ensuring you always put your best foot forward.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Our Team"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl shadow-primary/20"
              data-ai-hint="diverse team working"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-muted-foreground">
              The passionate individuals dedicated to revolutionizing your job search.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="bg-background/80 text-center">
                <CardHeader className="items-center">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={member.avatarUrl} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                    </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
