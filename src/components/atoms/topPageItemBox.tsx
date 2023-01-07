import styled from "styled-components";

type ItemProps = {
  item: any;
};

export const TopPageItemBox = (props: ItemProps) => {
  return (
    <>
      <TopPageItemBoxStyle>{props.item}</TopPageItemBoxStyle>
    </>
  );
};

const TopPageItemBoxStyle = styled.div`
  width: 346px;
  height: 274px;
  line-height: 274px;
  font-size: 40px;
  background-color: #c0c0c0;
  border-radius: 19px;
  text-align: center;
`;
