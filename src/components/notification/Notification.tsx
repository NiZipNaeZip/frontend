import useToast from '@src/hooks/useToast';
import { useRouter } from 'next/router';
import { icCalendar, icLocationColored } from 'public/assets/icons';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';

interface IProps {
  img: string;
  title: string;
  location: string;
  period: string;
  // status: 'ACCEPT' | 'UNREAD';
  status: string;
  messageLink: string;
}

export default function Notification(props: IProps) {
  const router = useRouter();
  const { img, title, location, period, status, messageLink } = props;

  return (
    <StMainContainer>
      <div>
        <img src={img} />
        <StContentContainer>
          <span id="title">{title}</span>
          <div>
            <ImageDiv src={icLocationColored} className="test" alt="" />
            <span>{location}</span>
          </div>
          <div>
            <ImageDiv src={icCalendar} className="test" alt="" />
            <span>{period}</span>
          </div>
        </StContentContainer>
      </div>
      {status === 'UNREAD' ? (
        <StButtonContainer>
          <button>거절</button>
          <button onClick={() => router.push(messageLink)}>수락</button>
        </StButtonContainer>
      ) : (
        <StReConversationButton>대화하기</StReConversationButton>
      )}
    </StMainContainer>
  );
}

const StMainContainer = styled.div`
  border-bottom: 1px solid #a3a3a3;
  width: 100%;
  height: 224px;
  border-radius: 0px;
  padding: 25px 20px 25px 20px;
  & > div:first-child {
    display: flex;
    img {
      width: 103px;
      height: 103px;
      border-radius: 8px;
    }
  }
`;
const StContentContainer = styled.div`
  margin-left: 22px;
  #title {
    display: block;
    width: 100%;
    height: 44px;
    margin-bottom: 16px;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
  & > div {
    display: flex;
    margin-bottom: 6px;
    div {
      margin-right: 6px;
    }
    span {
      width: 100%;
      height: 19px;
      font-family: Noto Sans KR;
      font-size: 12px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #a3a3a3;
    }
  }
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
  margin-top: 24px;
  button {
    width: 155px;
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
