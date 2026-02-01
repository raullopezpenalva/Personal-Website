import React from "react";
import styles from "../../styles/components/ui-primitives/Stack.module.css";

type Gap =  "xs" | "sm" | "md" | "lg" | "xl";

interface StackProps {
    children: React.ReactNode;
    gap?: Gap;
    align?: "start" | "center" | "end" | "stretch";
    as?: React.ElementType;
    className?: string;
}

const Stack: React.FC<StackProps> = ({
    children,
    gap = "md",
    align = "stretch",
    as: Component = "div",
    className,
}) => {
    const Comp = Component as React.ElementType;
    return (
        <Comp
            className={[
                styles.stack,
                styles[`gap-${gap}`],
                styles[`align-${align}`],
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {children}
        </Comp>
    );
}

export default Stack;