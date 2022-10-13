import { icLocation } from 'public/assets/icons';
import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';

interface IProps {
  img: string;
  title: string;
  location: string;
  tags: string[];
}
export default function ThumbnailInfo(props: IProps) {
  const { img, title, location, tags } = props;

  return (
    <StMainContainer>
      <img src={img} />
      <StContentWrapper>
        <span>{title}</span>
        <div>
          <ImageDiv src={icLocation} className="test" alt="" />
          <span>{location}</span>
        </div>
        <StTagContainer>
          {tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </StTagContainer>
      </StContentWrapper>
    </StMainContainer>
  );
}

const StMainContainer = styled.div`
  width: 100%;
  & > img {
    width: 100%;
    height: 222px;
  }
`;
const StTagContainer = styled.div`
  span {
    display: inline-block;
    height: 27px;
    width: 47px;
    border-radius: 130px;
    padding: 4px 12px 4px 12px;
    background-color: #eef3f9;
    margin-right: 8px;
  }
`;
const StContentWrapper = styled.div`
  width: 100%;
  height: 143px;
  padding: 18px 20px 28px 18px;
  & > div {
    display: flex;
    margin-top: 9px;
    margin-bottom: 19px;
    div {
      margin-right: 6px;
    }
    span {
      display: block;
      font-family: Noto Sans KR;
      font-size: 12px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #a3a3a3;
    }
  }
  & > span {
    display: block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
