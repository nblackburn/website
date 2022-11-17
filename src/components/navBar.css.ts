import { breakpoints, sizes } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const navBar = style({
    position: 'relative'
});

export const items = style({
    margin: 0,
    padding: 0,
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    listStylePosition: 'inside'
});

export const item = style({
    display: 'inline-block',
    selectors: {
        '&:not(&:last-child)': {
            marginRight: sizes.tiny
        }
    }
});

export const showSmall = style({
    display: 'none',
    '@media': {
        [breakpoints.small]: {
            display: 'block'
        }
    }
});
