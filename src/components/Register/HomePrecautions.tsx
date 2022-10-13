import { icAlert } from 'public/assets/icons';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';

interface IProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}
export default function HomePrecuations(props: IProps) {
  const { setNextValid } = props;
  const [precuations, setPrecuations] = useState<string>('');
  setNextValid(true);
  return (
    <StMainDiv>
      <StHeaderDiv>
        <ImageDiv src={icAlert} className="test" alt="" />
        <h5>이런 활동은 주의해주세요</h5>
      </StHeaderDiv>
      <StRecommendInfo>
        <textarea value={precuations} onChange={(e) => setPrecuations(e.target.value)} />
        <span>최대 500자</span>
      </StRecommendInfo>
    </StMainDiv>
  );
}

const StHeaderDiv = styled.div`
  display: flex;
  margin-top: 40px;
`;

const StMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & > span {
    display: block;
    justify-self: end;
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
    border: none;
    resize: none;
    outline-color: #f9f9f9;
    background-color: #f9f9f9;
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
