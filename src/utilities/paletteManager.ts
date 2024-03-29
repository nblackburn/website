import config from '@app/config';
import { getMonth } from 'date-fns';
import {
    christmasPalette,
    halloweenPalette,
    paletteClasses
} from '@styles/palettes.css';

export const getActivePalette = (): string => {
    const now = new Date();
    const currentMonth = getMonth(now);

    // Show in October
    if (currentMonth === 9) {
        return halloweenPalette;
    }

    // Show in December
    if (currentMonth === 11) {
        return christmasPalette;
    }

    return config.palette.default;
};

export const getAppliedPalettes = (element: HTMLElement): string[] => {
    const appliedPalettes: string[] = [];
    const classList = element.classList;

    // Figure out what palettes are currently applied.
    classList.forEach((elementClass) => {
        if (paletteClasses.includes(elementClass)) {
            appliedPalettes.push(elementClass);
        }
    });

    return appliedPalettes;
};

export const applyPalette = (palette: string, element: HTMLElement): void => {
    const classList = element.classList;
    const appliedPalettes = getAppliedPalettes(element);

    // Check we don't already have the target palette applied.
    if (appliedPalettes.includes(palette)) {
        return;
    }

    // Apply the target palette.
    classList.add(palette);

    // Figure out palettes in need of removal.
    const otherPalettes = appliedPalettes.filter((paletteClass) => {
        return paletteClass !== palette;
    });

    // Remove previously applied palette classes.
    otherPalettes.forEach((paletteClass) => {
        if (classList.contains(paletteClass)) {
            classList.remove(paletteClass);
        }
    });
};
