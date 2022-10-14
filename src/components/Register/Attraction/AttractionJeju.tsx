import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface AttractionJejuProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

function AttractionJeju(props: AttractionJejuProps) {
  const { setNextValid } = props;
  return (
    <StAttractionJeju>
      <StTitle>집 근처에서 어떻게 노나요?</StTitle>
      <StLine />
    </StAttractionJeju>
  );
}

export default AttractionJeju;

const StAttractionJeju = styled.div``;

const StTitle = styled.h2``;

const StLine = styled.div`
  max-width: 420px;
  width: 100%;
  margin-left: -20px;
  background: #f9f9f9;
  height: 10px;
`;
