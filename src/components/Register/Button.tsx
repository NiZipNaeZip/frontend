import styled from 'styled-components';

interface IProps {
  name: string;
  handleClick: () => void;
  nextValid: boolean;
}
export default function Button(props: IProps) {
  const { name, handleClick, nextValid } = props;
  return (
    <StButton onClick={handleClick} disabled={!nextValid}>
      {name}
    </StButton>
  );
}

const StButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  max-width: 380px;
  height: 61px;
  border-radius: 10px;
  margin-top: 8px;
  text-align: center;
  line-height: 61px;
  color: white;
  background-color: ${({ disabled }) => (disabled ? '#E9E9FF' : '#6765FF')};
`;
