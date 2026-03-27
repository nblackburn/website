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
    backgroundRepeat: 'repeat',
    backgroundImage: "url('/textures/grain.svg')",
    backgroundColor: `color-mix(in oklab, ${vars.colors.white} 80%, transparent)`,
    border: `1px ${vars.colors.alabasterGrey} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.carbonBlack,
            backgroundColor: `color-mix(in oklab, ${vars.colors.pitchBlack} 80%, transparent)`
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

export const skipToContent = style({
    top: 'auto',
    width: '1px',
    height: '1px',
    color: 'inherit',
    left: '-10000px',
    overflow: 'hidden',
    position: 'absolute',
    selectors: {
        '&:focus': {
            width: 'auto',
            height: 'auto',
            position: 'static'
        }
    }
});
