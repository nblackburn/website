import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent } from '@styles/theme.css.ts';

export const button = style({
    display: 'flex',
    color: 'inherit',
    fontWeight: 'bold',
    padding: sizes.mini,
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: sizes.tiny,
    justifyContent: 'center',
    transition: 'all 0.2s ease-in-out',
    background: primaryAccent,
    boxShadow: '0px 0px 0px 0px transparent',
    border: `1px ${vars.colors.silverChalice} solid`,
    selectors: {
        '&:hover:not(:disabled)': {
            cursor: 'pointer',
            borderColor: primaryAccent,
            boxShadow: `0px 0px 0px 4px color-mix(in oklab, ${primaryAccent} 10%, transparent)`
        },
        '&:focus': {
            borderColor: primaryAccent,
            boxShadow: `0px 0px 0px 4px color-mix(in oklab, ${primaryAccent} 10%, transparent)`
        },
        '&:disabled': {
            opacity: 0.5
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.white,
            borderColor: vars.colors.eerieBlack
        }
    }
});
