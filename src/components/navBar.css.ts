import { sizes } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const navBar = style({
    position: 'relative'
});

export const items = style({
    margin: 0,
    padding: 0,
    listStyle: 'none',
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
