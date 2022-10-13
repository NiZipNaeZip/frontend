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
          <img src={image} onClick={() => setRepresentImg(image)} />
        ))}
      </StImageContainer>
    </StSelectImage>
  );
}

const StSelectImage = styled.div`
  margin-top: 40px;
  & > img {
    height: 312px;
    width: 343px;
    border-radius: 8px;
  }
`;
const StImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  /* justify-content: space-between; */
  img {
    margin-top: 8px;
    margin-left: 10px;
    height: 108px;
    width: 108px;
    border-radius: 8px;
  }
`;