import styled from 'styled-components';
import Slider from 'react-slick';
import { imgUpload } from 'public/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { icLike } from 'public/assets/icons';
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
