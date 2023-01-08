import { Header } from "components/organisms/header";
import { Headline } from "components/atoms/headline";
import styled from "styled-components";


export const AboutIGEMTemplate = () => {
    //目的：propsで渡す文章を改行させたい
    //挿入したい文章を変数に代入
    return (
        <WrapperDiv>
            <Header />
            <Headline
                text={"IGEMについて"}
                img="/puzzle pieces.jpg"
            />
            {/* <AboutIGEMDiscriptionUpper>
                iGEM(the international Genetically Engineered Machine competition)とは学生がチームを組み、自分たちで社会問題となっている課題を設定し、それを解決するライフサイエンスツールを開発する国際大会です。
                <br />当初はマサチューセッツ工科大学の講座としてスタートしましたが、2006年に国際大会となり、現在では世界中から３００チーム以上、６０００人以上が参加する大規模な大会となっています。
            </AboutIGEMDiscriptionUpper> */}

        </WrapperDiv>
    )

}

const AboutIGEMDiscriptionUpper = styled.h1`
width: 1096px;
height: 339px;
left: 88px;
margin-top: 881px;

font-family: 'Noto Sans JP';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 46px;
`

const WrapperDiv = styled.div`
`