import { globalStyle, style } from '@vanilla-extract/css';
import { vars, sizes, breakpoints } from '@styles/theme.css.ts';

export const intro = style({
    display: 'grid',
    fontSize: '1.1rem',
    rowGap: sizes.small,
    textAlign: 'justify',
    alignItems: 'center',
    paddingTop: sizes.large,
    marginBottom: sizes.large,
    paddingBottom: sizes.large,
    columnGap: sizes.xtraLarge,
    gridTemplateColumns: '1fr 1fr',
    borderBottom: `1px ${vars.colors.alabasterGrey} solid`,
    '@media': {
        [breakpoints.large]: {
            columnGap: sizes.large
        },

        [breakpoints.small]: {
            gridTemplateColumns: '1fr'
        },

        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.carbonBlack
        }
    }
});

export const detail = style({
    position: 'relative'
});

export const summary = style({
    marginBottom: sizes.large
});

globalStyle(`${summary} p`, {
    lineHeight: 1.75,
    color: vars.colors.dimGrey,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.coolSteel
        }
    }
});

export const readMore = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media': {
        [breakpoints.large]: {
            flexDirection: 'column'
        }
    }
});

export const socialLinks = style({
    '@media': {
        [breakpoints.large]: {
            margin: 'auto',
            marginBottom: sizes.small
        }
    }
});

export const image = style({
    width: '100%',
    height: '450px',
    objectFit: 'cover',
    overflow: 'hidden',
    position: 'relative',
    objectPosition: 'top',
    justifySelf: 'flex-end',
    borderRadius: sizes.small,
    background: vars.colors.alabasterGrey,
    border: `1px ${vars.colors.alabasterGrey} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: vars.colors.carbonBlack,
            borderColor: vars.colors.carbonBlack
        }
    }
});
