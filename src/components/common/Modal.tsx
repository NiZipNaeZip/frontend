import { icClose } from 'public/assets/icons';
import styled from 'styled-components';
import ImageDiv from './ImageDiv';

interface IProps {
  isConfirm: boolean;
  isOpen: boolean;
  title: string;
  content: string;
  leftComment: string;
  rightComment: string;
  closeModal: () => void;
  handleRightButton: () => void;
  handleLeftButton: () => void;
}
export default function Modal(props: IProps) {
  const {
    isOpen,
    isConfirm,
    title,
    content,
    leftComment,
    rightComment,
    handleRightButton,
    handleLeftButton,
    closeModal,
  } = props;
  return (
    <StModalBackground isOpen={isOpen} onClick={closeModal}>
      <StModalContent isConfirm={isConfirm} onClick={(e) => e.stopPropagation()}>
        <div>
          <div />
          <div />
          <ImageDiv src={icClose} className="" alt="" onClick={closeModal} />
        </div>
        <h5>{title}</h5>
        <pre>{content}</pre>
        <div>
          <button id="submit" onClick={handleLeftButton}>
            {leftComment}
          </button>
          <button id="cancle" onClick={handleRightButton}>
            {rightComment}
          </button>
        </div>
      </StModalContent>
    </StModalBackground>
  );
}

const StModalBackground = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  max-width: 420px;
  height: 100%;
  z-index: 1;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 20px;
`;
const StModalContent = styled.div<{ isConfirm: boolean }>`
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  text-align: center;
  max-width: 380px;
  width: calc(100% - 40px);
  h5 {
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 10px;
  }
  pre {
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
  }
  & > div {
    width: 100%;
    padding: 0 20.5px;
    display: flex;
    justify-content: space-around;
    gap: 14px;
    button {
      width: 100%;
      height: 50px;
      border-radius: 10px;
      margin-top: 25px;
      margin-bottom: 20px;
    }
    #submit {
      background-color: ${({ isConfirm }) => (isConfirm ? '#ef4040' : '#FFB84D')};
      color: ${({ isConfirm }) => (isConfirm ? '#white' : 'black')};
    }
    #cancle {
      background-color: ${({ isConfirm }) => (isConfirm ? '#ececec' : '#13CC89')};
    }
  }
  & > div:first-child {
    height: 60px;
    align-items: center;
    justify-content: space-between;
  }
`;
