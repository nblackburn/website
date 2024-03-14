import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent } from '@styles/theme.css';

export const input = style({
    width: '100%',
    fontSize: 'inherit',
    padding: sizes.small,
    borderRadius: sizes.tiny,
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0px 0px 0px 0px transparent',
    border: `1px rgb(${vars.colors.silverChalice}) solid`,
    selectors: {
        '&:focus': {
            borderColor: `rgb(${primaryAccent})`,
            boxShadow: `0px 0px 0px 4px rgba(${primaryAccent} / 0.1)`
        },
        '&:disabled': {
            color: `rgb(${vars.colors.davyGrey})`
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: 'rgba(0 0 0 / 0.3)',
            color: `rgb(${vars.colors.white})`,
            border: `1px rgb(${vars.colors.eerieBlack}) solid`
        }
    }
});

export const validated = style([
    input,
    {
        selectors: {
            '&:invalid': {
                borderColor: `1px rgb(${vars.colors.venetianRed}) solid`,
                '@media': {
                    '(prefers-color-scheme: dark)': {
                        border: `1px rgb(${vars.colors.venetianRed}) solid`
                    }
                }
            }
        }
    }
]);
