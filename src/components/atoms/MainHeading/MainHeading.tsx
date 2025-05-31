import type { MainHeadingProps } from "./MainHeading.types.ts";
import { MainHeadingH1 } from "./MainHeading.styles.ts";

export default function MainHeading({ headingText } : MainHeadingProps) {
    return (
        <MainHeadingH1>{ headingText }</MainHeadingH1>
    );
}