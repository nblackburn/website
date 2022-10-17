import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const header = style({
    top: 0,
    zIndex: 10,
    position: 'sticky',
    backdropFilter: 'blur(10px)',
    marginBottom: vars.sizes.small,
    background: `rgba(255 255 255 / 0.9)`,
    borderBottom: `1px ${vars.colors.silverChalice} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.eerieBlack,
            background: `rgba(13 13 13 / 0.9)`
        }
    }
});

export const container = style({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    padding: vars.sizes.small,
    justifyContent: 'space-between',
    maxWidth: vars.containers.xtraLarge
});
