<template>
    <div :class="styles.socialLinks">
        <ol :class="styles.items">
            <li v-for="link in socialLinks" :key="link.id" :class="styles.item">
                <NavLink
                    :href="link.href"
                    :aria-label="link.name + ' (External link)'"
                    :title="link.name + ' (External link)'"
                    icon
                >
                    <component :is="resolveIcon(link.id)" :size="24" />
                </NavLink>
            </li>
        </ol>
    </div>
</template>

<script lang="ts" setup>
import * as styles from './socialLinks.css';
import NavLink from '@components/navLink.vue';
import { socialLinks } from '@config/socialLinks';
import {
    PhDribbbleLogo,
    PhEnvelope,
    PhGithubLogo,
    PhLinkedinLogo,
    PhSoundcloudLogo
} from '@phosphor-icons/vue';

const resolveIcon = (icon: string) => {
    switch (icon) {
        case 'at-sign':
            return PhEnvelope;

        case 'linkedin':
            return PhLinkedinLogo;

        case 'dribbble':
            return PhDribbbleLogo;

        case 'soundcloud':
            return PhSoundcloudLogo;

        case 'github':
            return PhGithubLogo;

        default:
            return undefined;
    }
};
</script>
