import { Description } from "./MainDescription.styles.ts";
import type { MainDescriptionProps } from "./MainDescription.types.ts";

export default function MainDescription({ descriptionText } : MainDescriptionProps) {
    return (
        <Description>{ descriptionText }</Description>
    );
}