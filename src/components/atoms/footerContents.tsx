import Link from "next/link";
import styled from "styled-components";

type HeadreContentsProps = {
  contentsItems: { [contentsItems: string]: string };
};

//propsでヘッダーの項目を与える　{"項目名":"リンク"}のobject型で渡される
export const FooterContents = (props: HeadreContentsProps) => {
  return (
    <FooterWrapper>
      <ContentsWrapper>
        {Object.keys(props.contentsItems).map((key) => (
          <Link
            legacyBehavior
            href={props.contentsItems[key as keyof typeof FooterContents]}
          >
            <ItemLink>{key}</ItemLink>
          </Link>
        ))}
      </ContentsWrapper>
      <Copyright>Ⓒ Tokyo Agri</Copyright>
    </FooterWrapper>
  );
};

const Copyright = styled.div`
  font-size: 40px;
  margin: 12px 32px 0 0;
  min-width: 264px;
  height: 48px;
  text-align: right;
`;

const FooterWrapper = styled.div`
  margin: 58px 55px 13px auto;
  height: 199px;
  display: flex;
  flex-direction: column;
`;

const ContentsWrapper = styled.div`
  font-size: 32px;
  width: 500px;
  display: flex;
  justify-content: space-evenly;
`;

const ItemLink = styled.a`
  height: 30px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    opacity: 20%;
  }
`;
