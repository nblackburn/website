import { style } from '@vanilla-extract/css';
import { vars, primaryAccent } from '@styles/theme.css';

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
            marginRight: vars.sizes.tiny
        }
    }
});

export const link = style({
    color: 'inherit',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '9999px',
    border: `2px transparent solid`,
    padding: `${vars.sizes.tiny} ${vars.sizes.small}`
});

export const linkActive = style({
    borderColor: primaryAccent
});
