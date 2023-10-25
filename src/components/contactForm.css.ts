import { style } from '@vanilla-extract/css';
import { sizes, vars } from '@styles/theme.css';

export const contactForm = style({
    position: 'relative'
});

export const fieldSet = style({
    margin: 0,
    padding: 0,
    border: 'none',
    display: 'grid',
    rowGap: sizes.small,
    columnGap: sizes.small,
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'
});

export const label = style({
    display: 'block',
    marginBottom: sizes.tiny,
    selectors: {
        [`${fieldSet}:invalid &`]: {
            color: `rgb(${vars.colors.venetianRed})`
        }
    }
});

export const field = style({
    width: '100%',
    marginBottom: sizes.small
});
