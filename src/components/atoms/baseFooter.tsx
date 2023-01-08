import styled from "styled-components";

// ヘッダー　propsでヘッダーにアイコンや項目など表示するものを渡す
export const BaseFooter = (props: any) => {
  return (
    <>
      <IgemFooter>
        {props.logo}
        {props.contents}
      </IgemFooter>
    </>
  );
};

const IgemFooter = styled.footer`
  margin: 0px;
  height: 199px;
  background-color: #d9d9d9;
  display: flex;
`;
