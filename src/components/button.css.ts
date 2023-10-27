import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent } from '@styles/theme.css';

export const button = style({
    display: 'flex',
    color: 'inherit',
    fontWeight: 'bold',
    padding: sizes.small,
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: sizes.tiny,
    justifyContent: 'center',
    transition: 'all 0.2s ease-in-out',
    background: `rgb(${primaryAccent})`,
    boxShadow: `0px 0px 0px 0px transparent`,
    border: `1px rgb(${vars.colors.silverChalice}) solid`,
    selectors: {
        '&:hover:not(:disabled)': {
            cursor: 'pointer',
            borderColor: `rgb(${primaryAccent})`,
            boxShadow: `0px 0px 0px 4px rgba(${primaryAccent} / 0.1)`
        },
        '&:focus': {
            borderColor: `rgb(${primaryAccent})`,
            boxShadow: `0px 0px 0px 4px rgba(${primaryAccent} / 0.1)`
        },
        '&:disabled': {
            opacity: 0.5
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.white})`,
            borderColor: `rgb(${vars.colors.eerieBlack})`
        }
    }
});
