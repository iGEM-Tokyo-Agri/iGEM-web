import Image from "next/image";
import styled from "styled-components";

export const TokyoAgriLogo = () => {
  return (
    <>
      <TokyoAgriLogoStyle
        src="/teamLogo.jpg"
        width={86}
        height={86}
        alt="teamLogo"
      />
    </>
  );
};

const TokyoAgriLogoStyle = styled(Image)`
  width: 86px;
  height: 86px;
  margin: 22px 0 0 36px;
  border-radius:50%;
`;
