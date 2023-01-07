import { TopPageImg } from "components/atoms/topPageImg";
import { ItemBoxAndTitle } from "components/molecules/itemBoxAndTitle";
import { Header } from "components/organisms/header";
import styled from "styled-components";
import { TopPageItemBox } from "../atoms/topPageItemBox";
import Home from "../../pages/index";

export const HomeTemplate = () => {
  const HomeContents = {
    "1. iGEMについて": "/iGEM.png",
    "2. 合成生物学": "comming soon...",
    "3. プロジェクト": "comming soon...",
    "4. 寄付・協賛": "comming soon...",
    "5. 活動記録": "comming soon...",
    "6. チームメンバー": "comming soon...",
  };
  return (
    <div>
      <main>
        <Header />
        <TopPageImg />
        <BoxAndTitle>
          {Object.keys(HomeContents).map((key) => (
            <ItemBoxAndTitle
              title={key}
              item={HomeContents[key as keyof typeof HomeContents]}
            />
          ))}
        </BoxAndTitle>
      </main>
    </div>
  );
};

const BoxAndTitle = styled.div`
  max-width: 1140px;
  margin: 109px auto 90px auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
