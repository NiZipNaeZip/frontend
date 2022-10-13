import ThumbnailInfo from '@src/components/detail/ThumbnailInfo';
import useModal from '@src/hooks/useModal';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const data = [
  {
    img: '',
    title: '라탄 인테리어가 매력적인 홍대 자취방 봄바람을 철환하였',
    location: '서울마포시 마포구 공덕동',
    tags: ['tag', 'tag', 'tag'],
  },
  {
    img: '',
    title: '라탄 인테리어가 매력적인 홍대 자취방 봄바람을 철환하였',
    location: '서울마포시 마포구 공덕동',
    tags: ['tag', 'tag', 'tag'],
  },
  {
    img: '',
    title: '라탄 인테리어가 매력적인 홍대 자취방 봄바람을 철환하였',
    location: '서울마포시 마포구 공덕동',
    tags: ['tag', 'tag', 'tag'],
  },
  {
    img: '',
    title: '라탄 인테리어가 매력적인 홍대 자취방 봄바람을 철환하였',
    location: '서울마포시 마포구 공덕동',
    tags: ['tag', 'tag', 'tag'],
  },
];

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
  return (
    <>
      <Modal />
      <StMainContainer>
        <div>
          <h5 onClick={openModal}>{location === 'jeju' ? '제주' : '한국'}</h5>
        </div>
        {data.map((info) => (
          <ThumbnailInfo {...info} />
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
    width: calc(100% - 40px);
    margin-top: 20px;
    margin-left: 20px;
    height: 59px;
    margin-bottom: 26px;
    border-radius: 60px;
    box-shadow: 0px 7px 18px 0px #0000000a;
    h5 {
      line-height: 59px;
      margin-left: 54px;
    }
  }
`;
