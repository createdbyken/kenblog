import Head from 'next/head'
import { NextSeo } from 'next-seo';

export const siteTitle = 'Ken Sanchez | Senior Backend Developer '
export default function Layout({ 
  title = undefined,
  description = undefined,
  canonical = 'https://kenblog.netlify.app/',
  children }) {
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#201e1e" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.8.0/devicon.min.css" />
      </Head>

      <NextSeo title={title} description={description} canonical={canonical} />
      <main>{children}</main>
    </>
  )
}