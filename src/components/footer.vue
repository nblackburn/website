<template>
    <footer :class="styles.footer">
        <div :class="styles.container">
            <div :class="styles.legal">
                <div :class="styles.copyright">
                    &copy; {{ currentYear }} Nathaniel Blackburn. All Rights
                    Reserved.
                </div>
                <ol :class="styles.items">
                    <li :class="styles.item">
                        <a :class="styles.link" href="/privacy-policy"
                            >Privacy policy</a
                        >
                    </li>
                    <li :class="styles.item">
                        <a :class="styles.link" href="/terms-of-service"
                            >Terms of service</a
                        >
                    </li>
                </ol>
            </div>
            <div :class="styles.version">v{{ version }}</div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import * as styles from './footer.css.ts';
import { version } from '@root/package.json';

const currentYear = new Date().getFullYear();
</script>
