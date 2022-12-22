import { Header } from "components/organisms/header";
import styled from "styled-components";

export const HomeTemplate = () => {
  return (
    <div>
      <main>
        <Header />
      </main>
    </div>
  );
};

const H1 = styled.p`
  color: blue;
  text-align: center;
`;
