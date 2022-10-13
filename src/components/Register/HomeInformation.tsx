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
      <StMainDiv>
        <StOneWordHeader>
          <h5>당신의 집을 한마디로 표현한다면?</h5>
        </StOneWordHeader>
        <StOneWordInfo>
          <input value={oneWordInfo} onChange={(e) => setOneWordInfo(e.target.value)} />
          <span>최대 30자</span>
        </StOneWordInfo>
        <StBrDiv />
        <StRecommendHeader>
          <h5>이런 분께 추천합니다.</h5>
        </StRecommendHeader>
        <StRecommendInfo>
          <textarea value={recommendInfo} onChange={(e) => setRecommendInfo(e.target.value)} />
          <span>최대 500자</span>
        </StRecommendInfo>
      </StMainDiv>
    </div>
  );
}

const StOneWordHeader = styled.div`
  margin-top: 40px;
`;

const StRecommendHeader = styled.div`
  margin-top: 88px;
`;

const StBrDiv = styled.div`
  max-width: 420px;
  position: absolute;
  width: calc(100% + 40px);
  left: -20px;
  height: 10px;
  background-color: #f9f9f9;
`;

const StMainDiv = styled.div``;

const StOneWordInfo = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;
  width: 100%;
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

const StRecommendInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 302px;
  margin-top: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  textarea {
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    border: none;
    resize: none;
    outline-color: #f9f9f9;
  }
  span {
    margin-left: 250px;
    width: 60px;
    height: 19.24px;
    line-height: 19.24px;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0em;
    color: #a3a3a3;
  }
`;