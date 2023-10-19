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
                    <svg width="24" height="24" role="img">
                        <use :href="'#' + link.id" />
                    </svg>
                </NavLink>
            </li>
        </ol>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './socialLinks.css';
import NavLink from '@components/navLink.vue';
import { socialLinks } from '@config/socialLinks';

export default defineComponent({
    components: {
        NavLink
    },

    setup() {
        return { styles, socialLinks };
    }
});
</script>
