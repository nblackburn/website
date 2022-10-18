import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

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
        '(max-width: 768px)': {
            flexDirection: 'column'
        }
    }
});

export const copyright = style({
    '@media': {
        '(max-width: 768px)': {
            marginBottom: vars.sizes.small
        }
    }
});

export const version = style({
    position: 'relative'
});
