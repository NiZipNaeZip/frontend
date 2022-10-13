import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useModal from '@src/hooks/useModal';
import Button from '@src/components/Register/Button';
import ImageDiv from '@src/components/common/ImageDiv';
import SelectHomeImage from '@src/components/Register/SelectHomeImage';
import HomeInformation from '@src/components/Register/HomeInformation';
import HomePrecuations from '@src/components/Register/HomePrecautions';
import PlaceInputContainer from '@src/components/Register/PlaceInputContainer';
import { icBack, icCloseBg } from 'public/assets/icons';
import PeopleInformation from '@src/components/Register/PeopleInformation';

export default function Register() {
  const router = useRouter();
  const [pageIdx, setPageIdx] = useState<number>(0);
  const [files, setFiles] = useState<Blob[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [representImg, setRepresentImg] = useState<string | null>(null);
  const [nextValid, setNextValid] = useState<boolean>(false);

  const handleClickPrevious = () => {
    //todo : 페이지 인덱스에 따라 다르게 동작
    if (pageIdx === 1) {
      setFiles([]);
      setImages([]);
      setNextValid(false);
      return;
    }
    // if (pageIdx === 0) {
    //   router.back();
    //   return;
    // }
    setNextValid(false);
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

  const isNotEssential = (pageNum: number) => {
    // 필수 항목 아닌 경우
    const notEssentialList = [0];
    return notEssentialList.includes(pageNum);
  };
  const pages = [
    <PlaceInputContainer setNextValid={setNextValid} />,
    <SelectHomeImage
      setFiles={setFiles}
      setImages={setImages}
      images={images}
      representImg={representImg}
      setRepresentImg={setRepresentImg}
      setNextValid={setNextValid}
    />,
    <PeopleInformation />,
    <HomeInformation setNextValid={setNextValid} />,
    <HomePrecuations setNextValid={setNextValid} />,
  ];

  const { openModal, Modal }: any = useModal({
    title: '집 등록을 그만둡니다.',
    content: `    나가기를 하면 현재 페이지까지 
    입력한 정보는 저장되지 않습니다.`,
    submitContent: '나가기',
    handleSubmit: () => router.push('/'),
  });

  return (
    <>
      <Modal />
      <StRegister>
        <StHeader>
          <ImageDiv className="test" src={icBack} alt="" onClick={handleClickPrevious} />
          <div>
            <span id="page-num">
              {pageIdx + 1}/{pages.length}
            </span>
            <ImageDiv className="test" src={icCloseBg} alt="" onClick={openModal} />
          </div>
        </StHeader>
        <StMainContent>{pages[pageIdx]}</StMainContent>
        <StFooter>
          {isNotEssential(pageIdx) && <span>필수 항목이 아닙니다.</span>}
          {pageIdx + 1 !== pages.length ? (
            <Button name="다음으로" handleClick={handleClickNext} nextValid={nextValid} />
          ) : (
            <Button name="등록완료" handleClick={handleClickSubmit} nextValid={nextValid} />
          )}
        </StFooter>
      </StRegister>
    </>
  );
}

const StFooter = styled.div`
  width: calc(100% - 40px);
  max-width: 420px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: fixed;
  margin: 0 auto;
  bottom: 46px;
`;
const StMainContent = styled.div`
  height: 660px;
  overflow: auto;
  margin-bottom: 108px;
`;
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
