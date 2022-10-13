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
        <input value={router.query?.zoneCode} readOnly />
        <Link href="/search">
          <a>우편번호 검색</a>
        </Link>
      </div>
      {router.query?.zonCode && (
        <>
          <input value={router.query?.address} readOnly />
          <input value={detail} onChange={handleChange} />
        </>
      )}
    </StPlaceInputContainer>
  );
}

export default PlaceInputContainer;

const StPlaceInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h1 {
    font-weight: 700;
    font-size: 21px;
    line-height: 160.3%;
    margin-bottom: 26px;
  }

  div {
    display: flex;
    gap: 19px;

    a {
      height: 46px;
      background: #082a5c;
      border-radius: 10px;
      color: #ffffff;
      padding: 12px 20px 12px 19px;
      font-size: 14px;
      line-height: 22px;
    }
  }

  input {
    border-bottom: 1px solid #e1e1e1;
    height: 46px;
  }

  input:not(:last-child) {
    cursor: default;
  }
`;
