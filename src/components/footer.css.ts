import { style } from '@vanilla-extract/css';
import { vars, sizes, breakpoints, containers } from '@styles/theme.css.ts';

export const footer = style({
    borderTop: `1px ${vars.colors.alabasterGrey} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.carbonBlack
        }
    }
});

export const container = style({
    margin: 'auto',
    display: 'flex',
    padding: sizes.medium,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxWidth: containers.xtraLarge,
    '@media': {
        [breakpoints.medium]: {
            flexDirection: 'column'
        }
    }
});

export const legal = style({
    display: 'flex',
    gap: sizes.mini,
    flexDirection: 'column'
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
            marginRight: sizes.tiny
        }
    }
});

export const link = style({
    fontSize: sizes.small,
    color: vars.colors.dimGrey,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.coolSteel
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
