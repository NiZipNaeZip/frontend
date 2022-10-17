import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { icBack } from 'public/assets/icons';
import ImageDiv from '@src/components/common/ImageDiv';
import { useRouter } from 'next/router';
import Notification from '@src/components/notification/Notification';
import { client } from '@src/services/libs/api';

export default function NotificationPage() {
  const router = useRouter();
  const [noticeList, setNoticeList] = useState<any[]>([]);
  const handleClickPrevious = () => {
    router.push('/');
  };
  useEffect(() => {
    (async () => {
      const { data } = await client.get(`/user/1/notice`);
      setNoticeList(data);
    })();
  }, []);

  return (
    <StMainContainer>
      <StHeader>
        <ImageDiv className="back" src={icBack} alt="뒤로 가기" onClick={handleClickPrevious} />
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
            period={`${info.viewMyNoticeImageResDTO.startDate} - ${info.viewMyNoticeImageResDTO.endDate}`}
          />
        ))}
      </StNotificationContainer>
    </StMainContainer>
  );
}

const StMainContainer = styled.div`
  padding: 0 20px;
`;

const StHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;

  h5 {
    margin: 0 auto;
  }

  .back {
    cursor: pointer;
    width: 27px;
    height: 27px;
  }
`;

const StNotificationContainer = styled.div``;
