import React from 'react';
import styled from 'styled-components';
import { icBack } from 'public/assets/icons';
import ImageDiv from '@src/components/common/ImageDiv';
import { useRouter } from 'next/router';
import Notification from '@src/components/notification/Notification';

const data = [
  {
    status: 'UNREAD',
    img: '',
    period: '10월1일 ~ 10월3일',
    title: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    location: '서울특별시 마포구 공덕동',
    messageLink: '',
  },
  {
    status: 'ACCEPT',
    img: '',
    period: '10월1일 ~ 10월3일',
    title: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    location: '서울특별시 마포구 공덕동',
    messageLink: '',
  },
  {
    status: 'UNREAD',
    img: '',
    period: '10월1일 ~ 10월3일',
    title: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    location: '서울특별시 마포구 공덕동',
    messageLink: '',
  },
  {
    status: 'UNREAD',
    img: '',
    period: '10월1일 ~ 10월3일',
    title: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    location: '서울특별시 마포구 공덕동',
    messageLink: '',
  },
  {
    status: 'UNREAD',
    img: '',
    period: '10월1일 ~ 10월3일',
    title: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    location: '서울특별시 마포구 공덕동',
    messageLink: '',
  },
];
export default function NotificationPage() {
  const router = useRouter();
  const handleClickPrevious = () => {
    router.back();
  };

  return (
    <StMainContainer>
      <StHeader>
        <ImageDiv className="test" src={icBack} alt="" onClick={handleClickPrevious} />
        <h5>알림</h5>
      </StHeader>
      <StNotificationContainer>
        {data.map((info) => (
          <Notification {...info} />
        ))}
      </StNotificationContainer>
    </StMainContainer>
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
