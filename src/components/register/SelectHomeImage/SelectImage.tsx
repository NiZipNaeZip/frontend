import ImageDiv from '@src/components/common/ImageDiv';
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
      <ImageDiv className="representative" layout="fill" src={representImg ?? images[0]} />
      <StImageContainer>
        {images.map((image) => (
          <ImageDiv
            key={image}
            className="selected-image"
            layout="fill"
            src={image}
            onClick={() => setRepresentImg(image)}
          />
        ))}
      </StImageContainer>
    </StSelectImage>
  );
}

const StSelectImage = styled.div`
  margin-top: 40px;
  padding: 0 20px;

  .representative {
    position: relative;
    width: 100%;
    max-width: 420px;
    height: 312px;
    margin-bottom: 16px;
  }

  img {
    border-radius: 8px;
    object-fit: cover;
  }
`;

const StImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  .selected-image {
    position: relative;
    width: calc(calc(100% - 28px) / 3);
    height: 108px;
    cursor: pointer;
  }
`;
