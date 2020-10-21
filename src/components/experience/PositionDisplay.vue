<template>
    <div class="position-display mb-5">
        <div class="position-name-container px-4 py-3">
            <b-row>
                <b-col cols="12" md="6">
                    <h2>{{ position.company }}</h2>
                </b-col>
                <b-col cols="12" md="6" class="position">
                    <p>{{ position.title }}</p>
                </b-col>
            </b-row>
        </div>
        <div class="position-details-container p-4">
            <ul>
                <li v-for="(bullet, index) in position.description" :key="index" v-html="bullet"></li>
            </ul>
            <p v-html="dateSpanHTML"></p>
        </div>
    </div>
</template>

<script>
    import Util from '../../modules/Util.js'

    export default {
        name: "PositionDisplay",
        props: {
            position: Object,
        },
        computed: {
            dateSpanHTML: function () {
                const {dates, location} = this.$props.position;
                return `${dates.map(date => Util.formatDateSpanHTML(date)).join(", ")} • ${location}`;
            }
        }
    }
</script>

<style lang="scss">
    .position-display {
        text-align: left;
        background-color: var(--card-bg-color);
        @extend %cropped-box;

        &:last-child {
            margin-bottom: 0 !important;
        }

        .position-name-container {
            @extend %default-gradient;
            @extend %cropped-box;

            h2, p {
                color: var(--light-color);
                margin-bottom: 0;
            }

            @media (min-width: 768px) {
                .col-12.position {
                    text-align: right;
                }
            }
        }

        .position-details-container {
            p:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>