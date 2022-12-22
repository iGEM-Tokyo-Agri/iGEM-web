import { BaseHeader } from "components/atoms/baseHeader";
import { HeaderContents } from "components/atoms/headerContents";

export const Header = () => {
  const contentsItems = ["Home", "iGEMについて", "合成生物学","プロジェクト","寄付・協賛"];
  return (
    <>
      <BaseHeader contents={<HeaderContents contentsItems={contentsItems} />} />
    </>
  );
};
