import React from 'react';
import styles from '../../styles/components/ui-primitives/Grid.module.css';

type Columns = 1 | 2 | 3 | 4 | 5 | 6;
type Gap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface GridProps {
    children: React.ReactNode;
    cols?: Columns;
    colsMobile?: Columns;
    gap?: Gap;
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    as?: React.ElementType;
    className?: string;
}

const Grid: React.FC<GridProps> = ({
    children,
    cols = 2,
    colsMobile = 1,
    gap = 'md',
    align = 'stretch',
    justify = 'start',
    as: Component = 'div',
    className,
}) => {
    return (
        <Component
            className={[
                styles.grid,
                styles[`cols-${cols}`],
                styles[`cols-mobile-${colsMobile}`],
                styles[`gap-${gap}`],
                styles[`align-${align}`],
                styles[`justify-${justify}`],
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {children}
        </Component>
    );
};

export default Grid;