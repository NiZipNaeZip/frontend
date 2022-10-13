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
  position: absolute;
  bottom: 46px;
  width: 335px;
  height: 61px;
  border-radius: 10px;
  text-align: center;
  line-height: 61px;
  color: white;
  background-color: ${({ disabled }) => (disabled ? '#D7E0EB' : '#082A5C')};
`;
