import { style, globalStyle } from '@vanilla-extract/css';
import {
    sizes,
    vars,
    breakpoints,
    secondaryAccent
} from '@styles/theme.css.ts';

export const listCard = style({
    display: 'grid',
    overflow: 'hidden',
    rowGap: sizes.small,
    padding: sizes.nano,
    columnGap: sizes.small,
    borderRadius: sizes.small,
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    gridTemplateColumns: '1fr 3fr',
    background: `color-mix(in srgb, ${vars.colors.white} 30%, transparent)`,
    transition: 'border 0.2s ease-in-out',
    border: `1px ${vars.colors.silverChalice} solid`,
    selectors: {
        '&:hover': {
            borderColor: secondaryAccent,
            boxShadow: `0 0 10px color-mix(in srgb, ${vars.colors.black} 30%, transparent)`
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: `color-mix(in srgb, ${vars.colors.black} 30%, transparent)`,
            borderColor: vars.colors.eerieBlack
        },
        [breakpoints.medium]: {
            gridTemplateColumns: '1fr'
        }
    }
});

export const thumbnail = style({
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    objectPosition: 'top',
    justifySelf: 'flex-end',
    borderRadius: sizes.mini,
    background: vars.colors.silverChalice,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: vars.colors.eerieBlack
        }
    }
});

globalStyle(`${thumbnail} img`, {
    width: '100%',
    display: 'block',
    minHeight: '240px',
    transition: 'all 0.2s ease-in-out'
});

export const content = style({
    padding: sizes.medium
});

export const meta = style({
    display: 'flex',
    alignItems: 'center',
    marginBottom: sizes.medium,
    justifyContent: 'space-between',
    '@media': {
        [breakpoints.medium]: {
            flexDirection: 'column'
        }
    }
});

export const publishedDate = style({
    position: 'relative'
});

export const title = style({
    fontWeight: 'bold',
    margin: `0 0 ${sizes.tiny}`
});

export const description = style({
    margin: 0,
    lineHeight: 1.3,
    color: vars.colors.sonicSilver,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.battleshipGray
        }
    }
});

export const publishDate = style({
    position: 'relative'
});

export const details = style({
    display: 'grid',
    rowGap: sizes.medium,
    alignItems: 'flex-start',
    columnGap: sizes.medium,
    gridTemplateColumns: '4fr 2fr',
    '@media': {
        [breakpoints.medium]: {
            gridTemplateColumns: '1fr'
        }
    }
});

export const projectLink = style({
    marginLeft: 'auto',
    '@media': {
        [breakpoints.medium]: {
            marginLeft: 0
        }
    }
});

export const externalIcon = style({
    marginRight: sizes.tiny
});

export const info = style({});
