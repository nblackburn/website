import { sizes } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const contactForm = style({
    position: 'relative'
});

export const label = style({
    display: 'block',
    marginBottom: sizes.tiny
});

export const field = style({
    width: '100%',
    marginBottom: sizes.small
});

export const fieldSet = style({
    margin: 0,
    padding: 0,
    border: 'none',
    display: 'grid',
    rowGap: sizes.small,
    columnGap: sizes.small,
    gridTemplateColumns: '1fr 1fr'
});
