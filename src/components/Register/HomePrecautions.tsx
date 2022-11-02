import { icAlert } from 'public/assets/icons';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';

interface IProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}
export default function HomePrecautions(props: IProps) {
  const { setNextValid } = props;
  const [precautions, setPrecautions] = useState<string>('');
  setNextValid(true);
  return (
    <StHomePrecautions>
      <StHeaderDiv>
        <ImageDiv src={icAlert} className="alert" alt="" />
        <h5>이런 활동은 주의해 주세요!</h5>
      </StHeaderDiv>
      <StRecommendInfo>
        <textarea
          value={precautions}
          placeholder="집 사용 시 주의 사항을 적어주세요."
          onChange={(e) => setPrecautions(e.target.value)}
        />
        <span>최대 500자</span>
      </StRecommendInfo>
    </StHomePrecautions>
  );
}

const StHeaderDiv = styled.div`
  display: flex;
  margin-top: 40px;

  .alert {
    width: 34px;
    height: 34px;
  }
`;

const StHomePrecautions = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 20px;

  & > span {
    display: block;
    justify-self: end;
  }
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
