<template>
    <div class="theme-toggle">
        <b-button class="outline-primary" pill @click="toggleTheme">
            <i class="fas" :class="themeIsDark ? 'fa-sun' : 'fa-moon'"></i>
        </b-button>
    </div>
</template>

<script>
    import Theme from '../modules/Theme.js'

    export default {
        name: "ThemeToggle",
        data: function () {
            return {
                // use data and not computer property since Vue can't detect value change in Theme
                themeIsDark: Theme.get() === 'dark'
            }
        },
        methods: {
            toggleTheme: function () {
                Theme.toggle();
                this.themeIsDark = Theme.get() === 'dark';
            }
        }
    }
</script>

<style lang="scss">
    .theme-toggle {
        z-index: 1020;
        position: fixed;
        right: 20px;
        bottom: 20px;

        button {
            padding: {
                top: 8px;
                bottom: 8px;
            }
        }

        i {
            margin: 0;
            padding: 0;
        }
    }
</style>