import { validated } from './fieldSet.css';
import { style } from '@vanilla-extract/css';
import { sizes, vars } from '@styles/theme.css';

export const contactForm = style({
    position: 'relative'
});

export const label = style({
    display: 'block',
    marginBottom: sizes.tiny,
    selectors: {
        [`${validated}:invalid &`]: {
            color: `rgb(${vars.colors.venetianRed})`
        }
    }
});

export const field = style({
    width: '100%',
    marginBottom: sizes.small
});
