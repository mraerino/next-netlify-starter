export default function BlogPost({ locale, slug }) {
  return (
    <>
      <h1>{slug}</h1>
      <p>Your locale is: {locale}</p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      locale: context.locale,
    },
  };
}
