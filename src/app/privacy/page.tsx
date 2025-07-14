// src/app/privacy/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="w-full bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12">
            Privacy Policy
          </h1>
          
          <Card className="mb-8 bg-secondary/20">
            <CardHeader>
              <CardTitle>Important Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This is a template privacy policy and should not be considered legal advice. You should consult with a legal professional to ensure your privacy policy is compliant with all applicable laws and regulations for your specific situation.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8 text-muted-foreground">
            <p>Last updated: {lastUpdated || '...'}</p>
            <p>
              CV Genius AI ("us", "we", or "our") operates the CV Genius AI website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Information Collection and Use</h2>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                <h3 className="text-xl font-semibold text-foreground">Types of Data Collected</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: email address, first name and last name, and usage data.
                    </li>
                    <li>
                        <strong>Document Data:</strong> To provide the core functionality of our service, we process the documents (CVs) and job descriptions you upload or provide. This data is used solely for the purpose of generating tailored documents for you.
                    </li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Use of Data</h2>
                <p>CV Genius AI uses the collected data for various purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and maintain our Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To provide customer support</li>
                    <li>To gather analysis or valuable information so that we can improve our Service</li>
                    <li>To monitor the usage of our Service</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. Data Security</h2>
                <p>
                    The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us through our contact page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
