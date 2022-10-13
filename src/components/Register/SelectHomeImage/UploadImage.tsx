import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import DropZone from '../../common/DropZone';

interface IProps {
  setFiles: Dispatch<SetStateAction<Blob[]>>;
  setImages: Dispatch<SetStateAction<string[]>>;
}
export default function UploadImage(props: IProps) {
  const { setFiles, setImages } = props;
  return (
    <div>
      <DropZone setFiles={setFiles} setImages={setImages}>
        <StDropZoneDiv>
          <div></div>
        </StDropZoneDiv>
      </DropZone>
      <StInformationDiv>
        <p>당신의 집을 가장 잘 표현한 사진을</p>
        <p>첫번째로 골라주세요!</p>
      </StInformationDiv>
    </div>
  );
}

const StDropZoneDiv = styled.div`
  position: relative;
  width: 144px;
  margin-bottom: 24px;
  margin-left: -10px;
  margin-top: 100px;
  div {
    width: 375px;
    height: 214px;
    background: #d9d9d9;
  }
`;

const StHeaderDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
`;

const StInformationDiv = styled.div`
  text-align: center;
  p {
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
