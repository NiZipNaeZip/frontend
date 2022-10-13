import Modal from '@src/components/common/Modal';
import { useState } from 'react';

interface IProps {
  isConfirm: boolean;
  title: string;
  content: string;
  rightComment: string;
  leftComment: string;
  handleRightButton?: () => void;
  handleLeftButton: () => void;
}

export default function useModal(props: IProps) {
  const { isConfirm, title, rightComment, content, leftComment, handleRightButton, handleLeftButton } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleRightButtonClick = () => {
    if (isConfirm) {
      setIsOpen(false);
      return;
    }
    if (handleRightButton) handleRightButton();
    setIsOpen(false);
  };
  const modal = () => (
    <Modal
      content={content}
      isConfirm={isConfirm}
      isOpen={isOpen}
      title={title}
      rightComment={rightComment}
      leftComment={leftComment}
      closeModal={closeModal}
      handleLeftButton={() => {
        handleLeftButton();
        setIsOpen(false);
      }}
      handleRightButton={handleRightButtonClick}
    />
  );
  return {
    openModal,
    Modal: modal,
  };
}
