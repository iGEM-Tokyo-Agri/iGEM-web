import styled from "styled-components";
import Image from "next/image";

type ItemProps = {
  item: any;
  width: number;
  height: number;
  marginTop: string;
  marginRight: string;
};

type StyleProps = {
  marginTop: string;
  marginRight: string;
};

export const TopPageItemBox = (props: ItemProps) => {
  console.log(typeof props.item);
  //一文字目の判定によって表示を変える
  return (
    <>
      {props.item.charAt(0) !== "/" ? (
        <TopPageItemBoxStyle>coming soon...</TopPageItemBoxStyle>
      ) : (
        <ImageBoxWrapper>
          <ImageInBox
            src={props.item}
            width={props.width}
            height={props.height}
            alt="ロゴ写真"
            marginTop={props.marginTop}
            marginRight={props.marginRight}
          />
        </ImageBoxWrapper>
      )}
    </>
  );
};

const ImageBoxWrapper = styled.div`
  width: 346px;
  height: 274px;
  background-color: #c0c0c0;
  border-radius: 19px;
  align-items: center;
`;

const ImageInBox = styled(Image)<StyleProps>`
  margin-top: ${(props) => props.marginTop};
  padding-right: ${(props) => props.marginRight};
  text-align: center;
  object-fit: cover;
`;

const TopPageItemBoxStyle = styled.div`
  width: 346px;
  height: 274px;
  font-size: 40px;
  line-height: 274px;
  background-color: #c0c0c0;
  border-radius: 19px;
  text-align: center;
`;
