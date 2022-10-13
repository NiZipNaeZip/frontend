import { useRouter } from 'next/router';
import { icClose } from 'public/assets/icons';
import styled from 'styled-components';
import ImageDiv from './ImageDiv';

function CloseHeader() {
  const router = useRouter();

  return (
    <StCloseHeader>
      <button onClick={() => router.back()}>
        <ImageDiv className="close" src={icClose} alt="x" />
      </button>
    </StCloseHeader>
  );
}

export default CloseHeader;

const StCloseHeader = styled.div`
  padding: 16px 0 17px 0;
  height: 60px;

  .close {
    width: 27px;
    height: 27px;
    cursor: pointer;
  }
`;
