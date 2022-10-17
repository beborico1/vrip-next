import Head from 'next/head'
import BrandsList from '../components/BrandsList'
import Header from '../components/Header'

export default function Home() {  
  return (
    <div>
      <Head>
        <title>Vrip</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <BrandsList/>
    </div>
  )
}