import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const main = style({
    flex: 1,
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: vars.sizes.small,
    maxWidth: vars.containers.xtraLarge
});
