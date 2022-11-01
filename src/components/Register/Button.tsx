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
  padding: 17px 0;
  border-radius: 10px;
  margin-top: 8px;
  text-align: center;
  font-weight: 500;
  font-size: 17px;
  line-height: 27px;
  color: white;
  background-color: ${({ disabled }) => (disabled ? '#E9E9FF' : '#6765FF')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
