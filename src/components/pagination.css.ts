import { sizes } from '../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const pagination = style({
    margin: 'auto',
    display: 'flex'
});

export const link = style({
    selectors: {
        '&:not(:last-child)': {
            marginRight: sizes.small
        }
    }
});
