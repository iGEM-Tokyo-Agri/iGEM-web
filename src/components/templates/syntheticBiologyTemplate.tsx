import { Header } from "components/organisms/header";
import { Headline } from "components/atoms/headline";
import styled from "styled-components";
import Image from "next/image";
import { Footer } from "components/organisms/footer";

export const SyntheticBiologyTemplate = () => {
  return (
    <>
      <Header />
      <HeadlineWrapper>
        <Headline text={"合成生物学"} img="/syntheticBiology.png" />
        <SyntheticBiology>
          合成生物学は幅広い研究分野を横断する学際的学問で、
          <b>
            「つくって理解する
            <br />
            生物学」
          </b>
          もしくは<b>「役立つものをつくる生物学」</b>です。
          <br />
          <br />
          例えば遺伝子など生物の構成要素をパーツとみなし、電気回路のようにそれ
          <br />
          らパーツを組み合わせ、シャーシとなる細胞にインストールすることで所望
          <br />
          のシステムを細胞に持たせることが出来ます。
        </SyntheticBiology>
        <DNAImage
          src="/DNAPicture.png"
          alt="DNA Picture"
          width={1140}
          height={1140}
        />
        <SyntheticBiologyDevelopment>
          その他にも生体高分子を素材として、<b>｛感知・計算・出力｝</b>
          という機能を持った分子ロボットの開発も行われています。これらをつくる上で、デザインや解析といった
          <b>「DRY実験」</b>
          と実際にモノをつくる<b>「WET実験」</b>
          を組み合わせることが大切になってきます。
          <br />
          <br />
          合成生物学は医療分野、環境問題対策、食料問題対策含む有用物質生産など
          <b>諸分野での実用化</b>が期待されています。
        </SyntheticBiologyDevelopment>
      </HeadlineWrapper>
      <Footer />
    </>
  );
};

const SyntheticBiology = styled.p`
  margin: 162px auto 0 auto;
  width: 90%;
  font-size: 32px;
  background-color: #ffffff;
  display: block;
  background-image: url(/backgroundDNA.png);
  background-repeat: no-repeat;
  background-position: right;
`;

const SyntheticBiologyDevelopment = styled.p`
  margin: 77px auto 300px auto;
  width: 90%;
  font-size: 32px;
  background-color: #ffffff;
  display: block;
  background-image: url(/backgroundDNA.png);
  background-repeat: no-repeat;
  background-position: left;
`;

const HeadlineWrapper = styled.div`
  display: block;
`;

const DNAImage = styled(Image)`
  width: 90%;
  height: 352px;
  object-fit: contain;
  margin: 67px auto 0 auto;
  display: flex;
`;
