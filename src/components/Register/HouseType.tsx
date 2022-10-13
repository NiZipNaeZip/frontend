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
  margin-top: 30px;
  margin-bottom: 40px;
  background: #f3f7fb;
  padding: 9px 12px 10px 12px;
  border-radius: 10px;

  & > div {
    width: calc(100% / 3);
    height: 43px;

    div {
      font-size: 12px;
      line-height: 160.3%;
      color: #b7cae7;
    }
  }

  select {
    min-width: 90px;
    background-color: transparent;
    border: 0;
    font-size: 14px;
    line-height: 22px;
  }
`;
