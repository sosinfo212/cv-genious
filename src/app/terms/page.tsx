// src/app/terms/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12">
            Terms of Service
          </h1>

          <Card className="mb-8 bg-secondary/20">
            <CardHeader>
              <CardTitle>Important Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These are template terms of service and should not be considered legal advice. You should consult with a legal professional to ensure your terms are compliant with all applicable laws and regulations for your specific business.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the CV Genius AI website (the "Service") operated by CV Genius AI ("us", "we", or "our").
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. User Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of CV Genius AI and its licensors. You retain all rights to the documents you create, but you grant us a license to use them to provide and improve the service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>

             <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Limitation of Liability</h2>
              <p>
                In no event shall CV Genius AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of our jurisdiction, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
