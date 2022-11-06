import { style } from '@vanilla-extract/css';
import { vars, sizes } from '@styles/theme.css';

export const pageHeader = style({
    fontSize: '1.2rem',
    textAlign: 'center',
    paddingTop: sizes.large,
    marginBottom: sizes.large,
    paddingBottom: sizes.large,
    borderBottom: `1px ${vars.colors.silverChalice} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.eerieBlack
        }
    }
});

export const title = style({
    margin: '0 0 0.75rem 0',
    fontSize: sizes.medium
});

export const subTitle = style({
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: 'normal',
    color: vars.colors.sonicSilver,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.davyGrey
        }
    }
});
