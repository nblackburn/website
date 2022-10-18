<template>
    <footer :class="styles.footer">
        <div :class="styles.container">
            <div :class="styles.copyright">
                &copy; {{ currentYear }} Nathaniel Blackburn. All Rights
                Reserved.
            </div>
            <div :class="styles.version">{{ version }}</div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './footer.css';
import { version } from '@app/package.json';

export default defineComponent({
    setup() {
        const currentYear = new Date().getFullYear();

        return { styles, version, currentYear };
    }
});
</script>
