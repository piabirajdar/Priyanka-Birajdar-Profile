/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EducationAndCerts } from './components/EducationAndCerts';
import { Contact } from './components/Contact';
import { CityBackground } from './components/CityBackground';

export default function App() {
  return (
    <div className="min-h-screen w-full text-white selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <EducationAndCerts />
        <Projects />
        <Contact />
      </main>
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Priyanka Birajdar. All rights reserved.</p>
      </footer>
      <CityBackground />
    </div>
  );
}
