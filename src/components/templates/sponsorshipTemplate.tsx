import { Headline } from "components/atoms/headline"
import { Footer } from "components/organisms/footer"
import { Header } from "components/organisms/header"
import styled from "styled-components";

export const SponsorshipTemplate =()=>{
    return(
        <>
            <Header />
            <Headline
                text={"寄付・協賛"}
                img="/trees.png"
            />
            <RecruitmentOfSupport>Tokyo Agriは、私たちを支援してくださる企業・個人の方を募集しております。</RecruitmentOfSupport>
            <RecruitmentOfSponsor>
                <RecruitmentTitle>スポンサー募集</RecruitmentTitle>
                <RecruitmentContents>
                    Tokyo Agriは、私たちの活動に協賛してくださる
                    <br/>
                    企業・個人の方を募集しております。
                    <br/>
                    <br/>
                    支援に関するご質問・お問い合わせは以下のメールアドレスからお
                    <br/>願いいたします。
                </RecruitmentContents>
                <Inquiry>お問い合わせ</Inquiry>
                <Email>igemtokyoagri@gmail.com</Email>
                    
            </RecruitmentOfSponsor>
            <Footer />
            </>
    )
}

const RecruitmentOfSupport =styled.p`
width: 63%;
height: 120px;
text-align:center;
margin:132px auto 107px auto;
font-weight: 500;
font-size: 32px;
`

const RecruitmentOfSponsor=styled.div`
width: 1064px;
height: 755px;
margin:107px auto 475px auto;
border:solid 1px black;

flex-flow: column;
display:flex;`

const RecruitmentTitle=styled.p`
width: 505px;
height: 116px;
margin:36px auto 68px auto;
font-weight: 900;
font-size: 70px;`
const RecruitmentContents=styled.p`
width: 962px;
height: 275px;
margin:0 auto 92px auto;
text-align:center ;
font-weight: 500;
font-size: 32px;
`
const Inquiry=styled.p`
margin:0 auto;
font-weight: 700;
font-size: 48px;
`
const Email =styled.p`
width: 413px;
height: 46px;
margin:0 auto 58px auto;
font-weight: 500;
font-size: 32px;
`