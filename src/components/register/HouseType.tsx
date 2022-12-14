import styled from 'styled-components';

function HouseType() {
  return (
    <StHouseType>
      <div>
        <div>건물 유형</div>
        <select>
          <option>아파트</option>
          <option>빌라</option>
          <option>오피스텔</option>
          <option>전원주택</option>
        </select>
      </div>
      <div>
        <div>방 개수</div>
        <select>
          <option>원룸</option>
          <option>복층</option>
          <option>투룸</option>
          <option>방 3개 이상</option>
        </select>
      </div>
      <div>
        <div>전체 평수</div>
        <select>
          <option>10평 미만</option>
          <option>10평 대</option>
          <option>20평 대</option>
          <option>30평 이상</option>
        </select>
      </div>
    </StHouseType>
  );
}

export default HouseType;

const StHouseType = styled.div`
  display: flex;
  margin: 30px 20px 40px 20px;

  & > div {
    width: calc(100% / 3);
    height: 62px;
    padding: 9px 10px 10px 12px;
    background: #f3f7fb;

    div {
      font-size: 12px;
      line-height: 160.3%;
      color: #9190cf;
    }
  }

  & > div:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  & > div:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  & > div:not(:last-child) {
    border-right: 1px solid #9190cf;
  }

  select {
    width: 100%;
    margin-top: 5px;
    background-color: transparent;
    font-size: 14px;
    line-height: 22px;
    border: 0;
    outline: 0;
  }
`;
