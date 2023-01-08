import { Header } from "components/organisms/header";
import { Headline } from "components/atoms/headline";


export const AboutIGEMTemplate = () => {
    //目的：propsで渡す文章を改行させたい
    //挿入したい文章を変数に代入
    return (
        <>
            <Header />
            <Headline
                text={"IGEMについて"}
                img="/puzzle pieces.jpg"
            />
            <h1></h1>
        </>
    )

}
