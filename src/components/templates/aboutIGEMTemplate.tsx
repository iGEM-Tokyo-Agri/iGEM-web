import { Header } from "components/organisms/header";
import { Headline } from "components/atoms/headline";


export const AboutIGEMTemplate = () => {
    return (
        <>
            <Header />
            <Headline
                text={"IGEMについて"}
                img="/puzzle pieces.jpg"
            />

        </>
    )
}