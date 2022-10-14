import styled from 'styled-components';
import { icCheckActive, icCheckEmpty } from 'public/assets/icons';
import ImageDiv from './ImageDiv';

interface CheckboxButtonProps {
  onClick: () => void;
  isChecked: boolean;
  option: string;
  description: string;
  image?: string;
}

function CheckboxButton(props: CheckboxButtonProps) {
  const { onClick, isChecked, option, description, image } = props;

  return (
    <StCheckboxButton onClick={onClick} isChecked={isChecked}>
      <ImageDiv className="check" src={isChecked ? icCheckActive : icCheckEmpty} alt="" />
      {image && <ImageDiv className="circle" src={image} alt="" />}
      <StTextBox isChecked={isChecked}>
        <div>{option}</div>
        <div>{description}</div>
      </StTextBox>
    </StCheckboxButton>
  );
}

export default CheckboxButton;

const StCheckboxButton = styled.button<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 10px;

  .check {
    margin-left: 24px;
    width: 20px;
    height: 20px;
  }

  .circle {
    margin: 12px 12px 12px 14px;
    width: 54px;
    height: 54px;
  }

  ${({ isChecked }) =>
    isChecked &&
    `box-shadow: 0px 7px 18px rgba(0, 0, 0, 0.04);
  border: 1px solid #eef3f9;`}
`;

const StTextBox = styled.div<{ isChecked: boolean }>`
  width: 100%;
  flex: 1;
  text-align: left;

  & > div:first-child {
    font-weight: 500;
    font-size: 16px;
    line-height: 160.3%;
    color: ${({ isChecked }) => isChecked && `#6765ff`};
  }

  & > div:last-child {
    font-size: 12px;
    line-height: 160.3%;
    color: #a3a3a3;
  }
`;
