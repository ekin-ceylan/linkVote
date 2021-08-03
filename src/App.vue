<template lang="pug">
div#app
    .container.px-1.px-sm-2.px-md-3.py-2
        .header.py-3.d-flex.flex-column.flex-md-row.align-items-center.align-items-md-end.justify-content-between
            a(href="https://www.hepsiburada.com/" target="_blank").logo
                img(src="./assets/images/logo.jpg" alt="")
            router-link(to="/").link-vote.mt-2
                span Link
                span VOTE
                span  Challenge

        .main.mx-auto
            router-view
</template>

<style lang="scss" src="./assets/scss/main.scss"></style>
