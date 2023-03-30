import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home({ locale }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">Your locale is: "{locale}"</p>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      locale: context.locale,
    },
    //revalidate: 60,
  };
}
