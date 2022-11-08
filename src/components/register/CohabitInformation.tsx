import { useState } from 'react';
import styled from 'styled-components';
import CheckboxButton from '../common/CheckboxButton';

function CohabitInformation() {
  const [checkedButton, setCheckedButton] = useState('집 전체');

  return (
    <StCohabitInformation>
      <CheckboxButton
        onClick={() => setCheckedButton('집 전체')}
        isChecked={checkedButton === '집 전체'}
        option="집 전체"
        description="모든 공간을 단독으로 사용하고 있어요."
      />
      <CheckboxButton
        onClick={() => setCheckedButton('1인실')}
        isChecked={checkedButton === '1인실'}
        option="1인실"
        description="침실은 단독으로 사용하지만, 욕실 및 주방 등 다른 사람과 공유하는 공간이 있어요."
      />
      <CheckboxButton
        onClick={() => setCheckedButton('다인실')}
        isChecked={checkedButton === '다인실'}
        option="다인실"
        description="침실을 포함한 모든 공간을 다른 사람과 공유하고 있어요."
      />
    </StCohabitInformation>
  );
}

export default CohabitInformation;

const StCohabitInformation = styled.div`
  margin: 30px 20px 40px 20px;

  & > button {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    min-width: fit-content;
    padding: 10px 0;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
