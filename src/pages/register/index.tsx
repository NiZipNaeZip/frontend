import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useModal from '@src/hooks/useModal';
import Button from '@src/components/register/Button';
import ImageDiv from '@src/components/common/ImageDiv';
import SelectHomeImage from '@src/components/register/SelectHomeImage';
import HomeInformation from '@src/components/register/HomeInformation';
import HomePrecuations from '@src/components/register/HomePrecautions';
import PlaceInputContainer from '@src/components/register/PlaceInputContainer';
import { icBack, icCloseBg } from 'public/assets/icons';
import PeopleInformation from '@src/components/register/PeopleInformation';
import LinkShare from '@src/components/register/LinkShare';
import SEO from '@src/components/common/SEO';
import AttractionJeju from '@src/components/register/Attraction/AttractionJeju';

export default function Register() {
  const router = useRouter();
  const [pageIdx, setPageIdx] = useState<number>(0);
  const [files, setFiles] = useState<Blob[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [representImg, setRepresentImg] = useState<string | null>(null);
  const [nextValid, setNextValid] = useState<boolean>(false);

  const handleClickPrevious = () => {
    //todo : 페이지 인덱스에 따라 다르게 동작
    if (pageIdx === 1 && files.length !== 0) {
      setFiles([]);
      setImages([]);
      setNextValid(false);
      return;
    }
    if (pageIdx === 0) {
      router.push('/');
      return;
    }
    setNextValid(false);
    setPageIdx((prev) => prev - 1);
  };

  const handleClickNext = () => {
    setPageIdx((prev) => prev + 1);
    setNextValid(false);
  };

  const handleClickSubmit = () => {
    //todo : 오브젝트 형태로 넘겨주기
    router.push('/?register=true');
  };

  const isNotEssential = (pageNum: number) => {
    // 필수 항목 아닌 경우
    const notEssentialList = [3, 5];
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
    <PeopleInformation setNextValid={setNextValid} />,
    <AttractionJeju setNextValid={setNextValid} />,
    <HomeInformation setNextValid={setNextValid} />,
    <HomePrecuations setNextValid={setNextValid} />,
    <LinkShare setNextValid={setNextValid} />,
  ];

  const { openModal, Modal }: any = useModal({
    isConfirm: true,
    title: '집 등록을 그만둡니다.',
    content: `    나가기를 하면 현재 페이지까지 
    입력한 정보는 저장되지 않습니다.`,
    leftComment: '나가기',
    rightComment: '취소',
    handleLeftButton: () => router.push('/'),
  });

  return (
    <>
      <SEO title="집 등록" />
      <Modal />
      <div>
        <StHeader>
          <ImageDiv className="back" src={icBack} alt="<" onClick={handleClickPrevious} />
          <div>
            <StPageCounter>
              <span>{pageIdx + 1}</span> / {pages.length}
            </StPageCounter>
            <ImageDiv className="exit" src={icCloseBg} alt="x" onClick={openModal} />
          </div>
        </StHeader>
        <StMainContent>{pages[pageIdx]}</StMainContent>
        <StFooter>
          {isNotEssential(pageIdx) && <span>필수 항목이 아닙니다.</span>}
          {pageIdx + 1 !== pages.length ? (
            <Button name="다음으로" handleClick={handleClickNext} nextValid={nextValid} />
          ) : (
            <Button name="등록하기" handleClick={handleClickSubmit} nextValid={nextValid} />
          )}
        </StFooter>
      </div>
    </>
  );
}

const StFooter = styled.div`
  padding: 0 20px;
  width: 100%;
  max-width: 420px;
  height: 107px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: fixed;
  margin: 0 auto;
  bottom: 0px;
  padding-bottom: 46px;
  background-color: white;

  & > span {
    font-size: 12px;
    line-height: 160.3%;
    color: #6765ff;
  }
`;

const StMainContent = styled.div`
  overflow: auto;
  margin-bottom: 108px;
`;

const StHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;

  & > div {
    display: flex;
  }

  .back,
  .exit {
    width: 27px;
    height: 27px;
    cursor: pointer;
  }
`;

const StPageCounter = styled.div`
  width: 55px;
  height: 27px;
  line-height: 27px;
  border-radius: 29px;
  margin-right: 11px;
  background-color: #eeeeee;
  text-align: center;
  font-weight: 500;

  & > span {
    color: #6765ff;
  }
`;
