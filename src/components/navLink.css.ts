import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent } from '@styles/theme.css';

export const navLink = style({
    color: 'inherit',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '9999px',
    padding: `0.75rem ${sizes.small}`,
    transition: 'border 0.2s ease-in-out',
    border: `2px ${vars.colors.silverChalice} solid`,
    selectors: {
        '&:hover': {
            borderColor: primaryAccent
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.eerieBlack
        }
    }
});

export const active = style({
    borderColor: primaryAccent,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: primaryAccent
        }
    }
});
