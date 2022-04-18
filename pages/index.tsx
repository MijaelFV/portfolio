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
          <title>Portfolio Mijael</title>
          <meta name="description" content="Mijael Flores Vega Portfolio" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
          <div className="transition-all w-full" 
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
