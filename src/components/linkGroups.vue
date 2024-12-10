<template>
    <div :class="styles.linkGroups">
        <section
            v-for="group in groups"
            :key="group.id"
            :class="styles.linkGroup"
        >
            <h3 :class="styles.heading">{{ group.name }}</h3>
            <ol :class="styles.items">
                <li
                    v-for="item in group.items"
                    :key="item.id"
                    :class="styles.item"
                >
                    <Link
                        :href="item.href"
                        :class="styles.link"
                        :aria-label="item.title + ' (External link)'"
                    >
                        <svg
                            width="18"
                            height="18"
                            role="img"
                            :class="styles.icon"
                        >
                            <use href="#external" />
                        </svg>
                        <span>{{ item.title }}</span>
                    </Link>
                </li>
            </ol>
        </section>
    </div>
</template>

<script lang="ts" setup>
import Link from '@components/link.vue';
import * as styles from './linkGroups.css';
import { Group } from '@utilities/groupItems';

interface Props {
    groups?: Group[];
}

defineProps<Props>();
</script>
