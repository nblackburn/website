import { style } from '@vanilla-extract/css';
import { vars, sizes, secondaryAccent } from '@styles/theme.css';

export const pageHeader = style({
    fontSize: '1.2rem',
    textAlign: 'center',
    paddingTop: sizes.large,
    marginBottom: sizes.large,
    paddingBottom: sizes.large,
    borderBottom: `1px rgb(${vars.colors.silverChalice}) solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: `rgb(${vars.colors.eerieBlack})`
        }
    }
});

export const title = style({
    margin: '0 0 0.5rem 0',
    fontSize: sizes.medium
});

export const highlight = style({
    position: 'relative',
    color: secondaryAccent
});

export const meta = style({
    fontSize: sizes.small
});

export const subTitle = style({
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: 'normal',
    marginBottom: sizes.small,
    color: `rgb(${vars.colors.sonicSilver})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.battleshipGray})`
        }
    }
});
