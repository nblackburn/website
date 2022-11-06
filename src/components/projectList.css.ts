import { sizes } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const projectList = style({
    display: 'grid',
    rowGap: sizes.small,
    columnGap: sizes.small,
    gridTemplateColumns: '1fr'
});
