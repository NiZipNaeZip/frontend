import styled from 'styled-components';
import Slider from 'react-slick';
import { imgExercise, imgFarm, imgOcean, imgRoad, imgSwimming, imgUpload } from 'public/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { icBack, icLike, icMark } from 'public/assets/icons';
import BottomSheet from '@src/components/Register/BottomSheet';
import SEO from '@src/components/common/SEO';
import { useRouter } from 'next/router';
import { client } from '@src/services/libs/api';

export default function InfoDetail() {
  const [imgIdx, setImgIdx] = useState<number>(0);
  const router = useRouter();
  const [detailInfo, setDetailInfo] = useState<any>();
  useEffect(() => {
    (async () => {
      const { data } = await client.get(`/house/detail/${router.query.id}`);
      setDetailInfo(data);
    })();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIdx: any, newIdx: number) => {
      setImgIdx(newIdx);
    },
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO title="상세 페이지" />
      <StMainContainer>
        <StSliderWrapper>
          <ImageDiv onClick={() => router.back()} src={icBack} className="back" alt="뒤로 가기" />
          <Slider {...settings}>
            {detailInfo?.imagePaths.map((image: any, idx: any) => (
              <StImageWrapper key={idx}>
                <img src={`https://jipyo.link/${image.split('/').pop()}`} />
              </StImageWrapper>
            ))}
          </Slider>
          <span>
            {imgIdx + 1}/{detailInfo?.imagePaths.length}
          </span>
        </StSliderWrapper>
        <StDetailWrapper>
          <StDetailTitle>{detailInfo?.houseName}</StDetailTitle>
          <StPlace>
            <ImageDiv src={icMark} alt="" />
            {detailInfo?.address}
          </StPlace>
          <StTagList>
            <span>{detailInfo?.houseInfoDTO.buildingType}</span>
            <span>{detailInfo?.houseInfoDTO.availablePeople}인</span>
            <span>{detailInfo?.houseInfoDTO.numberOfHouse}</span>
          </StTagList>
          <StSubtitle>집을 소개합니다</StSubtitle>
          <StContent>{detailInfo?.houseIntroduction}</StContent>
          <StSubtitle>주의해주세요!</StSubtitle>
          <StWarning>{detailInfo?.precautionList.join(' ')}</StWarning>
          <StSubtitle>근처에서 이렇게 놀아요</StSubtitle>
          <StAttraction>
            <div>
              <ImageDiv src={imgOcean} className="attraction" alt="" />
              <span>해변</span>
            </div>
            <div>
              <ImageDiv src={imgRoad} className="attraction" alt="" />
              <span>올레길</span>
            </div>
            <div>
              <ImageDiv src={imgFarm} className="attraction" alt="" />
              <span>감귤농장</span>
            </div>
          </StAttraction>
          <StSubtitle>빌려 드립니다</StSubtitle>
          <StAttraction>
            <div>
              <ImageDiv src={imgExercise} className="attraction" alt="" />
              <span>운동기구</span>
            </div>
            <div>
              <ImageDiv src={imgSwimming} className="attraction" alt="" />
              <span>물놀이 용품</span>
            </div>
          </StAttraction>
          <button onClick={() => setIsModalOpen(true)}>
            <ImageDiv className="like" src={icLike} alt="" />
            관심 있어요
          </button>
        </StDetailWrapper>
        {isModalOpen && <BottomSheet closeModal={() => setIsModalOpen(false)} />}
      </StMainContainer>
    </>
  );
}

const StMainContainer = styled.div`
  width: 100%;
`;
const StSliderWrapper = styled.div`
  & > span {
    position: relative;
    float: right;
    right: 20px;
    display: block;
    margin-top: -50px;
    width: 55px;
    height: 27px;
    border-radius: 29px;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 27px;
  }
  .back {
    position: absolute;
    z-index: 999;
    margin: 20px 0 0 30px;
    cursor: pointer;
  }
`;
const StImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 314px;
  text-align: center;
  align-items: center;
  img {
    width: 100%;
    max-height: 314px;
    height: 314px;
    object-fit: cover;
  }
`;

const StDetailWrapper = styled.div`
  padding: 0 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  button {
    display: flex;
    width: 100%;
    height: 61px;
    background: #6765ff;
    color: #fff;
    border-radius: 80px;
    align-items: center;
    justify-content: center;
    margin-top: 93px;
    margin-bottom: 46px;

    .like {
      width: 27px;
      height: 27px;
    }
  }
`;

const StDetailTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 177.8%;
  color: #101223;
  margin-top: 30px;
  margin-bottom: 8px;
`;

const StPlace = styled.div`
  display: flex;
  gap: 6px;
  font-size: 12px;
  line-height: 160.3%;
  color: #a3a3a3;
  margin-bottom: 25px;
`;

const StTagList = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 60px;

  span {
    padding: 4px 12px;
    color: #6765ff;
    background: #e9e9ff;
    border-radius: 130px;
  }
`;

const StSubtitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 160.3%;
  color: #101223;
  margin-bottom: 20px;
`;

const StAttraction = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 160.3%;

  span {
    display: block;
    margin-top: 9px;
  }

  .attraction {
    width: 96px;
    height: 96px;
  }
`;

const StContent = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 60px;
  white-space: pre-wrap;
`;

const StWarning = styled.div`
  background: #fef2f2;
  border-radius: 10px;
  padding: 20px;
  color: #ef4040;
  margin-bottom: 80px;
`;
