import ImageDiv from '@src/components/common/ImageDiv';
import SEO from '@src/components/common/SEO';
import useModal from '@src/hooks/useModal';
import useToast from '@src/hooks/useToast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { icBrand, icHome, icNotice } from 'public/assets/icons';
import { useEffect } from 'react';
import styled from 'styled-components';

function Home() {
  const router = useRouter();
  const query = router.query;
  const { openModal, Modal }: any = useModal({
    isConfirm: false,
    title: '어디에 살고 싶나요?',
    content: '',
    leftComment: '제주',
    rightComment: '육지',
    handleLeftButton: () => router.push('/detail/jeju'),
    handleRightButton: () => router.push('/detail/land'),
  });
  const { openToast, ToastModal } = useToast(`집 등록이 완료되었습니다!
니집내집과 함께 색다른 집에서 함께해요`);
  useEffect(() => {
    if (query.register) {
      openToast();
    }
  }, [query]);
  return (
    <>
      <ToastModal />
      <Modal />
      <StHome>
        <SEO title="니집내집" />
        <StHeader>
          <ImageDiv src={icBrand} className="brand" alt="니집내집" />
          <ImageDiv src={icNotice} className="notice" alt="알림" onClick={() => router.push('/notification')} />
        </StHeader>
        <StFooter>
          <Link href="/register">
            <StRegisterHome>
              <ImageDiv src={icHome} className="home" alt="" />
              <span>집을 등록할래요.</span>
            </StRegisterHome>
          </Link>
          <button onClick={openModal}>어디서 살아볼까요?</button>
        </StFooter>
      </StHome>
    </>
  );
}

export default Home;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 420px;
  height: 60px;
  margin-top: 40px;
  padding: 20px;

  .brand {
    width: 95px;
    height: 27px;
  }

  .notice {
    width: 27px;
    height: 27px;
    cursor: pointer;
  }
`;

const StFooter = styled.div`
  position: fixed;
  width: 100%;
  max-width: 420px;
  padding: 20px;
  bottom: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
    height: 61px;
    margin-top: 25px;
    border-radius: 10px;
    background-color: #6765ff;
    font-size: 17px;
    font-weight: 500;
    line-height: 27px;
    color: white;
    text-align: center;
  }
`;

const StRegisterHome = styled.a`
  display: flex;
  align-items: center;
  width: 160px;
  height: 36px;
  border-radius: 110px;
  padding: 7px 16px 7px 16px;
  background-color: black;
  cursor: pointer;

  .home {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  span {
    color: white;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`;

const StHome = styled.div`
  width: 100%;
  height: 100vh;
  background: #282828 no-repeat center/100% url('/assets/images/img_main.png');
`;
