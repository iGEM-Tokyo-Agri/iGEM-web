import styled from "styled-components";
import Image from "next/image";

type ItemProps = {
  item: any;
};

export const TopPageItemBox = (props: ItemProps) => {
  console.log(typeof props.item);
  return (
    <>
      {props.item.charAt(0) !== "/" ? (
        <TopPageItemBoxStyle>coming soon...</TopPageItemBoxStyle>
      ) : (
        <ImageInBox src={props.item} width={346} height={274} alt="ロゴ写真" />
      )}
    </>
  );
};

const ImageInBox = styled(Image)`
  width: 346px;
  height: 274px;
  line-height: 274px;
  background-color: #c0c0c0;
  border-radius: 19px;
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
