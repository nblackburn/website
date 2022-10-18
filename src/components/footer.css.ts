import { style } from '@vanilla-extract/css';
import { vars, breakpoints } from '@styles/theme.css';

export const footer = style({
    marginTop: vars.sizes.small,
    borderTop: `1px ${vars.colors.silverChalice} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.eerieBlack
        }
    }
});

export const container = style({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    padding: vars.sizes.medium,
    justifyContent: 'space-between',
    maxWidth: vars.containers.xtraLarge,
    '@media': {
        [breakpoints.medium]: {
            flexDirection: 'column'
        }
    }
});

export const copyright = style({
    '@media': {
        [breakpoints.medium]: {
            marginBottom: vars.sizes.small
        }
    }
});

export const version = style({
    position: 'relative'
});
