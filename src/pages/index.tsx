import { Inter } from 'next/font/google'

import HomePage from './Home';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }: any) {

  const [serverComponent, setServerComponent] = useState('serverComponent');
  return (
    <main>
      <HomePage />
    </main>
  )
}
