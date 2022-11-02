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
      <StModalContent onClick={(e) => e.stopPropagation()}>
        <ImageDiv src={icClose} className="close" alt="x" onClick={closeModal} />
        <h5>{title}</h5>
        <pre>{content}</pre>
        <StButtonContainer isConfirm={isConfirm}>
          <button onClick={handleLeftButton}>{leftComment}</button>
          <button onClick={handleRightButton}>{rightComment}</button>
        </StButtonContainer>
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
`;

const StModalContent = styled.div`
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: white;
  text-align: center;
  max-width: 380px;
  width: calc(100% - 40px);
  padding: 16px 20px;

  h5 {
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 10px;
  }

  pre {
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
  }

  .close {
    width: 27px;
    height: 27px;
    cursor: pointer;
    margin-bottom: 35px;
    margin-left: auto;
  }
`;

const StButtonContainer = styled.div<{ isConfirm: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin-top: 25px;
  margin-bottom: 2px;

  button {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    font-weight: 500;
  }

  button:first-child {
    background-color: ${({ isConfirm }) => (isConfirm ? '#ef4040' : '#FFB84D')};
    color: ${({ isConfirm }) => (isConfirm ? 'white' : 'black')};
  }

  button:last-child {
    background-color: ${({ isConfirm }) => (isConfirm ? '#ececec' : '#13CC89')};
  }
`;
