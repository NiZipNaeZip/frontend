import styled from 'styled-components';
import { icCheckActive, icCheckEmpty } from 'public/assets/icons';
import ImageDiv from './ImageDiv';

interface CheckboxButtonProps {
  isChecked: boolean;
  option: string;
  description: string;
}

function CheckboxButton(props: CheckboxButtonProps) {
  const { isChecked, option, description } = props;

  return (
    <StCheckboxButton isChecked={isChecked}>
      <ImageDiv className="check" src={isChecked ? icCheckActive : icCheckEmpty} alt="" />
      <StTextBox>
        <div>{option}</div>
        <div>{description}</div>
      </StTextBox>
    </StCheckboxButton>
  );
}

export default CheckboxButton;

const StCheckboxButton = styled.button<{ isChecked: boolean }>`
  border-radius: 10px;

  .check {
    margin-left: 24px;
    width: 20px;
    height: 20px;
  }

  ${({ isChecked }) =>
    isChecked &&
    `box-shadow: 0px 7px 18px rgba(0, 0, 0, 0.04);
  border: 1px solid #eef3f9;`}
`;

const StTextBox = styled.div`
  width: 100%;
  flex: 1;
  text-align: left;
  word-break: keep-all;

  & > div:first-child {
    font-weight: 500;
    font-size: 16px;
    line-height: 160.3%;
    color: #6765ff;
  }

  & > div:last-child {
    font-size: 12px;
    line-height: 160.3%;
    color: #a3a3a3;
  }
`;
