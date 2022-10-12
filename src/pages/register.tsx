import Button from '@src/components/Register/Button';
import ImageDiv from '@src/components/common/ImageDiv';
import SelectImage from '@src/components/Register/SelectImage';
import UploadImage from '@src/components/Register/UploadImage';
import { icBack } from 'public/assets/icons';
import { useState } from 'react';
import styled from 'styled-components';

export default function Register() {
  const [pageIdx, setPageIdx] = useState<number>(0);
  const [files, setFiles] = useState<Blob[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [representImg, setRepresentImg] = useState<string | null>(null);
  const [nextValid, setNextValid] = useState<boolean>(false);
  const pages = [
    files.length === 0 ? (
      <UploadImage setFiles={setFiles} setImages={setImages} />
    ) : (
      <SelectImage
        images={images}
        representImg={representImg}
        setRepresentImg={setRepresentImg}
        setNextValid={setNextValid}
      />
    ),
  ];
  return (
    <StRegister>
      <StHeader>
        <ImageDiv className="test" src={icBack} alt="" />
        <div>
          <span id="page-num">
            {pageIdx + 1}/{pages.length}
          </span>
          <span id="cancle">X</span>
        </div>
      </StHeader>
      {pages[pageIdx]}
      <Button name="다음으로" handleClick={() => setPageIdx((prev) => prev + 1)} nextValid={nextValid} />
    </StRegister>
  );
}

const StRegister = styled.div``;
const StHeader = styled.div`
  display: flex;
  width: 375px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    margin-right: 20px;
  }
  span {
    display: block;
    background-color: #eeeeee;
    text-align: center;
    height: 27px;
    line-height: 27px;
  }
  #page-num {
    width: 55px;
    border-radius: 29px;
    margin-right: 11px;
  }
  #cancle {
    width: 27px;
    border-radius: 50%;
  }
`;
