import Link from "next/link";
import styled from "styled-components";

type HeadreContentsProps = {
  contentsItems: { [contentsItems: string]: string };
};

//propsでヘッダーの項目を与える　{"項目名":"リンク"}のobject型で渡される
export const HeaderContents = (props: HeadreContentsProps) => {
  return (
    <ContentsWrapper>
      {Object.keys(props.contentsItems).map((key) => (
        <Link
          legacyBehavior
          href={props.contentsItems[key as keyof typeof HeaderContents]}
        >
          <ItemLink>{key}</ItemLink>
        </Link>
      ))}
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  width: 700px;
  margin: 0 55px 13px auto;
  padding-top: 76px;
  font-size: 24px;
  max-width: 702px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
`;

const ItemLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  :hover {
    opacity: 20%;
  }
`;
