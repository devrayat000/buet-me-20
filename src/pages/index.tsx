import { useEffect } from 'react';
import Particles from 'react-tsparticles'
import { NextSeo } from "next-seo";
import type { NextPage } from "next";

import background from "../utils/background.json";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <NextSeo
          title="BUET ME '20"
          description="A general purpose web platform for information sharing among ME'20 (currently only providing service for section A)"
          additionalMetaTags={[
            {
              name: 'keywords',
              content: 'buet,me,mecha,mechanical,20,xx,mech'
            }
          ]}
          openGraph={{
            url: 'https://buet-me-20-chi.vercel.app/',
            title: "BUET ME '20 | Section A",
            description: "A general purpose web platform for information sharing among ME'20 (currently only providing service for section A)",
            images: [
              {
                url: '/images/home-og.png',
                width: 800,
                height: 600,
                alt: 'Home Og Image Alt',
                type: 'image/png',
              },
            ],
            site_name: "BUET ME '20",
          }}
        />


        <section className="grid place-items-center relative isolate">
          <Particles options={{ preset: 'fountain', ...(background as any) }} id="tsparticles" />
          <article className="flex flex-col justify-center items-center min-h-screen z-10">
            <h1 className="text-center text-4xl">Welcome to Mecha<span className="text-blue-600">Land</span></h1>
            <h1 className="text-3xl">BUET ME&apos;20</h1>
          </article>
        </section>
      </div>

      <footer className='flex flex-col justify-center items-center fixed bottom-0 inset-x-0 text-sm md:text-base'>
        <h4>&copy; COPYRIGHT 2022 - BUET&apos;XX</h4>
        <h4>Developed by <span className='text-red-500'>Zul Ikram musaddik Rayat</span></h4>
      </footer>
    </>
  );
};

export default Home;
