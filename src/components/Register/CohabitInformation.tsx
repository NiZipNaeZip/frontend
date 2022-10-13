import styled from 'styled-components';
import CheckboxButton from '../common/CheckboxButton';

function CohabitInformation() {
  return (
    <StCohabitInformation>
      <CheckboxButton isChecked={true} option="집 전체" description="모든 공간을 단독으로 사용하고 있어요." />
      <CheckboxButton
        isChecked={false}
        option="1인실"
        description="침실은 단독으로 사용하지만, 욕실 및 주방 등 다른 사람과 공유하는 공간이 있어요."
      />
      <CheckboxButton
        isChecked={false}
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
    height: 78px;
  }
`;

const StTextBox = styled.div`
  flex: 1;
  text-align: left;
  word-break: keep-all;

  & > div:first-child {
    font-weight: 500;
    font-size: 16px;
    line-height: 160.3%;
    color: #082a5c;
  }

  & > div:last-child {
    font-size: 12px;
    line-height: 160.3%;
    color: #a3a3a3;
  }
`;
