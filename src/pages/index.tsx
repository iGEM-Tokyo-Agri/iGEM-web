import { Header } from "components/atoms/header";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <H1>Welcome!</H1>
      </main>
    </div>
  );
}

const H1 = styled.p`
  color: blue;
  text-align: center;
`;
