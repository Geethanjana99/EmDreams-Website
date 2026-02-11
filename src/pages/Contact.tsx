import React, { useState } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent } from
'../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
'../components/ui/select';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
'../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { SendIcon, MailIcon, MessageSquareIcon, MapPinIcon } from 'lucide-react';
import { contactInfoData, faqs } from '../data/contact';
import type { ContactInfo } from '../types';

export function Contact() {
  // Merge icons with data
  const iconMap = {
    Email: MailIcon,
    WhatsApp: MessageSquareIcon,
    Location: MapPinIcon,
  };
  
  const contactInfo: ContactInfo[] = contactInfoData.map(info => ({
    ...info,
    icon: iconMap[info.title as keyof typeof iconMap],
  }));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="w-full">
      <SectionContainer className="pt-24 pb-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            CONTACT US
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? We'd love to hear from you. Fill out
            the form below or reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10 shadow-2xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">
                Send us a message
              </CardTitle>
              <CardDescription>
                Fill out the form and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground/80">

                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value
                    })
                    }
                    required
                    className="bg-black/20 border-white/10 focus-visible:ring-primary" />

                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground/80">

                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                    }
                    required
                    className="bg-black/20 border-white/10 focus-visible:ring-primary" />

                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-foreground/80">

                    Service Interested In
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      service: value
                    })
                    }>

                    <SelectTrigger
                      id="service"
                      className="bg-black/20 border-white/10 focus:ring-primary">

                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/10">
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile Apps</SelectItem>
                      <SelectItem value="cloud">Cloud Solutions</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground/80">

                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value
                    })
                    }
                    required
                    className="bg-black/20 border-white/10 focus-visible:ring-primary resize-none" />

                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-12"
                  size="lg">

                  <SendIcon className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.title}
                  className="group bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300">

                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {info.description}
                        </p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary hover:text-primary/80">

                          {info.action} →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>);

            })}

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/10">
              <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
              <p className="text-muted-foreground mb-6">
                We're located in the heart of the tech district. Come say hello!
              </p>
              <div className="aspect-video w-full rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                <span className="text-muted-foreground flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5" /> Map Placeholder
                </span>
              </div>
            </div>
          </div>
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