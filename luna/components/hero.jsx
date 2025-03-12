import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1>
          Unlock Your Potential with Smart Career Coaching            <br />
          Your AI-Driven Path to Professional Growth
          </h1>
          <p>
          Personalized Career Support for a Brighter Future.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="px-8">
            <Link href="/dashboard">LETS Go</Link>
          </Button>

          <Button asChild size="lg" className="px-8" variant="outline">
            <Link href="">READY TO ROCK</Link>
          </Button>
        </div>

        {/* Image Section */}
        <div className="mt-10">
          <Image 
            src="/banner.jpg"
            width={1280}
            height={720}
            alt="Banner"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
