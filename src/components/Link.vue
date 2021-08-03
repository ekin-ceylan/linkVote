<template lang="pug">
a(href="javascript:void(0);").link-container.d-flex.rounded.position-relative.p-1

    a(href="javascript:void(0);" @click="remove").btn-delete
            i.inline-block.fas.fa-minus-circle.text-danger
    .icon.d-flex.flex-column.flex-shrink-0.align-items-center.justify-content-center.rounded.border.border-secondary.bg-point {{ value.vote }}
        span POINTS

    .d-flex.flex-column.flex-grow-1.overflow-hidden.px-2
        span.title.text-nowrap.mb-1 {{ value.title }}
        span.url.text-vote ({{ value.url }})

        div.mt-auto.d-flex.text-nowrap.pb-1
            b-button(variant="outline-light" @click="voteUp").border-0.p-0.outline-vote
                i.fas.fa-arrow-up.mr-2
                | Up
                .d-none.d-sm-inline.ml-1 Vote

            b-button(variant="outline-light" @click="voteDown").border-0.p-0.outline-vote.ml-auto.ml-sm-5
                i.fas.fa-arrow-down.mr-2
                | Down
                .d-none.d-sm-inline.ml-1 Vote

</template>

<style lang="scss" scoped>
@import './../assets/scss/variables';

.link-container {
    border: 1px solid transparent;
    background-color: transparent;

    .btn-delete {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);

        &:focus {
            display: inline-block;
        }
    }

    .btn-outline-light:not(:hover) {
        color: $vote;
    }

    .icon {
        span {
            font-size: 1rem;
            font-weight: 400;
        }
    }

    .title {
        font-size: 1.4rem;
        line-height: 1.2rem;
    }

    .url {
        font-size: 1rem;
        font-weight: 400;
    }

    &:hover,
    &:focus-within,
    &:focus {
        background-color: $link;
        border: 1px solid $point;

        .btn-delete {
            display: inline-block;
        }
    }
}
</style>

<script>
export default {
    name: 'Link',
    props: {
        value: Object,
    },
    data() {
        return {};
    },
    methods: {
        remove() {
            this.$emit('remove', this.value);
        },
        voteUp() {
            this.value.vote++;
            this.value.lastVoteDate = new Date();

            this.$emit('input', this.value);
            this.$emit('vote', this.value);
        },
        voteDown() {
            this.value.vote--;
            this.value.lastVoteDate = new Date();

            this.$emit('input', this.value);
            this.$emit('vote', this.value);
        },
    },
    computed: {},
    created() {},
};
</script>
