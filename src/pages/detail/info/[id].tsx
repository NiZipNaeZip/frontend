import styled from 'styled-components';
import Slider from 'react-slick';
import { imgUpload } from 'public/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { icLike, icMark } from 'public/assets/icons';
import BottomSheet from '@src/components/Register/BottomSheet';

const imgList = [imgUpload, imgUpload, imgUpload, imgUpload];
export default function InfoDetail() {
  const [imgIdx, setImgIdx] = useState<number>(0);
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

  // TODO
  const title = '탄 인테리어가 매력적인 홍대 자취방 봄바람을 철환하였';
  const place = '서울특별시 마포구 공덕동';
  const tagList = ['아파트', '원룸', '10평 미만'];

  return (
    <StMainContainer>
      <StSliderWrapper>
        <Slider {...settings}>
          {imgList.map((image, idx) => (
            <StImageWrapper key={idx}>
              <ImageDiv src={image} className="test" alt="" />
            </StImageWrapper>
          ))}
        </Slider>
        <span>
          {imgIdx + 1}/{imgList.length}
        </span>
      </StSliderWrapper>
      <StDetailWrapper>
        <StDetailTitle>{title}</StDetailTitle>
        <StPlace>
          <ImageDiv src={icMark} alt="" />
          {place}
        </StPlace>
        <StTagList>
          {tagList.map((tag) => (
            <span>{tag}</span>
          ))}
        </StTagList>
        <button onClick={() => setIsModalOpen(true)}>
          <ImageDiv className="like" src={icLike} alt="" />
          관심 있어요
        </button>
      </StDetailWrapper>
      {isModalOpen && <BottomSheet closeModal={() => setIsModalOpen(false)} />}
    </StMainContainer>
  );
}

const StMainContainer = styled.div`
  width: 100%;
`;
const StSliderWrapper = styled.div`
  & > span {
    float: right;
    margin-right: 20px;
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
`;
const StImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 314px;
  text-align: center;
  align-items: center;
  img {
    width: 100%;
    min-width: 100vw;
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
    height: 27px;
  }
`;
