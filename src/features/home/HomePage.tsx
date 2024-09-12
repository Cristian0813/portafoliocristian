'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import FlipCard from './components/FlipCard';


export default function HomePage() {
  return (
    <section className="py-4 my-4 sm:my-8 sm:py-8 md:my-9 md:py-9 lg:mt-9 lg:py-9 xl:my-10 xl:py-10 2xl:my-12 2xl:py-12 ">
      <div className="container mx-auto max-w-6xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="flex items-center justify-between flex-col lg:flex-row p-2">
          <HeroSection />
          <FlipCard />
        </div>
      </div>
    </section>
  );
}
