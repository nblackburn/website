import { style } from '@vanilla-extract/css';
import { vars, sizes, breakpoints } from '@styles/theme.css';

export const about = style({
    display: 'grid',
    fontSize: '1.1rem',
    rowGap: sizes.small,
    textAlign: 'justify',
    alignItems: 'center',
    columnGap: sizes.large,
    paddingTop: sizes.large,
    paddingBottom: sizes.large,
    gridTemplateColumns: '1fr 1fr',
    '@media': {
        [breakpoints.small]: {
            gridTemplateColumns: '1fr'
        }
    }
});

export const detail = style({
    position: 'relative'
});

export const summary = style({
    marginBottom: sizes.medium
});

export const readMore = style({
    display: 'flex',
    justifyContent: 'flex-end'
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
    background: vars.colors.eerieBlack,
    border: `2px ${vars.colors.eerieBlack} solid`
});
