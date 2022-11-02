import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}
export default function HomeInformation(props: IProps) {
  const { setNextValid } = props;
  const [oneWordInfo, setOneWordInfo] = useState<string>('');
  const [recommendInfo, setRecommendInfo] = useState<string>('');

  useEffect(() => {
    setNextValid(oneWordInfo !== '' && recommendInfo !== '');
  }, [oneWordInfo, recommendInfo]);
  return (
    <div>
      <StOneWordHeader>
        <h5>당신의 집을 한마디로 표현한다면?</h5>
      </StOneWordHeader>
      <StOneWordInfo>
        <input value={oneWordInfo} onChange={(e) => setOneWordInfo(e.target.value)} />
        <span>최대 30자</span>
      </StOneWordInfo>
      <StBrDiv />
      <StRecommend>
        <StRecommendHeader>
          <h5>이런 분께 추천합니다.</h5>
        </StRecommendHeader>
        <StRecommendInfo>
          <textarea
            value={recommendInfo}
            placeholder="당신의 매력적인 집을 소개해 주세요!"
            onChange={(e) => setRecommendInfo(e.target.value)}
          />
          <span>최대 500자</span>
        </StRecommendInfo>
      </StRecommend>
    </div>
  );
}

const StOneWordHeader = styled.div`
  margin-top: 40px;
  padding: 0 20px;
`;

const StRecommendHeader = styled.div`
  margin-top: 38px;
`;

const StBrDiv = styled.div`
  height: 10px;
  background-color: #f9f9f9;
`;

const StOneWordInfo = styled.div`
  display: flex;
  margin: 30px 20px 40px 20px;
  height: 46px;
  border-bottom: 1px solid #a3a3a3;
  box-sizing: content-box;
  input {
    width: calc(100% - 63px);
    height: 46px;
    margin-right: 13px;
    border: none;
  }
  span {
    width: 50px;
    height: 46px;
    line-height: 46px;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: right;
    color: #a3a3a3;
  }
`;

const StRecommend = styled.div`
  padding: 0 20px;
`;

const StRecommendInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 302px;
  margin-top: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;

  textarea {
    height: 100%;
    background-color: #f9f9f9;
  }

  span {
    height: 19.24px;
    line-height: 19.24px;
    font-size: 12px;
    font-weight: 400;
    color: #a3a3a3;
    text-align: right;
  }
`;
