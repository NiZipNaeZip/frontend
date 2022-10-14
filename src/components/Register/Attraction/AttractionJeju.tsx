import CheckboxButton from '@src/components/common/CheckboxButton';
import { imgActivitySmall, imgFarmSmall, imgOceanSmall, imgRoadSmall } from 'public/assets/images';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

interface AttractionJejuProps {
  setNextValid: Dispatch<SetStateAction<boolean>>;
}

function AttractionJeju(props: AttractionJejuProps) {
  const { setNextValid } = props;
  const [checkedList, setCheckedList] = useState<string[]>([]);

  return (
    <StAttractionJeju>
      <StTitle>집 근처에서 어떻게 노나요?</StTitle>
      <StOptionList>
        <CheckboxButton
          image={imgOceanSmall}
          onClick={() => setCheckedList([...checkedList, '해변'])}
          isChecked={checkedList.includes('해변')}
          option="해변"
          description="집 근처에 바닷가가 있어요."
        />
        <CheckboxButton
          image={imgRoadSmall}
          onClick={() => setCheckedList([...checkedList, '올레길'])}
          isChecked={checkedList.includes('올레길')}
          option="올레길"
          description="집 근처에 산책 가능한 올레길이 있어요."
        />
        <CheckboxButton
          image={imgFarmSmall}
          onClick={() => setCheckedList([...checkedList, '감귤따기'])}
          isChecked={checkedList.includes('감귤따기')}
          option="감귤따기"
          description="집 근처 감귤농장에서 체험할 수 있어요."
        />
        <CheckboxButton
          image={imgActivitySmall}
          onClick={() => setCheckedList([...checkedList, '액티비티 체험'])}
          isChecked={checkedList.includes('액티비티 체험')}
          option="액티비티 체험"
          description="해녀 체험, 승마, 카약 등이 가능해요."
        />
      </StOptionList>
      <StLine />
      <StTitle>빌려드려요</StTitle>
    </StAttractionJeju>
  );
}

export default AttractionJeju;

const StAttractionJeju = styled.div``;

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
