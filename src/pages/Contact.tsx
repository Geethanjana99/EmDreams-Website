import React, { useState, useEffect } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent } from
'../components/ui/card';
// icons
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
'../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { SendIcon, MailIcon, MessageSquareIcon, PhoneCall, Facebook } from 'lucide-react';
import { useFAQs } from '../utils/dataHooks';
import type { FAQ } from '../types';

export function Contact() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    const loadContactData = async () => {
      const faqsData = await useFAQs();
      setFaqs(faqsData);
    };
    loadContactData();
  }, []);
  // No form on this page; users can contact via phone, email or WhatsApp below.

  return (
    <div className="w-full">
      <SectionContainer className="pt-24 pb-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            CONTACT US
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? We'd love to hear from you. Reach out using any option below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Email Card */}
          <Card className="group bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-8 pb-6 px-6 text-center flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MailIcon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">Reach out via email for inquiries and proposals.</p>
              <a href="mailto:helloemdreams@gmail.com" className="text-primary font-medium">helloemdreams@gmail.com →</a>
            </CardContent>
          </Card>

          {/* Call Card */}
          <Card className="group bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-8 pb-6 px-6 text-center flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <PhoneCall className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Prefer to speak? Give us a call.</p>
              <a href="tel:+94773251345" className="text-primary font-medium">+94 77 325 1345 →</a>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <Card className="group bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-8 pb-6 px-6 text-center flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MessageSquareIcon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Send a quick message on WhatsApp.</p>
              <a href="https://wa.me/94773251345" target="_blank" rel="noreferrer" className="text-primary font-medium">+94 77 325 1345 →</a>
            </CardContent>
          </Card>

          {/* Facebook Card */}
          <Card className="group bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-8 pb-6 px-6 text-center flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Facebook className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2">Facebook</h3>
              <p className="text-muted-foreground mb-4">Follow us on Facebook for updates and news.</p>
              <a href="https://facebook.com/EmDreams" target="_blank" rel="noreferrer" className="text-primary font-medium">EmDreams →</a>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) =>
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 rounded-lg bg-white/5 px-4 data-[state=open]:border-primary/50 transition-colors">

                <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </SectionContainer>
    </div>);

}