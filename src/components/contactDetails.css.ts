import { style } from '@vanilla-extract/css';
import { vars, sizes } from '@styles/theme.css';

export const contact = style({
    fontSize: '1.2rem'
});

export const title = style({
    margin: `0 0 ${sizes.small} 0`
});

export const paragraph = style({
    lineHeight: 1.3,
    color: `rgb(${vars.colors.sonicSilver})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.battleshipGray})`
        }
    }
});

export const socialLinks = style({
    marginTop: sizes.medium
});
