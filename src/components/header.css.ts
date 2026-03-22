import { style } from '@vanilla-extract/css';
import { vars, sizes, containers, breakpoints } from '@styles/theme.css.ts';

export const header = style({
    width: '100%',
    display: 'flex',
    gap: sizes.mini,
    alignItems: 'center',
    padding: sizes.mini,
    borderRadius: '1000px',
    paddingRight: sizes.small,
    paddingLeft: sizes.medium,
    justifyContent: 'space-between',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    background: `color-mix(in srgb, ${vars.colors.white} 80%, transparent)`,
    border: `1px ${vars.colors.silverChalice} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.eerieBlack,
            background: `color-mix(in srgb, ${vars.colors.richBlack} 80%, transparent)`
        },
        [breakpoints.medium]: {
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            borderRadius: 0,
            flexDirection: 'column'
        }
    }
});

export const container = style({
    top: 0,
    zIndex: 10,
    width: '100%',
    margin: 'auto',
    overflow: 'hidden',
    position: 'sticky',
    padding: sizes.medium,
    maxWidth: containers.xtraLarge,
    '@media': {
        [breakpoints.medium]: {
            padding: 0
        }
    }
});
