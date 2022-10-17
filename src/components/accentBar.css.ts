import { style } from '@vanilla-extract/css';
import { vars, primaryAccent, secondaryAccent } from '@styles/theme.css';

export const accentBar = style({
    width: '100%',
    height: vars.sizes.nano,
    backgroundImage: `linear-gradient(to right, ${primaryAccent}, ${secondaryAccent})`
});
