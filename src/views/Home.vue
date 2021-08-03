<template lang="pug">
div
    .container.my-3
        .row
            .col-12
                router-link(to="/add-link").link-container.d-flex.align-items-center.rounded.text-dark.p-1
                    .icon.flex-shrink-0.d-flex.flex-column.align-items-center.justify-content-center.rounded.border.border-secondary.bg-point
                        i.fas.fa-plus
                    span.px-4 SUBMIT A LINK

    .separator.bg-secondary.rounded.my-2

    link-list

</template>

<style lang="scss">
.separator {
    height: 5px;
}
</style>

<script>
import LinkList from '@/components/LinkList.vue';

export default {
    name: 'Home',
    components: {
        'link-list': LinkList,
    },
    data() {
        return {};
    },
};
</script>
