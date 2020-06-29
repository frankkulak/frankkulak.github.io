<template>
    <b-row align-h="center" class="company-display">
        <b-col cols="12" md="10" lg="8" class="text-left highest-col">
            <hr>
            <b-row align-h="center" class="company-name">
                <b-col cols="12" md="6">
                    <h4>{{ company.name }}</h4>
                </b-col>
                <b-col cols="12" md="6">
                    <h4 class="font-weight-normal">{{ company.location }}</h4>
                </b-col>
            </b-row>
            <div v-for="(position, index) in company.positions" :key="index" class="position">
                <b-row align-h="center">
                    <b-col cols="12" md="6">
                        <h4 class="font-weight-normal">{{ position.title }}</h4>
                    </b-col>
                    <b-col cols="12" md="6">
                        <h4 class="font-weight-normal" v-html="dateSpanHTML(position)"></h4>
                    </b-col>
                </b-row>
                <ul v-show="position.description.length !== 0">
                    <li v-for="(bullet, index) in position.description" :key="index" v-html="bullet"></li>
                </ul>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    import Util from '../modules/Util.js'

    export default {
        name: "CompanyDisplay",
        props: {
            company: Object,
            showAll: Boolean
        },
        methods: {
            dateSpanHTML: function ({dates}) {
                return dates.map(date => Util.formatDateSpanHTML(date)).join(", ");
            }
        }
    }
</script>

<style lang="scss">
    .company-display {
        &:first-child hr {
            display: none;
        }

        hr {
            @include my($padding-lg);
            height: 1px;
            opacity: 0.5;
            width: 80%;
        }

        @media only screen and (max-width: 768px) {
            .company-name [class^="col"] {
                text-align: center !important;
            }

            .position [class^="col"] {
                text-align: left !important;
            }
        }

        .highest-col [class^="col"] {
            @include px(0);

            &:last-child {
                text-align: right;
            }
        }

        .company-name {
            padding-bottom: $padding-md;
        }

        .position {
            @include mb-abl($padding-md);

            ul {
                margin: $padding-sm 0 0;
            }
        }
    }
</style>