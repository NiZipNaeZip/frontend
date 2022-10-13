import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

function PlaceInputContainer() {
  const [detail, setDetail] = useState('');
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
  };

  return (
    <StPlaceInputContainer>
      <h1>어디에 살고 계신가요?</h1>
      <div>
        <input name="zoneCode" value={router.query?.zoneCode} readOnly />
        <Link href="/search">
          <a>주소 찾기</a>
        </Link>
      </div>
      <input name="address" value={router.query?.address} readOnly />
      <input value={detail} onChange={handleChange} />
    </StPlaceInputContainer>
  );
}

export default PlaceInputContainer;

const StPlaceInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  h1 {
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 160.3%;
  }

  div {
    display: flex;
    gap: 1.9rem;

    a {
      width: 12rem;
      height: 4.6rem;
      background: #17cbd3;
      border-radius: 10px;
    }
  }

  input {
    border: 0.1rem solid #efefef;
    border-radius: 1rem;
    height: 4.6rem;
  }

  input:not(:last-child) {
    cursor: default;
  }
`;
