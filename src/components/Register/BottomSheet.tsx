import useToast from '@src/hooks/useToast';
import { icClose } from 'public/assets/icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';

interface BottomSheetProps {
  closeModal: () => void;
}

function BottomSheet(props: BottomSheetProps) {
  const { closeModal } = props;
  const [startDate, setStartDate] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [nights, setNights] = useState(0);
  const [days, setDays] = useState(0);
  const { openToast, ToastModal } = useToast(`채팅 신청 완료!
상대방이 수락하면 이야기를 나눌 수 있습니다`);

  useEffect(() => {
    const startNumber = Number(startDate.slice(-2));
    const lastNumber = Number(lastDate.slice(-2));
    setNights(lastNumber - startNumber);
    setDays(lastNumber - startNumber + 1);
  }, [startDate, lastDate]);

  return (
    <>
      <ToastModal />
      <StModalBackground />
      <StBottomSheet>
        <button onClick={closeModal}>
          <ImageDiv className="close" src={icClose} alt="x" />
        </button>
        <StBottomSheetTitle>
          <div>언제 가고 싶어요!</div>
          {startDate && lastDate && (
            <StDate>
              {nights}박 {days}일
            </StDate>
          )}
        </StBottomSheetTitle>
        <StInputContainer>
          <input type="date" onChange={(e) => setStartDate(e.target.value)} />
          <div>-</div>
          <input type="date" onChange={(e) => setLastDate(e.target.value)} />
        </StInputContainer>
        <StChattingButton onClick={openToast} isSelected={startDate && lastDate ? true : false}>
          1:1 대화 신청하기
        </StChattingButton>
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
  text-align: right;

  .close {
    width: 27px;
    height: 27px;
    padding-top: 16px;
  }
`;

const StChattingButton = styled.button<{ isSelected: boolean }>`
  display: block;
  width: 100%;
  height: 61px;
  line-height: 61px;
  border-radius: 80px;
  background-color: ${({ isSelected }) => (isSelected ? '#6765ff' : ' #E9E9FF')};
  color: #fff !important;
  margin-bottom: 48px;
  text-align: center;
  font-weight: 500;
  font-size: 17px;
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
