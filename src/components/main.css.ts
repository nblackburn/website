import { style } from '@vanilla-extract/css';
import { sizes, containers } from '@styles/theme.css';

export const main = style({
    flex: 1,
    width: '100%',
    margin: 'auto',
    display: 'flex',
    padding: sizes.small,
    flexDirection: 'column',
    maxWidth: containers.xtraLarge
});
