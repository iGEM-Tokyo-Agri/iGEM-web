import { BaseHeader } from "components/atoms/baseHeader";
import { HeaderContents } from "components/atoms/headerContents";

export const Header = () => {
    //ヘッダーに常時する項目名とリンク
  const contentsItems = {
    Home: "home",
    iGEMについて: "about",
    合成生物学: "syntheticBiology",
    プロジェクト: "project",
    "寄付・協賛": "sponsorship",
  };

  return (
    <>
      <BaseHeader contents={<HeaderContents contentsItems={contentsItems} />} />
    </>
  );
};
