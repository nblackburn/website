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
                    <component
                        :is="iconMap[link.id]"
                        :size="24"
                        v-if="iconMap[link.id]"
                    />
                </NavLink>
            </li>
        </ol>
    </div>
</template>

<script lang="ts" setup>
import type { Component } from 'vue';
import * as styles from './socialLinks.css';
import NavLink from '@components/navLink.vue';
import { socialLinks, type LinkIdentifier } from '@config/socialLinks';
import {
    PhDribbbleLogo,
    PhEnvelope,
    PhGithubLogo,
    PhLinkedinLogo,
    PhSoundcloudLogo
} from '@phosphor-icons/vue';

const iconMap: Partial<Record<LinkIdentifier, Component>> = {
    'at-sign': PhEnvelope,
    linkedin: PhLinkedinLogo,
    dribbble: PhDribbbleLogo,
    soundcloud: PhSoundcloudLogo,
    github: PhGithubLogo
};
</script>
