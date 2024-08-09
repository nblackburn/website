<template>
    <section :class="styles.intro">
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
                    I have over 10 years of experience and keep looking to
                    expand my skills. Recently I started learning music and have
                    released a few tracks.
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

<script lang="ts" setup>
import * as styles from './introSection.css';
import NavLink from '@components/navLink.vue';
import SocialLinks from '@components/socialLinks.vue';
</script>
