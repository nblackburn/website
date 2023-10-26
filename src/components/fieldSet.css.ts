import { sizes } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const fieldSet = style({
    margin: 0,
    padding: 0,
    border: 'none',
    display: 'grid',
    rowGap: sizes.small,
    columnGap: sizes.small,
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'
});

export const validated = style([fieldSet, {}]);
