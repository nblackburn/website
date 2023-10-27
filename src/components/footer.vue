<template>
    <footer :class="styles.footer">
        <div :class="styles.container">
            <div :class="styles.copyright">
                &copy; {{ currentYear }} Nathaniel Blackburn. All Rights
                Reserved.
            </div>
            <div :class="styles.version">Version {{ version }}</div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import * as styles from './footer.css';
import { version } from '@root/package.json';

const currentYear = new Date().getFullYear();
</script>
