import styled from "styled-components";
import Image from "next/image";

export const TopPageImg = () => {
  return (
    <>
      <TopPageImage>Tokyo Agri</TopPageImage>
    </>
  );
};

const TopPageImage = styled.div`
  background-color: green;
  background-image: url("/leaf.png");
  background-size: cover;
  width: 100%;
  height: 918px;
  line-height: 918px;
  font-size: 128px;
  text-align: center;
`;
