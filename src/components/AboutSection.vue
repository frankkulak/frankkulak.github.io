<template>
    <section id="about">
        <section-header title="about" fa-icon="fas fa-user-circle"></section-header>
        <b-row align-h="center">
            <b-col cols="12" sm="10" md="5" lg="4">
                <img src="../assets/profile-pic.png" alt="Profile Picture"/>
                <h3>Frank Kulak</h3>
            </b-col>
            <b-col cols="12" sm="10" md="5" lg="4" class="my-auto">
                <p>Hello there! I'm Frank, and I'm currently studying computer science and linguistics at Northeastern
                    University. I'm expected to graduate in May 2021, and my goal is to work in app or web
                    development.</p>
            </b-col>
        </b-row>
    </section>
</template>

<script>
    import SectionHeader from "@/components/SectionHeader";

    export default {
        name: "AboutSection",
        components: {SectionHeader}
    }
</script>

<style lang="scss">
    section#about {
        img {
            min-width: 45%;
            max-width: 196px;
            height: auto;
        }

        h3 {
            @include my($padding-md);
        }
    }
</style>