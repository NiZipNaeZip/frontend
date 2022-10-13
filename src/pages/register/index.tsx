import Button from '@src/components/Register/Button';
import ImageDiv from '@src/components/common/ImageDiv';
import SelectImage from '@src/components/Register/SelectImage';
import UploadImage from '@src/components/Register/UploadImage';
import { icBack } from 'public/assets/icons';
import { useState } from 'react';
import styled from 'styled-components';
import PlaceInputContainer from '@src/components/Register/PlaceInputContainer';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();
  const [pageIdx, setPageIdx] = useState<number>(0);
  const [files, setFiles] = useState<Blob[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [representImg, setRepresentImg] = useState<string | null>(null);
  const [nextValid, setNextValid] = useState<boolean>(false);

  const handleClickPrevious = () => {
    if (pageIdx === 0) {
      router.back();
      return;
    }
    setPageIdx((prev) => prev - 1);
  };

  const handleClickNext = () => {
    setPageIdx((prev) => prev + 1);
    setNextValid(false);
  };

  const handleClickSubmit = () => {
    //todo : 오브젝트 형태로 넘겨주기
    router.push('/');
  };

  const pages = [
    <PlaceInputContainer />,
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
        <ImageDiv className="test" src={icBack} alt="" onClick={handleClickPrevious} />
        <div>
          <span id="page-num">
            {pageIdx + 1}/{pages.length}
          </span>
          <span id="cancle">X</span>
        </div>
      </StHeader>
      {pages[pageIdx]}
      {pageIdx !== pages.length + 1 ? (
        <Button name="다음으로" handleClick={handleClickNext} nextValid={nextValid} />
      ) : (
        <Button name="등록완료" handleClick={handleClickSubmit} nextValid={nextValid} />
      )}
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
    font-size: 11px;
    background-color: #000000;
    color: white;
    width: 27px;
    border-radius: 50%;
  }
`;
