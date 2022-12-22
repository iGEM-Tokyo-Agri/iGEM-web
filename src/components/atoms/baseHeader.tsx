import styled from "styled-components";

export const BaseHeader = (props: any) => {
  return (
    <>
      <IgemHeader>{props.contents}</IgemHeader>
    </>
  );
};

const IgemHeader = styled.header`
  margin: 0px;
  height: 120px;
  background-color: #f5f5f5;
`;


