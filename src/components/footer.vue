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
                        <a :class="styles.link" href="/cookie-policy"
                            >Cookie Policy</a
                        >
                    </li>
                    <li :class="styles.item">
                        <a :class="styles.link" href="/privacy-policy"
                            >Privacy Policy</a
                        >
                    </li>
                    <li :class="styles.item">
                        <a :class="styles.link" href="/acceptable-use"
                            >Acceptable use</a
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
