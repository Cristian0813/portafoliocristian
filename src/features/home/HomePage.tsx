'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import FlipCard from '@/shared/flipcard/FlipCard';

export default function HomePage() {
  return (
    <section className="pt-8 pb-20 sm:pt-24 sm:px-4 md:pt-16 md:px-6 lg:pt-24 lg:px-12 xl:pt-12 xl:px-14 2xl:pt-12 2xl:pb-12 2xl:px-2">
      <div className="container mx-auto max-w-6xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="flex items-center justify-center flex-col lg:flex-row p-2">
          <HeroSection />
          <FlipCard />
        </div>
      </div>
    </section>
  );
}
