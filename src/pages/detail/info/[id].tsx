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
  const content = `저희집의 가장 좋은 점은 위치인데요!  도보 10분거리면 인스타감성의 망원동 핫플들 갈 수 있구요. 한강공원도 걸어서 10분이면 갈 수 있어요. 또 홍대까지 걸어서 20분이고, 마을버스 타면 10분만에 갑니당. 낮에는 한강, 밤에는 홍대의 젊음을 느껴보고 싶으신 분들한테는 저희집이 최고일 듯 해요 :)

사진 보면 아시다시피, 남향이라 햇빛도 진짜 잘
들어오구요. 건조기, 에어프라이어, 커피머신 등등 집에 웬만한 가전제품은 다 구비되어 있어요.
  
다만, 층간소음에 예민한 건물이라 9시 이후로는 반드시 조용히 해주셔야 합니다! 그리고 제가 깔끔한 편이라,
저랑 일상교환할 파트너분도 깔끔한 성격이시면
좋겠어요~ 
  
망원동 ~ 홍대 주변 맛집이랑 핫플 제가 다 꿰고 있는데ㅎㅎ 만약 교환 확정되면 파트너분한테 정보 싹 다
알려드릴게요! 같이 매너 지키며 일상교환 하실 
제주/부산 사는 분들 연락 편하게 주세요 :)`;
  const warning = `원룸이라 방음이 잘 안돼요. 10시 이후에는 조용히 해주셔야 합니다🥲`;

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
        <StSubtitle>집을 소개합니다</StSubtitle>
        <StContent>{content}</StContent>
        <StSubtitle>주의해주세요!</StSubtitle>
        <StWarning>{warning}</StWarning>
        <StSubtitle>근처에서 이렇게 놀아요</StSubtitle>
        <StSubtitle>빌려 드립니다</StSubtitle>
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
