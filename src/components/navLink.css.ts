import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent } from '@styles/theme.css';

export const navLink = style({
    display: 'flex',
    color: 'inherit',
    fontWeight: 'bold',
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: '9999px',
    justifyContent: 'center',
    border: `2px transparent solid`,
    padding: `0.75rem ${sizes.small}`,
    transition: 'border 0.2s ease-in-out',
    selectors: {
        '&:hover': {
            borderColor: vars.colors.silverChalice
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            selectors: {
                '&:hover': {
                    borderColor: vars.colors.eerieBlack
                }
            }
        }
    }
});

export const active = style({
    borderColor: primaryAccent,
    selectors: {
        '&:hover': {
            borderColor: primaryAccent
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            selectors: {
                '&:hover': {
                    borderColor: primaryAccent
                }
            }
        }
    }
});

export const icon = style({
    padding: '0.75rem'
});

export const disabled = style({
    cursor: 'not-allowed',
    color: vars.colors.silverChalice,
    selectors: {
        '&:hover': {
            borderColor: 'transparent'
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.eerieBlack,
            selectors: {
                '&:hover': {
                    borderColor: 'transparent'
                }
            }
        }
    }
});
