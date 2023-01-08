import styled from "styled-components";
import Image from "next/image";
import media from "styled-media-query";

export const Headline = (props: any) => {
    return (
        <>
            <HeadlineDiv>
                <HeadlineText>
                    {props.text}
                </HeadlineText>
            </HeadlineDiv>
            <HeadlineImg>
                <Image src={props.img} width={1280} height={311} alt="" />
            </HeadlineImg>
        </>
    )
}

const HeadlineText = styled.div`
position: absolute;
width:674px;
height: 129px;
top: 211px;
left: 50%;
transform: translateX(-50%);



font-family: 'Noto Sans JP';
font-style: normal;
font-weight: 900;
font-size: 96px;
line-height: 139px;`

const HeadlineImg = styled.div`
position: absolute;
width:100%;
top: 120px;
z-index:-1;
`

const HeadlineDiv = styled.div`
display:flex;
`