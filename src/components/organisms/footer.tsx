import { IconCircle } from "../atoms/iconCircle";
import { BaseFooter } from "../atoms/baseFooter";
import TwitterIcon from "@mui/icons-material/Twitter";
import { HeaderContents } from "components/atoms/headerContents";
import { FooterLogos } from "components/molecules/footerLogos";
import { FooterContents } from "components/atoms/footerContents";

export const Footer = () => {
  //ヘッダーに常時する項目名とリンク
  const contentsItems = {
    チームとメンバー: "team",
    お問い合せ: "contact",
  };

  return (
    <>
      <BaseFooter
        logo={<FooterLogos />}
        contents={<FooterContents contentsItems={contentsItems} />}
      />
    </>
  );
};
