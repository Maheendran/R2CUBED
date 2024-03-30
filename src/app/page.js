"use client"
import Banner from '@/app/pages/banner/page'
import { useEffect } from 'react';

import Lenis from "@studio-freight/lenis";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time + 100);
      requestAnimationFrame(raf);
    }
    window.scrollTo(0, 0);
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
  
      <Banner/>

    </>

  );
}
