import CheckboxButton from '@src/components/common/CheckboxButton';
import {
  imgActivitySmall,
  imgExerciseSmall,
  imgFarmSmall,
  imgOceanSmall,
  imgRoadSmall,
  imgSwimmingSmall,
} from 'public/assets/images';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

interface AttractionJejuProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

function AttractionJeju(props: AttractionJejuProps) {
  const { setNextValid } = props;
  const [placeList, setPlaceList] = useState<string[]>([]);
  const [rentalList, setRentalList] = useState<string[]>([]);
  setNextValid(true);

  return (
    <StAttractionJeju>
      <StTitle>집 근처에서 어떻게 노나요?</StTitle>
      <StOptionList>
        <CheckboxButton
          image={imgOceanSmall}
          onClick={() => setPlaceList([...placeList, '해변'])}
          isChecked={placeList.includes('해변')}
          option="해변"
          description="집 근처에 바닷가가 있어요."
        />
        <CheckboxButton
          image={imgRoadSmall}
          onClick={() => setPlaceList([...placeList, '올레길'])}
          isChecked={placeList.includes('올레길')}
          option="올레길"
          description="집 근처에 산책 가능한 올레길이 있어요."
        />
        <CheckboxButton
          image={imgFarmSmall}
          onClick={() => setPlaceList([...placeList, '감귤따기'])}
          isChecked={placeList.includes('감귤따기')}
          option="감귤따기"
          description="집 근처 감귤농장에서 체험할 수 있어요."
        />
        <CheckboxButton
          image={imgActivitySmall}
          onClick={() => setPlaceList([...placeList, '액티비티 체험'])}
          isChecked={placeList.includes('액티비티 체험')}
          option="액티비티 체험"
          description="해녀 체험, 승마, 카약 등이 가능해요."
        />
      </StOptionList>
      <StLine />
      <StTitle>빌려드려요</StTitle>
      <StOptionList>
        <CheckboxButton
          image={imgExerciseSmall}
          onClick={() => setRentalList([...rentalList, '운동 기구'])}
          isChecked={rentalList.includes('운동 기구')}
          option="운동 기구"
          description="요가 매트, 자전거, 산악 바이크 등"
        />
        <CheckboxButton
          image={imgSwimmingSmall}
          onClick={() => setRentalList([...rentalList, '물놀이 용품'])}
          isChecked={rentalList.includes('물놀이 용품')}
          option="물놀이 용품"
          description="서핑 보드, 낚시 용품, 오리발 등"
        />
      </StOptionList>
    </StAttractionJeju>
  );
}

export default AttractionJeju;

const StAttractionJeju = styled.div`
  margin-bottom: 40px;
`;

const StTitle = styled.h2`
  padding: 0 20px;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const StLine = styled.div`
  max-width: 420px;
  width: 100%;
  background: #f9f9f9;
  height: 10px;
  margin-top: 56px;
  margin-bottom: 38px;
`;

const StOptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
`;
