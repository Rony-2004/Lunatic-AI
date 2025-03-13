"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const HeroSection = () => {const imageRef =useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
  
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");  // Ensure it resets when scrolled back up
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  
  
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
        <h1 className="text-5xl font-bold md:text-3xl lg:text-5xl xl:text-4 xl gradient-title">
  Unlock Your Potential with Smart Career Coaching
  <br />
  Your AI-Driven Path to Professional Growth
</h1>

          <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
          Personalized Career Support for a Brighter Future.
          </p>
        </div >

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
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-imge">
          <Image 
            src="/banner.jpg"
            width={1280}
            height={720}
            alt="Banner"
            priority
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
