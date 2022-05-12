import { useProgress } from '@react-three/drei';
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About';
import { Hero } from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  const { progress } = useProgress();

  return (
    <div>
      <Head>
          <title>Mijael Flores Vega</title>
          <meta name="title" content="Portfolio Mijael"></meta>
          <meta name="description" content="Personal website of Mijael Flores Vega with details of his knowledge, personality and projects." />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="Portfolio Mijael"/>
          <meta property="og:description" content="Personal website of Mijael Flores Vega with details of his knowledge, personality and projects."/>
          <meta property="og:image" content="https://i.imgur.com/rmyU0v1.png"/>
      </Head>
      <main className="flex flex-col items-center">
          <div className="transition-all w-full bg-gradient-to-b from-slate-700 to-gray-900" 
            style={{opacity: progress < 95 ? 0 : 1}}
          >
              <Hero />
              <About />
              <Skills />
              <Portfolio />
          </div>
      </main>
    </div>
  )
}

export default Home
