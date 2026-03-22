import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent } from '@styles/theme.css.ts';

export const input = style({
    width: '100%',
    fontSize: 'inherit',
    padding: sizes.small,
    borderRadius: sizes.tiny,
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0px 0px 0px 0px transparent',
    border: `1px ${vars.colors.alabasterGrey} solid`,
    selectors: {
        '&:focus': {
            borderColor: primaryAccent,
            boxShadow: `0px 0px 0px 4px color-mix(in oklab, ${primaryAccent} 10%, transparent)`
        },
        '&:disabled': {
            color: vars.colors.coolSteel
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: `color-mix(in oklab, ${vars.colors.black} 30%, transparent)`,
            color: vars.colors.white,
            border: `1px ${vars.colors.carbonBlack} solid`
        }
    }
});

export const validated = style([
    input,
    {
        selectors: {
            '&:invalid': {
                borderColor: `1px ${vars.colors.redOchre} solid`,
                '@media': {
                    '(prefers-color-scheme: dark)': {
                        border: `1px ${vars.colors.redOchre} solid`
                    }
                }
            }
        }
    }
]);
