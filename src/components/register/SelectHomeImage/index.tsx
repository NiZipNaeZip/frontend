import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import SelectImage from './SelectImage';
import UploadImage from './UploadImage';

interface IProps {
  setFiles: Dispatch<SetStateAction<Blob[]>>;
  setImages: Dispatch<SetStateAction<string[]>>;
  setRepresentImg: Dispatch<SetStateAction<string | null>>;
  setNextValid: Dispatch<SetStateAction<boolean>>;
  images: string[];
  representImg: string | null;
}

export default function SelectHomeImage(props: IProps) {
  const { setFiles, setImages, images, representImg, setRepresentImg, setNextValid } = props;
  return (
    <StMainDiv>
      <StHeaderDiv>
        <h5>내 집은</h5>
        <h5>이렇게 생겼어요!</h5>
      </StHeaderDiv>
      {images.length === 0 ? (
        <UploadImage setFiles={setFiles} setImages={setImages} />
      ) : (
        <SelectImage
          images={images}
          representImg={representImg}
          setRepresentImg={setRepresentImg}
          setNextValid={setNextValid}
        />
      )}
    </StMainDiv>
  );
}

const StMainDiv = styled.div`
  width: 100%;
`;

const StHeaderDiv = styled.div`
  margin-top: 40px;
  padding: 0 20px;
`;
