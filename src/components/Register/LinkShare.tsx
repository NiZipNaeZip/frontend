import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { icKakao } from 'public/assets/icons';

interface LinkShareProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

function LinkShare(props: LinkShareProps) {
  const { setNextValid } = props;
  const [link, setLink] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  useEffect(() => {
    setNextValid(link ? true : false);
  }, [link]);

  return (
    <StLinkShare>
      <StHeader>
        <p>
          <ImageDiv src={icKakao} />
          소통할 채팅방의 링크를
        </p>
        <p>공유해 주세요</p>
      </StHeader>
      <input placeholder="링크를 입력해 주세요." value={link} onChange={handleChange} />
    </StLinkShare>
  );
}

export default LinkShare;

const StLinkShare = styled.div`
  padding: 0 20px;

  input {
    width: 100%;
    height: 46px;
    margin-top: 30px;
    font-size: 12px;
    line-height: 160.3%;
    border-bottom: 1px solid #e1e1e1;
  }
`;

const StHeader = styled.div`
  font-weight: 700;
  font-size: 21px;
  line-height: 160.3%;
  margin-top: 40px;

  & > p {
    display: flex;
  }
`;
