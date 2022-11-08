import Head from 'next/head';

interface SEOProps {
  title: string;
}

function SEO(props: SEOProps) {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="니집내집" />
      <meta property="og:title" content="니집내집" />
      <meta property="og:description" content="숙박비 없는 여행의 시작! 우리, 집 바꿔 살래요?" />
      <meta property="og:locale" content="ko_KR" />
    </Head>
  );
}

export default SEO;
