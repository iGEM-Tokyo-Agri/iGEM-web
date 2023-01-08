import styled from "styled-components";
import Image from "next/image";

export const Headline = (props: any) => {
    return (
        <>
            <HeadlineDiv>
                <HeadlineImg>
                    <Image src={props.img} width={1280} height={311} alt="" />
                </HeadlineImg>
                <HeadlineText>
                    {props.text}
                </HeadlineText>
            </HeadlineDiv>
        </>
    )
}

const HeadlineText = styled.div`
position: absolute;
top: 211px;
margin-left:auto;
display:flex ;



z-index:1;

font-family: 'Noto Sans JP';
font-style: normal;
font-weight: 900;
font-size: 96px;
line-height: 139px;`

const HeadlineImg = styled.div`
position: absolute;
top: 120px;
margin-left:auto;
margin-right:auto;
background-size:cover;
z-index:-1;
`

const HeadlineDiv = styled.div`
display:flex;
`