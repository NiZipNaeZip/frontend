import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';

interface PlaceInputContainerProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

function PlaceInputContainer(props: PlaceInputContainerProps) {
  const { setNextValid } = props;
  const [detail, setDetail] = useState('');
  const router = useRouter();
  const { zoneCode, address } = router.query;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
  };

  useEffect(() => {
    const passCondition = zoneCode && address && detail;
    setNextValid(passCondition ? true : false);
  }, [detail]);

  return (
    <StPlaceInputContainer>
      <h1>어디에 살고 계신가요?</h1>
      <div>
        <input value={zoneCode || ''} placeholder="우편번호를 입력하세요." readOnly />
        <Link href="/search">
          <a>우편번호 검색</a>
        </Link>
      </div>
      <input value={address || ''} readOnly />
      <input value={detail} placeholder="상세 주소를 적어주세요." onChange={handleChange} />
    </StPlaceInputContainer>
  );
}

export default PlaceInputContainer;

const StPlaceInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 20px;
  justify-content: center;

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

  input:first-child {
    flex: 1;
  }

  input:not(:last-child) {
    cursor: default;
  }
`;
