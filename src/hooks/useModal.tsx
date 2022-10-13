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
  const handleRightButtonClick = () => {
    if (isConfirm) {
      setIsOpen(false);
      return;
    }
    if (handleRightButton) handleRightButton();
  };
  const modal = () => (
    <Modal
      content={content}
      isConfirm={isConfirm}
      isOpen={isOpen}
      title={title}
      rightComment={rightComment}
      leftComment={leftComment}
      handleLeftButton={handleLeftButton}
      handleRightButton={handleRightButtonClick}
    />
  );
  return {
    openModal,
    Modal: modal,
  };
}
