import { imgUpload } from 'public/assets/images';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import DropZone from '../common/DropZone';
import ImageDiv from '../common/ImageDiv';

interface IProps {
  setFiles: Dispatch<SetStateAction<Blob[]>>;
  setImages: Dispatch<SetStateAction<string[]>>;
}
export default function UploadImage(props: IProps) {
  const { setFiles, setImages } = props;
  return (
    <div>
      <DropZone setFiles={setFiles} setImages={setImages}>
        <h2>우리집 사진을 올려주세요 !</h2>
        <StDropZoneDiv>
          <ImageDiv className="test" src={imgUpload} alt="" />
        </StDropZoneDiv>
      </DropZone>
    </div>
  );
}

const StDropZoneDiv = styled.div`
  position: relative;
  width: 144px;
  img {
    width: 144px;
    height: 144px;
  }
`;
