import { Headline } from "components/atoms/headline"
import { Footer } from "components/organisms/footer"
import { Header } from "components/organisms/header"

export const TeamTemplate =()=>{
    return(
        <>
            <Header />
            <Headline
                text={"チームとメンバー"}
                img="/peopleNetwork.png"
            />
            <Footer/>
        </>
    )
}