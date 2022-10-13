import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { icMinusActive, icMinusGray, icPlusActive, icPlusGray } from 'public/assets/icons';

function Counter() {
  const [count, setCount] = useState(0);
  const [isMinusAdjustable, setIsMinusAdjustable] = useState(false);
  const [isPlusAdjustable, setIsPlusAdjustable] = useState(true);

  const handlePlusClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinusClick = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    if (count > 3) {
      setIsPlusAdjustable(false);
      setIsMinusAdjustable(true);
    } else if (count === 0) {
      setIsPlusAdjustable(true);
      setIsMinusAdjustable(false);
    }
  }, [count]);

  return (
    <StCounter>
      <button onClick={handlePlusClick}>
        <ImageDiv className="button" src={isPlusAdjustable ? icPlusActive : icPlusGray} alt="-" />
      </button>
      <div>{count > 3 ? `3명 이상` : `${count}명`}</div>
      <button onClick={handleMinusClick}>
        <ImageDiv className="button" src={isMinusAdjustable ? icMinusActive : icMinusGray} alt="+" />
      </button>
    </StCounter>
  );
}

export default Counter;

const StCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 38px;
  margin-top: 30px;
  margin-bottom: 40px;

  div {
    font-weight: 500;
    font-size: 18px;
    line-height: 160.3%;
  }

  .button {
    width: 26px;
    height: 26px;
  }
`;
