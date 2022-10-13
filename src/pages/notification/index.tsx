import React from 'react';
import styled from 'styled-components';
import { icBack } from 'public/assets/icons';
import ImageDiv from '@src/components/common/ImageDiv';
import { useRouter } from 'next/router';
import Notification from '@src/components/notification/Notification';
import useToast from '@src/hooks/useToast';

const data = [
  {
    status: 'UNREAD',
    img: '',
    period: '10월1일 ~ 10월3일',
    title: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    location: '서울특별시 마포구 공덕동',
  },
  {
    status: 'ACCEPT',
    img: '',
    period: '10월1일 ~ 10월3일',
    title: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    location: '서울특별시 마포구 공덕동',
  },
  {
    status: 'UNREAD',
    img: '',
    period: '10월1일 ~ 10월3일',
    title: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    location: '서울특별시 마포구 공덕동',
  },
  {
    status: 'UNREAD',
    img: '',
    period: '10월1일 ~ 10월3일',
    title: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    location: '서울특별시 마포구 공덕동',
  },
  {
    status: 'UNREAD',
    img: '',
    period: '10월1일 ~ 10월3일',
    title: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    location: '서울특별시 마포구 공덕동',
  },
];
export default function NotificationPage() {
  const router = useRouter();
  const handleClickPrevious = () => {};
  const { ToastModal, openToast }: any = useToast(`채팅 신청 완료!
상대방이 수락하면 이야기를 나눌 수 있습니다`);
  return (
    <>
      <ToastModal />
      <StMainContainer>
        <StHeader>
          <ImageDiv className="test" src={icBack} alt="" onClick={handleClickPrevious} />
          <h5>알림</h5>
        </StHeader>
        <StNotificationContainer>
          {data.map((info) => (
            <Notification {...info} handleClick={openToast} />
          ))}
        </StNotificationContainer>
      </StMainContainer>
    </>
  );
}

const StMainContainer = styled.div``;
const StHeader = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;
  h5 {
    margin: 0 auto;
  }
`;

const StNotificationContainer = styled.div``;
