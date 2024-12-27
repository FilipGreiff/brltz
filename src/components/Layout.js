import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title = 'Bröderna Lantz' }) {
  const pageTitle = `${title} | Lantgårdsbutik i Vankiva`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Bröderna Lantz - Din lokala lantgårdsbutik i Vankiva. Vi erbjuder grus, makadam, matjord och mycket mer." />
      </Head>
      
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}