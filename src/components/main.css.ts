import { style } from '@vanilla-extract/css';
import { sizes, containers } from '@styles/theme.css';

export const main = style({
    flex: 1,
    width: '100%',
    margin: 'auto',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    marginBottom: sizes.large,
    padding: `0 ${sizes.small}`,
    maxWidth: containers.xtraLarge
});
