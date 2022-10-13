import Modal from '@src/components/common/Modal';
import { useState } from 'react';

interface IProps {
  title: string;
  content: string;
  submitContent: string;
  handleSubmit: () => void;
}

export default function useModal(props: IProps) {
  const { title, content, submitContent, handleSubmit } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);

  const modal = () => (
    <Modal
      isOpen={isOpen}
      title={title}
      content={content}
      submitContent={submitContent}
      handleCancle={() => setIsOpen(false)}
      handleSubmit={handleSubmit}
    />
  );
  return {
    openModal,
    Modal: modal,
  };
}
