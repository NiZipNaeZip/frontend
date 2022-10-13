import Link from 'next/link';
import { icClose } from 'public/assets/icons';
import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';

interface BottomSheetProps {
  closeModal: () => void;
}

function BottomSheet(props: BottomSheetProps) {
  const { closeModal } = props;

  return (
    <>
      <StModalBackground />
      <StBottomSheet>
        <button onClick={closeModal}>
          <ImageDiv className="close" src={icClose} alt="x" />
        </button>
        <StBottomSheetTitle>
          <div>언제 가고 싶어요!</div>
          <StDate>0박 0일</StDate>
        </StBottomSheetTitle>
        <StInputContainer>
          <input type="date" onChange={(e) => console.log(e.target.value)} />
          <div>-</div>
          <input type="date" onChange={(e) => console.log(e.target.value)} />
        </StInputContainer>
        <Link href={'https://open.kakao.com/o/sVtSLMHe'} passHref>
          <a>1:1 대화 신청하기</a>
        </Link>
      </StBottomSheet>
    </>
  );
}

export default BottomSheet;

const StModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 420px;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StBottomSheet = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 420px;
  height: 345px;
  padding: 0 20px;
  border-radius: 15px 15px 0 0;
  background: #fff;

  .close {
    width: 27px;
    height: 27px;
    padding-top: 16px;
  }

  & > a {
    display: block;
    width: 100%;
    height: 61px;
    line-height: 61px;
    border-radius: 80px;
    background-color: #6765ff;
    color: #fff !important;
    margin-bottom: 48px;
    text-align: center;
    font-weight: 500;
    font-size: 17px;
  }
`;

const StBottomSheetTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 21px;
  line-height: 160.3%;
  margin-top: 28px;
  margin-bottom: 30px;
`;

const StDate = styled.div`
  height: 30px;
  border-radius: 130px;
  background-color: #e9e9ff;
  color: #6765ff;
  font-weight: 500;
  font-size: 14px;
  line-height: 160.3%;
  padding: 4px 12px;
`;

const StInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;

  & > div {
    margin: auto 6px;
  }
`;
