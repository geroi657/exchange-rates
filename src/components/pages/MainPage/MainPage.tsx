import {Container, HeadingContainer, Separator,} from "./MainPage.styles.ts";
import { motion } from "motion/react"

import MainHeading from "../../atoms/MainHeading/MainHeading.tsx";
import MainDescription from "../../atoms/MainDescription/MainDescription.tsx";
import ConversionList from "../../organisms/ConversionList/ConversionList.tsx";

export default function MainPage() {
    return (
        <Container>
            <HeadingContainer>
                <motion.div initial={{ position: "relative", opacity: 0, right: "-100px" }}
                            animate={{ opacity: 1, right: "0", transition:  { duration: 1.5, ease: "easeOut" }}}>
                    <MainHeading headingText={<>The best converter<br/>out there</>}/>
                </motion.div>
                <motion.div initial={{ position: "relative", opacity: 0, right: "-100px" }}
                            animate={{ opacity: 1, right: "0", transition:  { duration: 1.5, spr: "easeOut", delay: 0.25 }}}>
                    <MainDescription descriptionText={<>That's for real, but don't check that</>}/>
                </motion.div>
                <Separator/>
            </HeadingContainer>
            <ConversionList/>
        </Container>
    );
}