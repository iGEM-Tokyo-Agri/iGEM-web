import { BaseHeader } from "components/atoms/baseHeader";
import { HeaderContents } from "components/atoms/headerContents";
import { TokyoAgriLogo } from "../atoms/tokyoAgriLogo";
import { IconCircle } from "../atoms/iconCircle";

export const Header = () => {
  //ヘッダーに常時する項目名とリンク
  const contentsItems = {
    Home: "/",
    iGEMについて: "/aboutIGEM",
    合成生物学: "syntheticBiology",
    プロジェクト: "project",
    "寄付・協賛": "sponsorship",
  };

  return (
    <>
      <BaseHeader
        logo={
          <IconCircle
            src="/teamLogo.jpg"
            width={86}
            height={86}
            alt="teamLogo"
            margin="22px 0 0 36px"
          />
        }
        contents={<HeaderContents contentsItems={contentsItems} />}
      />
    </>
  );
};
