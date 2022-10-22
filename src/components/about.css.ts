import { style } from '@vanilla-extract/css';
import { vars, sizes, breakpoints } from '@styles/theme.css';

export const about = style({
    display: 'grid',
    fontSize: '1.2rem',
    rowGap: sizes.small,
    textAlign: 'justify',
    alignItems: 'center',
    paddingTop: sizes.large,
    paddingBottom: sizes.large,
    columnGap: sizes.xtraLarge,
    gridTemplateColumns: '1fr 1fr',
    '@media': {
        [breakpoints.large]: {
            columnGap: sizes.large
        },

        [breakpoints.small]: {
            gridTemplateColumns: '1fr'
        }
    }
});

export const detail = style({
    position: 'relative'
});

export const summary = style({
    marginBottom: sizes.large
});

export const readMore = style({
    display: 'flex',
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
    background: vars.colors.silverChalice,
    border: `2px ${vars.colors.silverChalice} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: vars.colors.eerieBlack,
            borderColor: vars.colors.eerieBlack
        }
    }
});
