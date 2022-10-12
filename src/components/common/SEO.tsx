import Head from 'next/head';

interface SEOProps {
  title: string;
}

function SEO(props: SEOProps) {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="설명" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="사이트 이름" />
      <meta property="og:title" content="사이트 타이틀 | 이런 식으로 작성" />
      <meta property="og:description" content="설명" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="keywords" content="키워드1, 키워드2, 키워드3" />
    </Head>
  );
}

export default SEO;
