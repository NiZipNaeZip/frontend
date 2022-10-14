import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface AttractionJejuProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

function AttractionJeju(props: AttractionJejuProps) {
  const { setNextValid } = props;
  return (
    <StAttractionJeju>
      <div></div>
    </StAttractionJeju>
  );
}

export default AttractionJeju;

const StAttractionJeju = styled.div``;
