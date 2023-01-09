import Image from "next/image";
import styled from "styled-components";

// ヘッダー　propsでヘッダーにアイコンや項目など表示するものを渡す
export const BaseHeader = (props: any) => {
  return (
    <>
      <IgemHeader>
        <Logo href="/">{props.logo}</Logo>
        {props.contents}
      </IgemHeader>
    </>
  );
};

const IgemHeader = styled.header`
  margin: 0px;
  height: 120px;
  background-color: #f5f5f5;
  display: flex;
`;

const Logo = styled.a`
  margin: 0;
  :hover {
    opacity: 50%;
  }
`;
