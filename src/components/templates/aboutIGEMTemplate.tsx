import { Header } from "components/organisms/header";
import { Headline } from "components/atoms/headline";
import styled from "styled-components";
import { Footer } from "components/organisms/footer";


export const AboutIGEMTemplate = () => {

    return (
        <>
            <Header />
            <Headline
                text={"IGEMについて"}
                img="/puzzle pieces.jpg"
            />
            <WrapperIconAndGears>
                <IGEMIconImage
                    src="/iGEM.png"
                    alt="iGEM icon"
                    width={366}
                    height={295}
                />
                <Gears1Image
                    src="/gears1.png"
                    alt="Gear1 img"
                    width={279}
                    height={310}
                />
            </WrapperIconAndGears>
            <IGEMDiscription>
                iGEM(the international Genetically Engineered Machine competition)とは
                <br />
                学生がチームを組み、自分たちで社会問題となっている課題を設定し、それ
                <br />
                を解決する<b>ライフサイエンスツール</b>を開発する国際大会です。
                <br />
                <br />
                当初はマサチューセッツ工科大学の講座としてスタートしましたが、2006年
                <br />
                に国際大会となり、現在では世界中から３００チーム以上、６０００人以上
                <br />
                が参加する大規模な大会となっています。
            </IGEMDiscription>

            <MicroscopeImg
                src="/microscope.jpg"
                alt="microscope icon"
                height={427}
            />

            <WrapperGearAndDiscription>
                <Gear2Img
                    src="/gears2.png"
                    alt="Gear2 img"
                    width={286}
                    height={372}
                />
                <IGEMStudentDiscription>
                    合成生物学の学際的な特徴から、生物実験を得意とする<b>生
                        <br />
                        物系の学生</b>、機械学習やwebデザインを得意とする情報系
                    <br />
                    の学生、生命システムのデザインやモデルを用いたシュミ
                    <br />
                    レーション・解析を得意とする<b>制御系の学生</b>、社会とのコ
                    <br />
                    ミュニケーションをはかる<b>社会系の学生</b>など、多彩なバッ
                    <br />
                    クグラウンドを持つ学生がチームを組み、協力して課題を
                    <br />
                    解決します。
                </IGEMStudentDiscription>

            </WrapperGearAndDiscription>

            <WrapperGearAndDiscription>
                <IGEMEvaluationDiscription>
                    iGEMの評価項目は遺伝子パーツを開発することの他に、
                    <br />
                    数理モデリング、他チームとのコラボレーション、社会と
                    <br />
                    のコミュニケーション、Wikiの作成、ポスター発表と口頭
                    <br />
                    発表など多岐にわたります。
                    <br />
                    <br />
                    iGEMでは次世代シーケンサー、CRISPR技術、長鎖DNAの
                    <br />
                    合成、機械学習など、その時の最新技術が利用されること
                    <br />
                    も特徴で刺激的な大会となっています。
                </IGEMEvaluationDiscription>
                <Gear2Img
                    src="/gears2.png"
                    alt="Gear2 img"
                    width={286}
                    height={372}
                />
            </WrapperGearAndDiscription>

            <Footer />



        </>
    )

}

const IGEMDiscription = styled.p`
  margin: 46px auto 0 auto;
  width: 95%;
  font-size: 32px;
  background-color: #ffffff;
  display: block;
`;

const IGEMIconImage = styled.img`
margin-top: 53px;
margin-left: 61px;
`
const Gears1Image = styled.img`
margin-top: 83px;
margin-right: 37px;`

const WrapperIconAndGears = styled.div`
justify-content: space-between;
display:flex;`

const MicroscopeImg = styled.img`
  width:100%;
  object-fit: contain;
  margin: 63px auto 0 auto;
`;

const IGEMStudentDiscription = styled.p`
  margin: 55px auto 0 auto;
  width: 95%;
  font-size: 32px;
  background-color: #ffffff;
  display: block;
`

const IGEMEvaluationDiscription = styled.p`
  font-size: 32px;
  display: block;
`

const Gear2Img = styled.img`
`
const WrapperGearAndDiscription = styled.div`
  width:95%;
  margin: 58px auto 0 auto;
  background-color: #ffffff;
  display:flex;
`