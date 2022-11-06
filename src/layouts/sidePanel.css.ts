import { style } from '@vanilla-extract/css';
import { sizes, breakpoints } from '../styles/theme.css';

export const sidePanel = style({
    display: 'grid',
    rowGap: sizes.small,
    columnGap: sizes.large,
    gridTemplateColumns: '7fr 3fr',
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
