import { useRouter } from 'next/router';
import DaumPostcodeEmbed from 'react-daum-postcode';
import styled from 'styled-components';

function PlaceSearchBox() {
  const router = useRouter();
  const handleComplete = (data: { zonecode: string; address: string }) => {
    router.push({
      pathname: 'register',
      query: { zoneCode: data.zonecode, address: data.address },
    });
  };

  return (
    <StPlaceSearchBox>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </StPlaceSearchBox>
  );
}

export default PlaceSearchBox;

const StPlaceSearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100vw !important;
    max-width: 42rem;
    height: 49.4rem !important;
  }
`;
