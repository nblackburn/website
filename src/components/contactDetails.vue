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

<script lang="ts" setup>
import * as styles from './contactDetails.css';
import SocialLinks from '@components/socialLinks.vue';
</script>
