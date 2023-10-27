import { style } from '@vanilla-extract/css';
import { breakpoints, sizes } from '../styles/theme.css';

export const sidePanel = style({
    display: 'grid',
    rowGap: sizes.large,
    columnGap: sizes.large,
    gridTemplateColumns: 'var(--layout)',
    '@media': {
        [breakpoints.small]: {
            gridTemplateColumns: '1fr'
        }
    }
});

export const left = style({
    position: 'relative'
});

export const right = style({
    position: 'relative'
});
