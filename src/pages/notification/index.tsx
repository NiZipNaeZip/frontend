import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { icBack } from 'public/assets/icons';
import ImageDiv from '@src/components/common/ImageDiv';
import { useRouter } from 'next/router';
import Notification from '@src/components/notification/Notification';
import { client } from '@src/services/libs/api';
import SEO from '@src/components/common/SEO';

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
    <>
      <SEO title="알림" />
      <StMainContainer>
        <StHeader>
          <ImageDiv className="back" src={icBack} alt="뒤로 가기" onClick={handleClickPrevious} />
          <h5>알림</h5>
        </StHeader>
        <div>
          {noticeList.map(({ alarm_id, alarmStatus, viewMyNoticeImageResDTO, address }) => (
            <Notification
              key={alarm_id}
              alarmId={alarm_id}
              status={alarmStatus}
              messageLink={viewMyNoticeImageResDTO.messageLink}
              location={address}
              title={viewMyNoticeImageResDTO.houseName}
              img={`https://jipyo.link/${viewMyNoticeImageResDTO.filePath.split('/').pop()}`}
              period={`${viewMyNoticeImageResDTO.startDate} - ${viewMyNoticeImageResDTO.endDate}`}
            />
          ))}
        </div>
      </StMainContainer>
    </>
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
