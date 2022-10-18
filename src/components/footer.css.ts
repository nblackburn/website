import { style } from '@vanilla-extract/css';
import { vars, sizes, breakpoints, containers } from '@styles/theme.css';

export const footer = style({
    marginTop: sizes.small,
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
    padding: sizes.medium,
    justifyContent: 'space-between',
    maxWidth: containers.xtraLarge,
    '@media': {
        [breakpoints.medium]: {
            flexDirection: 'column'
        }
    }
});

export const copyright = style({
    '@media': {
        [breakpoints.medium]: {
            marginBottom: sizes.small
        }
    }
});

export const version = style({
    position: 'relative'
});
