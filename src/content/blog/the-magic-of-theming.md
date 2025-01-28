---
title: The Magic of Theming
description: A practical guide to theming in CSS.
featuredImage: ./_covers/the-magic-of-theming.png
pubDate: 2025-01-03
tags:
    - css
    - theming
    - guide
    - tutorial
---

It's fair to say that changing the look of your website or app at the tap of a button can feel pretty magical. But if we were to pull back the curtain, you might wonder how it's done.

Join me for a few moments, and I will show you how.

## What is a theme?

Before we begin, let's explore what a theme is. A theme is simply a collection of properties that define your visual identity. One property might define how large your text is, while another determines how round your buttons are. Together, these properties create what's known as a "theme".

## Using properties

Properties, on the other hand, allow us to share values across our website or app. These values can be anything from a colour to milliseconds for a transition.

A classic example would be brand colors. In the past, you would have had to set those colors each time they were used. Multiply that over hundreds if not thousands of files and you have yourself...well a mess.

```css
.button {
    background-color: #6F00FF;
}

.link {
    color: #6F00FF;
}
```

But it doesn't have to be this way. We can use properties to share this colour. This means we can change the brand colour from a single place instead of many.

```css
:root {
    --brand: #6F00FF; /* This is a property in CSS */
}
```

The `:root` pseudo class targets the highest-level element on your page, in the case of HTML this would be the `html` element. This makes it perfect for declaring global CSS properties which can be accessed from anywhere.

```css
.button {
    background-color: var(--brand); /* Here we use that property */
}

.link {
    color: var(--brand); /* And once again here */
}
```

Notice `--brand`, that is how we create properties in CSS. When using them, we use the `var` function followed by the property name, in this case, `var(--brand)`.

If you want to set some properties for a single class, you can do that too. This makes the properties only available to that class and is known as a scoped-property.

```css
.button {
    --brand: #6F00FF;

    background-color: var(--brand);
}
```

## Creating themes

By using scoped properties, we form the basis for theming.

```css
/* Create some themes. */
.theme-one {
    --brand: red;
}

.theme-two {
    --brand: green;
}

/* Use the properties from the active theme. */
h1 {
    color: var(--brand);
}
```

Once we have a theme, we simply apply its class, and we can start using its properties.

```html
<div class="theme-one">
    <h1>Hello World!</h1>
</div>
```

Changing the theme is as simple as swapping the theme class for another, and everything will update as if by magic.

> **TIP**: if you want to apply your theme to the entire page, add the theme class to the `<body>` element.

## Using themes

How you apply theming is entirely up to you. Whether you choose from a set of colors or change the theme based on the time of year, the choice is yours so have fun and express yourself!

## Light & dark modes

Now you know the basics of theming, we take this a step further by leveraging light and dark modes. Of course, you could do this with scoped properties but there is a better way...

Most operating systems allow users to choose between a light and a dark mode as a system preference. We can make use of that by using a media query.

```css
/* Target light mode */
@media (prefers-color-scheme: light) {
    h1 {
        color: #000000;
    }
}

/* Target dark mode */
@media (prefers-color-scheme: dark) {
    h1 {
        color: #ffffff;
    }
}
```

> **TIP**: pick either light or dark as a starting point and use a single media query to override. This means the theme will always work.

This way, when a user visits your website, they see your website based on their preference.

By combining these techniques, you can create an experience that feels personal to everyone—and that is where the true magic lies!

---

Pretty interesting, right? Even if you don’t use it directly, understanding how things work can really shape our perspective.