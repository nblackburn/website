<template>
    <div :class="styles.socialLinks">
        <ol :class="styles.items">
            <li v-for="link in socialLinks" :key="link.id" :class="styles.item">
                <NavLink :href="link.href" icon :title="link.name">
                    <svg width="24" height="24">
                        <use :href="'#' + link.id" />
                    </svg>
                </NavLink>
            </li>
        </ol>
    </div>
</template>

<script lang="ts">
import * as styles from './socialLinks.css';
import NavLink from '@components/navLink.vue';
import { defineComponent } from 'vue';

const socialLinks = [
    { id: 'email', name: 'Email', href: 'mailto:support@nblackburn.uk' },
    {
        id: 'github',
        name: 'GitHub',
        href: 'https://github.com/nblackburn'
    },
    {
        id: 'dribbble',
        name: 'Dribbble',
        href: 'https://dribbble.com/nblackburn'
    },
    {
        id: 'soundcloud',
        name: 'Soundcloud',
        href: 'https://soundcloud.com/nblackburn'
    },
    {
        id: 'twitter',
        name: 'Twitter',
        href: 'https://twitter.com/imnblackburn'
    }
];

export default defineComponent({
    components: {
        NavLink
    },

    setup() {
        return { styles, socialLinks };
    }
});
</script>
