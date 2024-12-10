import { style } from '@vanilla-extract/css';
import { vars, sizes, containers, breakpoints } from '@styles/theme.css';

export const header = style({
    top: 0,
    zIndex: 10,
    position: 'sticky',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    background: 'rgba(255 255 255 / 0.5)',
    borderBottom: `1px rgb(${vars.colors.silverChalice}) solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: `rgb(${vars.colors.eerieBlack})`,
            background: 'rgba(13 13 13 / 0.5)'
        }
    }
});

export const container = style({
    margin: 'auto',
    display: 'flex',
    rowGap: sizes.nano,
    columnGap: sizes.nano,
    padding: sizes.small,
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: containers.xtraLarge,
    '@media': {
        [breakpoints.medium]: {
            flexDirection: 'column'
        }
    }
});
