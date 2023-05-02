import Image from 'next/image'
import { Inter } from 'next/font/google'

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import HomePage from './Home';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}:any) {

  const [serverComponent, setServerComponent] = useState('serverComponent');

  useEffect(()=>{
    console.log(posts);
  })
  return (
    <main>
      <HomePage />
    </main>
  )
}
