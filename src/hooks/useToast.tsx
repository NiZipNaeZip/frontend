import { useRef, useState } from 'react';
import styled from 'styled-components';

export default function useToast(content: string) {
  const [animationName, setAnimationName] = useState<string>('slide-in');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeoutId = useRef<null | ReturnType<typeof setTimeout>>(null);
  const removeToast = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setAnimationName('slide-out');
    setTimeout(() => {
      setIsOpen(false);
      setAnimationName('slide-in');
    }, 250);
  };
  const openToast = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    if (isOpen) {
      removeToast();
      setTimeout(() => setIsOpen(true), 260);
    } else {
      setIsOpen(true);
    }
    timeoutId.current = setTimeout(removeToast, 3000);
  };
  const ToastModal = () => (
    <StAnimationWrapper>
      <StToastContainer className={animationName} isOpen={isOpen} onClick={removeToast}>
        <pre>{content}</pre>
      </StToastContainer>
    </StAnimationWrapper>
  );
  return {
    openToast,
    ToastModal,
  };
}

const StToastContainer = styled.div<{ isOpen: boolean }>`
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 76px;
  width: calc(100% - 40px);
  max-width: 380px;
  margin-left: 20px;
  height: 84px;
  border-radius: 10px;
  padding: 20px;
  background-color: black;
  color: white;
  //styleName: regular/p;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`;

const StAnimationWrapper = styled.div`
  .slide-in {
    animation-duration: 0.35s;
    animation-name: slidein;
  }
  .slide-out {
    animation-duration: 0.35s;
    animation-name: slideout;
  }

  @keyframes slidein {
    from {
      top: -84px;
    }
    to {
      top: 76px;
    }
  }
  @keyframes slideout {
    from {
      top: 76px;
    }
    to {
      top: -84px;
    }
  }
`;
