import { BaseHeader } from "components/atoms/baseHeader";
import { HeaderContents } from "components/atoms/headerContents";
import { TokyoAgriLogo } from '../atoms/tokyoAgriLogo';

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
      <BaseHeader logo={<TokyoAgriLogo />} contents={<HeaderContents contentsItems={contentsItems} />} />
    </>
  );
};
