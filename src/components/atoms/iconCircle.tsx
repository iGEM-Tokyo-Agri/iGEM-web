import Image from "next/image";
import styled from "styled-components";

type IconCirclProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  margin: string;
};

type IconStyle = {
  margin: string;
};

//ヘッダーやフッターで使うアイコンに使うatoms

export const IconCircle = (props: IconCirclProps) => {
  return (
    <>
      <IconCircleStyle
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
        margin={props.margin}
      />
    </>
  );
};

const IconCircleStyle = styled(Image)<IconStyle>`
  margin: ${(props) => props.margin};
  border-radius: 50%;
`;
