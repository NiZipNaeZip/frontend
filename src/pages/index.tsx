import ImageDiv from '@src/components/common/ImageDiv';
import SEO from '@src/components/common/SEO';
import useModal from '@src/hooks/useModal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { icBrand, icHome, icNotice } from 'public/assets/icons';
import styled from 'styled-components';

function Home() {
  const router = useRouter();
  const { openModal, Modal }: any = useModal({
    isConfirm: false,
    title: '어디에 사시나요?',
    content: '현재 사시는 땅을 선택해 주세요!',
    leftComment: '제주',
    rightComment: '육지',
    handleLeftButton: () => router.push('/detail/jeju'),
    handleRightButton: () => router.push('/detail/land'),
  });
  return (
    <>
      <Modal />
      <StHome>
        <SEO title="니집내집" />
        <div id="header">
          <ImageDiv src={icBrand} className="test" alt="" />
          <ImageDiv src={icNotice} className="test" alt="" onClick={() => router.push('/notification')} />
        </div>
        <StFooter>
          <Link href="/register">
            <a>
              <StRegisterHome>
                <ImageDiv src={icHome} className="test" alt="" />
                <span>집을 등록할래요.</span>
              </StRegisterHome>
            </a>
          </Link>
          <button onClick={openModal}>
            <span>어디서 살아볼까요?</span>
          </button>
        </StFooter>
      </StHome>
    </>
  );
}

export default Home;

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
    border-radius: 10px;
    background-color: #6765ff;
    margin-top: 25px;
    span {
      //styleName: medium/CTA;
      font-family: Noto Sans KR;
      font-size: 17px;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: 0em;
      color: white;
      text-align: center;
    }
  }
`;

const StRegisterHome = styled.div`
  height: 36px;
  width: 160px;
  border-radius: 110px;
  padding: 7px 16px 7px 16px;
  display: flex;
  background-color: black;
  div {
    margin-right: 10px;
  }
  span {
    color: white;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
const StHome = styled.div`
  width: 100%;
  height: 100%;
  min-width: 380px;
  min-height: 844px;
  background-image: url('assets/images/img_main.svg');
  font-size: 2rem;
  line-height: 2rem;
  #main-background {
    position: fixed;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      min-width: 100vw;
    }
  }
  & > a {
    display: block;
  }
  #header {
    justify-content: space-between;
    display: flex;
    height: 60px;
    width: 100%;
    max-width: 420px;
    border-radius: 0px;
    align-items: center;
    margin-top: 40px;
    padding: 20px;
  }
`;
