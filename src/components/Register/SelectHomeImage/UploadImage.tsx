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
        <StDropZoneDiv />
      </DropZone>
      <StInformationDiv>
        <p>당신의 집을 가장 잘 표현한 사진을</p>
        <p>첫번째로 골라주세요!</p>
      </StInformationDiv>
    </div>
  );
}

const StDropZoneDiv = styled.div`
  width: 375px;
  height: 222px;
  margin: 0 auto;
  margin-top: 100px;
  background: url('/assets/images/img_add.svg');
  cursor: pointer;
`;

const StInformationDiv = styled.div`
  margin-top: 33px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`;
