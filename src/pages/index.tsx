import SEO from '@src/components/common/SEO';
import Link from 'next/link';
import styled from 'styled-components';

function Home() {
  return (
    <StHome>
      <SEO title="메인 페이지" />
      <div>Home</div>
    </StHome>
  );
}

export default Home;

const StHome = styled.div`
  font-size: 2rem;
  line-height: 2rem;

  & > a {
    display: block;
  }
`;
