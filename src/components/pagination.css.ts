import { sizes } from '../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const pagination = style({
    margin: 'auto'
});

export const items = style({
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: sizes.small,
    listStyle: 'none',
    alignItems: 'center',
    listStylePosition: 'inside'
});

export const item = style({
    display: 'inline-block'
});
