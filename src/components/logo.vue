<template>
    <svg
        :width="size"
        :height="size"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
    >
        <title>Logo</title>
        <ellipse
            cx="22.831"
            cy="105.296"
            rx="10.031"
            ry="9.904"
            :fill="`rgb(${secondaryAccent})`"
        />
        <path
            d="M12.8,22.704c0,-5.466 4.495,-9.904 10.031,-9.904c2.769,-0 5.276,1.109 7.092,2.902l0.002,-0.001l31.381,30.983l-0.005,0.006c1.674,1.77 2.699,4.146 2.699,6.756c0,5.467 -4.495,9.905 -10.031,9.905c-2.645,-0 -5.051,-1.013 -6.844,-2.666l-0.005,0.006l-14.257,-14.076l-0,14.076c-0,5.466 -4.495,9.904 -10.032,9.904c-5.536,0 -10.031,-4.438 -10.031,-9.904l0,-37.987Z"
            :fill="`rgb(${primaryAccent})`"
        />
        <ellipse
            cx="105.169"
            cy="22.704"
            rx="10.031"
            ry="9.904"
            :fill="`rgb(${primaryAccent})`"
        />
        <path
            d="M95.137,67.309c0,-5.466 4.495,-9.904 10.032,-9.904c5.536,-0 10.031,4.438 10.031,9.904l0,37.987c0,5.466 -4.495,9.904 -10.031,9.904c-2.769,0 -5.276,-1.109 -7.092,-2.902l-0.002,0.001l-31.381,-30.983l0.005,-0.006c-1.674,-1.77 -2.699,-4.146 -2.699,-6.756c-0,-5.467 4.495,-9.905 10.031,-9.905c2.645,0 5.051,1.013 6.844,2.666l0.005,-0.006l14.257,14.076l0,-14.076Z"
            :fill="`rgb(${secondaryAccent})`"
        />
    </svg>
</template>

<script lang="ts" setup>
import { primaryAccent, secondaryAccent } from '@styles/theme.css';

interface Props {
    size?: number;
}

withDefaults(defineProps<Props>(), {
    size: 48
});
</script>
