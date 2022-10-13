import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import HouseType from './HouseType';
import Counter from './Counter';
import CohabitInformation from './CohabitInformation';

interface PeopleInformationProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

function PeopleInformation(props: PeopleInformationProps) {
  const { setNextValid } = props;
  // 백지연 TODO
  return (
    <div>
      <StTitle>어떤 집인가요?</StTitle>
      <HouseType />
      <StLine />
      <StTitle>몇 명이 지낼 수 있나요?</StTitle>
      <Counter />
      <StLine />
      <StTitle>
        다른 사람과
        <br />
        함께 지내는 집인가요?
      </StTitle>
      <CohabitInformation />
    </div>
  );
}

export default PeopleInformation;

const StLine = styled.div`
  position: absolute;
  max-width: 420px;
  width: calc(100% + 20px);
  margin-left: -20px;
  background: #f9f9f9;
  height: 10px;
`;

const StTitle = styled.h2`
  position: relative;
  padding: 0 20px;
  padding-top: 38px;

  &:last-child {
    margin-bottom: 30px;
  }
`;
