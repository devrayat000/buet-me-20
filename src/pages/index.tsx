import type { NextPage } from "next";
import Head from "next/head";
import { Engine, Container } from 'tsparticles'
import Particles from 'react-tsparticles'

import background from "../utils/background.json";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {

  const particlesInit = async (main: Engine) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = async (container: Container) => {
    console.log(container);
  };

  return (
    <div>
      <NextSeo
        title="BUET ME '20 | Section A"
        description="A general purpose web platform for information sharing among section A of ME'20"
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'buet,me,mecha,mechanical,20,xx,mech'
          }
        ]}
        openGraph={{
          url: 'https://buet-me-20-chi.vercel.app/',
          title: "BUET ME '20 | Section A",
          description: "A general purpose web platform for information sharing among section A of ME'20",
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
        <Particles options={{ preset: 'fountain', ...(background as any) }} id="tsparticles" init={particlesInit} loaded={particlesLoaded} />
        <article className="flex flex-col justify-center items-center min-h-screen z-10">
          <h1 className="text-center text-4xl">Welcome to Mecha<span className="text-blue-600">Land</span></h1>
          <h1 className="text-3xl">BUET ME&apos;20</h1>
        </article>
      </section>
    </div>
  );
};

export default Home;
