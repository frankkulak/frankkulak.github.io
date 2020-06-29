<template>
    <div class="theme-toggle">
        <input id="theme-switch" type="checkbox" name="theme" :checked="themeIsDark" @change="toggleTheme"/>
        <label for="theme-switch"></label>
    </div>
</template>

<script>
    import Theme from '../modules/Theme.js'

    export default {
        name: "ThemeToggle",
        computed: {
          themeIsDark: function () {
              return Theme.get() === 'dark';
          }
        },
        methods: {
            toggleTheme: Theme.toggle
        }
    }
</script>

<style lang="scss">
    .theme-toggle {
        z-index: 1020;
        position: fixed;
        right: 20px;
        bottom: 20px;

        input {
            display: none;
        }

        label, label:focus {
            font-size: 24px;
            padding-left: 6px;
            padding-right: 6px;
            display: block;
            border: solid;
            border-width: thin;
            border-color: var(--accent-color);
            border-radius: 100%;
            background: transparent;
            opacity: 0.65;
            cursor: pointer;
        }

        label:hover {
            background-color: var(--accent-color);
            opacity: 1;
        }

        @media (hover: none) {
            label:hover {
                background-color: inherit;
                opacity: inherit;
            }
        }

        label::before {
            content: '\1F319';
        }

        :checked + label::before {
            content: '\1F324';
        }

        .theme-transition & label {
            background-color: var(--accent-color);
            opacity: 1;
            cursor: none;
            pointer-events: none;
        }
    }
</style>