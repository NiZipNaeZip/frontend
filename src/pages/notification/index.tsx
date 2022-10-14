import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { icBack } from 'public/assets/icons';
import ImageDiv from '@src/components/common/ImageDiv';
import { useRouter } from 'next/router';
import Notification from '@src/components/notification/Notification';
import { client } from '@src/services/libs/api';

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
  const [noticeList, setNoticeList] = useState<any[]>([]);
  const handleClickPrevious = () => {
    router.push('/');
  };
  useEffect(() => {
    (async () => {
      const { data } = await client.get(`/user/1/notice`);
      console.log(data);
      setNoticeList(data);
    })();
  }, []);

  return (
    <StMainContainer>
      <StHeader>
        <ImageDiv className="test" src={icBack} alt="" onClick={handleClickPrevious} />
        <h5>알림</h5>
      </StHeader>
      <StNotificationContainer>
        {noticeList.map((info, idx) => (
          <Notification
            key={idx}
            alarmId={info.alarm_id}
            status={info.alarmStatus}
            messageLink={info.viewMyNoticeImageResDTO.messageLink}
            location={info.address}
            title={info.viewMyNoticeImageResDTO.houseName}
            img={`https://jipyo.link/${info.viewMyNoticeImageResDTO.filePath.split('/').pop()}`}
            period={`${info.viewMyNoticeImageResDTO.startDate} ~ ${info.viewMyNoticeImageResDTO.endDate}`}
          />
          // <Notification {...info} />
        ))}
      </StNotificationContainer>
    </StMainContainer>
  );
}

const StMainContainer = styled.div``;
const StHeader = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;
  h5 {
    margin: 0 auto;
  }
`;

const StNotificationContainer = styled.div``;
