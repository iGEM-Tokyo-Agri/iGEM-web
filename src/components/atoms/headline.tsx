import styled from "styled-components";


export const Headline = (props: any) => {
  return (
    <>
      <HeadlineDiv>
        <HeadlineText>{props.text}</HeadlineText>
        <HeadlineImg>
          <Img src={props.img} />
        </HeadlineImg>
      </HeadlineDiv>
    </>
  );
};

const HeadlineText = styled.div`
  position: absolute;
  width: 774px;
  height: 129px;
  top: 211px;
  left: 50%;
  transform: translateX(-50%);

  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 139px;
  text-align: center;
`;

const HeadlineImg = styled.div`
  overflow: hidden;
  top: 120px;
  z-index: -1;
`;
const Img = styled.img`
  width: 100%;
  height: 311px;
  object-fit: cover;
`;

const HeadlineDiv = styled.div`
  display: block;
`;
