import ImageDiv from '@src/components/common/ImageDiv';
import SEO from '@src/components/common/SEO';
import useModal from '@src/hooks/useModal';
import { api } from '@src/services/api';
import { client } from '@src/services/libs/api';
import { useRouter } from 'next/router';
import { icDetailBack } from 'public/assets/icons';
import { icLocation } from 'public/assets/icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Detail() {
  const router = useRouter();
  const { location } = router.query;
  const { openModal, Modal }: any = useModal({
    isConfirm: false,
    title: '다른곳도 둘러볼까요?',
    content: `    육지를 선택하면 제주의 집을,
    제주를 선택하면 육지의 집을 살펴볼 수 있습니다.`,
    leftComment: '제주',
    rightComment: '육지',
    handleLeftButton: () => router.replace('/detail/jeju'),
    handleRightButton: () => router.replace('/detail/land'),
  });
  const [houseList, setHouseList] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const { data } = await client.get(`/house/${location === 'jeju' ? '제주' : '육지'}`);
      setHouseList(data);
    })();
  }, [location]);

  return (
    <>
      <SEO title="상세 페이지" />
      <Modal />
      <StMainContainer>
        <div onClick={openModal}>
          <ImageDiv
            src={icDetailBack}
            className=""
            alt=""
            onClick={(e) => {
              e.stopPropagation;
              router.push('/');
            }}
          />
          <h5>{location === 'jeju' ? '제주' : '육지'}</h5>
          {location === 'land' && <span>서울, 경기, 인천, 부산, 강원 등</span>}
        </div>
        {houseList.map((house: any) => (
          <StDetailContainer key={house.houseId} onClick={() => router.push(`/detail/info/${house.houseId}`)}>
            <img src={`https://jipyo.link/${house.filePath.split('/').pop()}`} width="100%" height="222px" />
            <StContentWrapper>
              <span>{house.houseName}</span>
              <div>
                <ImageDiv src={icLocation} className="test" alt="" />
                <span>{house.address}</span>
              </div>
              <StTagContainer>
                <span>{house.houseInfoDTO.buildingType}</span>
                <span>{house.houseInfoDTO.numberOfRooms}</span>
                <span>{house.houseInfoDTO.numberOfHouse}</span>
              </StTagContainer>
            </StContentWrapper>
          </StDetailContainer>
        ))}
      </StMainContainer>
    </>
  );
}

const StMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:first-child {
    display: flex;
    align-items: center;
    width: calc(100% - 40px);
    margin-top: 20px;
    height: 59px;
    margin-bottom: 26px;
    border-radius: 60px;
    box-shadow: 0px 7px 18px 0px #0000000a;
    div {
      margin-left: 20px;
    }
    h5 {
      line-height: 59px;
      margin-left: 18px;
    }
    span {
      display: block;
      margin-left: 8px;
      color: #a3a3a3;
      font-family: Noto Sans KR;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;

const StDetailContainer = styled.div`
  width: 100%;
  .thumbnail {
    width: 100%;
    height: 222px;
  }
`;
const StTagContainer = styled.div`
  span {
    display: inline-block;
    height: 27px;
    border-radius: 130px;
    padding: 4px 12px 4px 12px;
    background-color: #eef3f9;
    margin-right: 8px;
  }
`;
const StContentWrapper = styled.div`
  width: 100%;
  height: 143px;
  padding: 18px 20px 28px 18px;
  & > div {
    display: flex;
    margin-top: 9px;
    margin-bottom: 19px;
    div {
      margin-right: 6px;
    }
    span {
      display: block;
      font-family: Noto Sans KR;
      font-size: 12px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #a3a3a3;
    }
  }
  & > span {
    display: block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
