import { TopPageImg } from "components/atoms/topPageImg";
import { ItemBoxAndTitle } from "components/molecules/itemBoxAndTitle";
import { Header } from "components/organisms/header";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Footer } from "../organisms/footer";

export const HomeTemplate = () => {
  //表示タイトル:[写真のpath,クリックした時の行き先のpath,画像marginTop] この配列にはstringのみ入れる
  const HomeContents = {
    "1. iGEMについて": ["/iGEM.png", "/aboutIGEM", "0", "0"],
    "2. 合成生物学": ["/DNA.png", "/syntheticBiology", "0", "0px"],
    "3. プロジェクト": ["/tube.png", "/project", "0"],
    "4. 寄付・協賛": ["/handshake.png", "sponsorship", "40px", "0"],
    "5. 活動記録": ["coming soon...", "record", "0", "0"],
    "6. チームメンバー": ["coming soon...", "team", "0", "0"],
  };

  //表示タイトル:[width,height] こちらの配列はnumberのみ入れる
  const ContentsWidthAndHeight = {
    "1. iGEMについて": [330, 274],
    "2. 合成生物学": [346, 300],
    "3. プロジェクト": [346, 274],
    "4. 寄付・協賛": [330, 213],
    "5. 活動記録": [346, 274],
    "6. チームメンバー": [265, 274],
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
              item={HomeContents[key as keyof typeof HomeContents][0]}
              link={HomeContents[key as keyof typeof HomeContents][1]}
              width={
                ContentsWidthAndHeight[key as keyof typeof HomeContents][0]
              }
              height={
                ContentsWidthAndHeight[key as keyof typeof HomeContents][1]
              }
              marginTop={HomeContents[key as keyof typeof HomeContents][2]}
              marginRight={HomeContents[key as keyof typeof HomeContents][3]}
            />
          ))}
        </BoxAndTitle>
        <Footer />
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
