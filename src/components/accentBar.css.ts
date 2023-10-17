import { style } from '@vanilla-extract/css';
import { sizes, primaryAccent, secondaryAccent } from '@styles/theme.css';

export const accentBar = style({
    width: '100%',
    height: sizes.nano,
    backgroundImage: `linear-gradient(to right, rgb(${primaryAccent}), rgb(${secondaryAccent}))`
});
