import { TopPageItemBox } from "components/atoms/topPageItemBox";
import { TopPageItemTitle } from "../atoms/topPageItemTitle";
import styled from "styled-components";

type Contents = {
  title: string;
  item: any;
};

export const ItemBoxAndTitle = (props: Contents) => {
  return (
    <BoxAndTitle>
      <TopPageItemTitle title={props.title} />
      <TopPageItemBox item={props.item} />
    </BoxAndTitle>
  );
};

const BoxAndTitle = styled.div`
  width: 346px;
  margin: 0px 0px 90px;
  padding: 0 auto;
  text-align: center;
  justify-content: space-evenly;
`;
