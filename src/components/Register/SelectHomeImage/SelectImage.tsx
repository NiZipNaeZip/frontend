import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface IProps {
  images: string[];
  representImg: string | null;
  setRepresentImg: Dispatch<SetStateAction<string | null>>;
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

export default function SelectImage(props: IProps) {
  const { images, representImg, setRepresentImg, setNextValid } = props;
  setNextValid(true);
  return (
    <StSelectImage>
      <img src={representImg ?? images[0]} />
      <StImageContainer>
        {images.map((image) => (
          <img key={image} src={image} onClick={() => setRepresentImg(image)} />
        ))}
      </StImageContainer>
    </StSelectImage>
  );
}

const StSelectImage = styled.div`
  margin-top: 40px;
  padding: 0 20px;

  img {
    object-fit: cover;
  }

  & > img {
    width: 100%;
    max-width: 420px;
    height: 312px;
    border-radius: 8px;
    margin-bottom: 16px;
  }
`;

const StImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  img {
    width: calc(calc(100% - 28px) / 3);
    height: 108px;
    border-radius: 8px;
  }
`;
