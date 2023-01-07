import { TopPageItemBox } from "components/atoms/topPageItemBox";
import { TopPageItemTitle } from "../atoms/topPageItemTitle";
import styled from "styled-components";
import Link from "next/link";

type Contents = {
  title: string;
  item: any;
  link: string;
  width: number;
  height: number;
  marginTop: string;
  marginRight: string;
};

export const ItemBoxAndTitle = (props: Contents) => {
  return (
    <Link legacyBehavior href={props.link}>
      <ItemBoxAndTitleLink>
        <BoxAndTitle>
          <TopPageItemTitle title={props.title} />
          <TopPageItemBox
            item={props.item}
            width={props.width}
            height={props.height}
            marginTop={props.marginTop}
            marginRight={props.marginRight}
          />
        </BoxAndTitle>
      </ItemBoxAndTitleLink>
    </Link>
  );
};

const BoxAndTitle = styled.div`
  width: 346px;
  margin: 0px 0px 90px;
  padding: 0 auto;
  text-align: center;
  justify-content: space-evenly;
`;

const ItemBoxAndTitleLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  :hover {
    opacity: 50%;
  }
`;
