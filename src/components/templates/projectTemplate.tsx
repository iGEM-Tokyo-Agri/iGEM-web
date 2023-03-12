import { Headline } from "components/atoms/headline"
import { Footer } from "components/organisms/footer"
import { Header } from "components/organisms/header"
import styled from "styled-components";

export const ProjectTemplate = () => {
    return (
        <>
            <Header />
            <Headline
                text={"プロジェクト"}
                img="/volumetricFlask.jpg"
            />
            <AquacultureProblem>
                現在、世界人口は拡大を続けており、国連の予想によると2050年には97億

                人を超える見込みです。人口増加に伴い必要なタンパク質源の各派が求めら

                れており、そんなタンパク質源としてエサ効率やカーボンフットプリントの

                面で優れている<b>養殖魚</b>が期待されています。
                <br />
                <br />
                しかしこの数年は、地球温暖化などの影響から<b>赤潮による漁業被害</b>が増加

                し、深刻な問題となっています。
            </AquacultureProblem>

            <AquacultureImg
                src="/aquaculture.jpg"
                alt="aquaculture img"
                width={1134}
                height={409}
            />

            <RedTideMeasures>
                そこで我々Tokyo-Agriは赤潮を課題とし、その対策となるライフサイエンス
                <br />
                ツールを開発することで社会に貢献します。対策として、
                <br />
                <br />
                <b>（1）赤潮プランクトンの種同定、</b>
                <br />
                <b>（2）赤潮プランクトンの生育阻害、</b>
                <br />
                <b>（3）原因となる土壌リン汚染の解消</b>
                <br />
                <br />
                という3つのアプローチで計画と実験を行っています。
            </RedTideMeasures>


            <Footer />
        </>
    )
}

const AquacultureProblem = styled.p`
margin: 46px auto 0 auto;
width: 95%;
font-size: 32px;
background-color: #ffffff;
display: block;
background-image: url(/roundBottomFlask.png);
background-repeat: no-repeat;
background-position: left;
`

const AquacultureImg = styled.img`
  width:100%;
  object-fit: contain;
  margin: 64px auto 0 auto;`

const RedTideMeasures = styled.p`
margin: 92px auto 208px auto;
width: 95%;
font-size: 32px;
background-color: #ffffff;
display: block;
background-image: url(/ErlenmeyerFlask.png);
background-repeat: no-repeat;
background-position: right;
`