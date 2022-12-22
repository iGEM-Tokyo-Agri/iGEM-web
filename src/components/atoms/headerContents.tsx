import styled from "styled-components";

type HeadreContentsProps = {
  contentsItems: string[];
};

export const HeaderContents = (props: HeadreContentsProps) => {
  return (
    <ContentsWrapper>
      {props.contentsItems.map((item: string) => (
        <div>{item}</div>
      ))}
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  margin: 0 55px 13px auto;
  padding-top: 76px;
  font-size: 24px;
  width: 702px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
`;
