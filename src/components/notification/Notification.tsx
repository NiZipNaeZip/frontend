import { client } from '@src/services/libs/api';
import { useRouter } from 'next/router';
import { icCalendar, icLocationColored } from 'public/assets/icons';
import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';

interface IProps {
  img: string;
  title: string;
  location: string;
  period: string;
  alarmId: number;
  // alarmStatus: 'ACCEPT' | 'UNREAD';
  status: string;
  userName?: string;
  messageLink: string;
}

export default function Notification(props: IProps) {
  const router = useRouter();
  const { img, title, location, alarmId, period, status, messageLink } = props;
  return (
    <StMainContainer>
      <div>
        <ImageDiv className="thumbnail" src={img} blurDataURL={img} alt="" layout="fill" placeholder="blur" />
        <StContentContainer>
          <StTitle>{title}</StTitle>
          <div>
            <ImageDiv src={icLocationColored} className="location" alt="" />
            <span>{location}</span>
          </div>
          <div>
            <ImageDiv src={icCalendar} className="calendar" alt="" />
            <span>{period}</span>
          </div>
        </StContentContainer>
      </div>
      {status === 'UNREAD' ? (
        <StButtonContainer>
          <button>거절</button>
          <button
            onClick={() => {
              client.get(`/notice/accept/${alarmId}`);
              router.push(messageLink);
            }}>
            수락
          </button>
        </StButtonContainer>
      ) : (
        <StReConversationButton onClick={() => router.push(messageLink)}>대화하기</StReConversationButton>
      )}
    </StMainContainer>
  );
}

const StMainContainer = styled.div`
  border-bottom: 1px solid #a3a3a3;
  width: 100%;
  height: 224px;
  border-radius: 0px;
  padding: 25px 0;

  & > div:first-child {
    display: flex;
  }

  & img {
    object-fit: cover;
    border-radius: 8px;
  }

  .thumbnail {
    position: relative;
    width: 103px;
    height: 103px;
  }
`;
const StContentContainer = styled.div`
  margin-left: 22px;

  & > div {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
    font-size: 12px;
    font-weight: 400;
    color: #a3a3a3;

    .location,
    .calendar {
      width: 19px;
      height: 19px;
    }
  }
`;

const StTitle = styled.span`
  display: block;
  height: 44px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`;

const StReConversationButton = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  margin-top: 24px;
  background-color: black;
  color: white;
`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-top: 24px;
  button {
    width: 100%;
    height: 46px;
    border-radius: 10px;
  }
  button:first-child {
    background-color: #e9e9ff;
    color: #6765ff;
  }
  button:last-child {
    background-color: #6765ff;
    color: white;
  }
`;
