<template>
    <section :class="styles.about">
        <div :class="styles.detail">
            <div :class="styles.summary">
                <h2 :class="styles.title">About me</h2>
                <p :class="styles.paragraph">
                    My name is Nathaniel and I come from the United Kingdom
                    where it rains quite a lot but don't let that dampen the
                    mood. I specialise in creating experiences which empower
                    people and bring them together for good.
                </p>
                <p :class="styles.paragraph">
                    I have over 10 years of experience and am always looking
                    expand my skills. More recently i started learning music and
                    have released a few tracks.
                </p>
            </div>
            <div :class="styles.readMore">
                <SocialLinks :class="styles.socialLinks" />
                <NavLink href="/about">More about me</NavLink>
            </div>
        </div>
        <div :class="styles.image">
            <slot name="image" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as styles from './about.css';
import NavLink from '@components/navLink.vue';
import SocialLinks from '@components/socialLinks.vue';

export default defineComponent({
    components: { SocialLinks, NavLink },

    setup() {
        return { styles };
    }
});
</script>
