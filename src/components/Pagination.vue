<template lang="pug">
div(v-if="pageCount > 1")
    b-button#btn-prev(@click="previousPage" squared variant="light" :disabled="value == 1").p-0.mr-1
        i.fas.fa-angle-left

    b-button(v-for="n in pageCount" squared @click="setPage(n)" :key="n" variant="light" :class="{ active: value == n }").p-0.mx-1.border-secondary {{ n }}

    b-button#btn-next(@click="nextPage" squared variant="light" :disabled="value == pageCount").p-0.ml-1
        i.fas.fa-angle-right
</template>

<style lang="scss" scoped>
button {
    background-color: transparent !important;
    border-width: 0px;
    font-weight: 600;
    text-align: center;
    min-width: 50px;
    height: 50px;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.5rem;

    &.active {
        border-width: 3px;
    }
}
</style>

<script>
export default {
    name: 'Pagination',
    props: {
        value: Number,
        pageCount: Number,
    },
    data() {
        return {};
    },
    methods: {
        setPage(page) {
            this.$emit('input', page);
        },
        nextPage() {
            this.$emit('input', this.value + 1);
        },
        previousPage() {
            this.$emit('input', this.value - 1);
        },
    },
    computed: {},
    created() {},
};
</script>
