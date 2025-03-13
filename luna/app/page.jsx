import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from '@/components/hero';
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Reusable Statistic Card Component
const StatisticCard = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center space-y-2">
    <h3 className="text-4xl font-bold">{value}</h3>
    <p className="text-muted-foreground">{label}</p>
  </div>
);

// Reusable Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <Card className="bg-background">
    <CardContent className="pt-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image 
              width={40}
              height={40}
              src={testimonial.image}
              alt={testimonial.author}
              loading="lazy"
              className="rounded-full object-cover border-2 border-primary/20"
            />
          </div>
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            <p className="text-sm text-primary">{testimonial.company}</p>
          </div>
        </div>
        <blockquote>
          <p className="text-muted-foreground italic relative">
            <span className="text-3xl text-primary absolute -top-4 -left-2">&quot;</span>
            {testimonial.quote}
            <span className="text-3xl text-primary absolute -bottom-4">&quot;</span>
          </p>
        </blockquote>
      </div>
    </CardContent>
  </Card>
);

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Empowering Your Journey to Career Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
  <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
    <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <StatisticCard
        value={
          <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
            30+
          </span>
        }
        label="Diverse Industries Supported"
      />
    </div>
    <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <StatisticCard
        value={
          <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
            500+
          </span>
        }
        label="Curated Interview Resources"
      />
    </div>
    <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <StatisticCard
        value={
          <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
            90%
          </span>
        }
        label="Success Rate Achieved"
      />
    </div>
    <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <StatisticCard
        value={
          <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
            24/7
          </span>
        }
        label="AI-Powered Assistance"
      />
    </div>
  </div>
</section>




      {/* Testimonial Section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
      User Talks
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonial.map((testimonial, index) => (
        <div
          key={index}
          className="transform transition-transform duration-300 hover:scale-105"
        >
          <TestimonialCard testimonial={testimonial} />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full ">
        <div className="mx-auto py-24 gradient rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
            Step Into Success
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
            Join the journey to unlock your true potential and shape a brighter future!
          </p>
          <Link href="/dashboard" passHref>
            <Button size="lg" variant="secondary" className="h-11 mt-5 animate-bounce">
              Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
