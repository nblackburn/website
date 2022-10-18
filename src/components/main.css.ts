import { style } from '@vanilla-extract/css';
import { vars, containers } from '@styles/theme.css';

export const main = style({
    flex: 1,
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: vars.sizes.small,
    maxWidth: containers.xtraLarge
});
