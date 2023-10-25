<template>
    <section :class="styles.contact">
        <h3 :class="styles.title">Let's keep in touch</h3>
        <p :class="styles.paragraph">
            Whether you are stuck with a bug, have a project you need help with
            or just want to say hi, i'd love to hear from you.
        </p>
        <p :class="styles.paragraph">
            Simply fill out the form or connect with me with one of the links
            below.
        </p>
        <div :class="styles.socialLinks">
            <SocialLinks :class="styles.socialLinks" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './contact.css';
import NavLink from '@components/navLink.vue';
import SocialLinks from '@components/socialLinks.vue';

export default defineComponent({
    components: { SocialLinks, NavLink },

    setup() {
        return { styles };
    }
});
</script>
