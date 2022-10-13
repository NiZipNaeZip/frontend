import styled from 'styled-components';

interface IProps {
  isConfirm: boolean;
  isOpen: boolean;
  title: string;
  content: string;
  leftComment: string;
  rightComment: string;
  handleRightButton: () => void;
  handleLeftButton: () => void;
}
export default function Modal(props: IProps) {
  const { isOpen, isConfirm, title, content, leftComment, rightComment, handleRightButton, handleLeftButton } = props;
  return (
    <StModalBackground isOpen={isOpen}>
      <StModalContent isConfirm={isConfirm}>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 224px;
  margin: 60% auto;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  h5 {
    font-family: Noto Sans KR;
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
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
    }
    #submit {
      background-color: ${({ isConfirm }) => (isConfirm ? '#ef4040' : '#FFB84D')};
      color: ${({ isConfirm }) => (isConfirm ? '#white' : 'black')};
    }
    #cancle {
      background-color: ${({ isConfirm }) => (isConfirm ? '#ececec' : '#13CC89')};
      background-color: #ececec;
    }
  }
`;
