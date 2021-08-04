<template lang="pug">
.container
    .row
        .col-md-6.col-sm-8.col-12
            b-dropdown#dropdown-1(text="Order by" block split split-class="text-left bg-light text-dark" toggle-class="bg-light text-dark" menu-class="w-100 py-0 rounded-0 bg-link mt-0").m-1
                b-dropdown-item(@click="sort(false)" :link-class="{'px-3 py-2 border-secondary border': true, 'active': sortAsc == false }" ) Most Voted (Z &#8594; A)
                b-dropdown-item(@click="sort(true)" :link-class="{'px-3 py-2 border-secondary border': true, 'active': sortAsc }") Less Voted (A &#8594; Z)

        .col-12
            h-link(v-for="(link, index) in filteredLinks" :key="link.title" v-model="filteredLinks[index]" @remove="remove" @vote="vote").my-3

        .col-12.text-center
            pagination(v-model="page" :page-count="pageCount").my-3.d-inline-block

</template>

<script>
import Pagination from '@/components/Pagination.vue';
import Link from '@/components/Link.vue';
import baseComponent from '@/base/mixins';

export default {
    name: 'LinkList',
    mixins: [baseComponent],
    components: {
        pagination: Pagination,
        'h-link': Link,
    },
    data() {
        return {
            page: 1,
            pageSize: 5,
            sortAsc: null,
            links: [],
        };
    },
    methods: {
        sort(asc = this.sortAsc) {
            if (asc == null) {
                this.links?.sort((a, b) => b.createDate - a.createDate);
                return;
            }

            this.sortAsc = asc;
            let sortFactor = asc ? 1 : -1;
            this.links?.sort((a, b) => (a.vote - b.vote) * sortFactor || b.lastVoteDate - a.lastVoteDate);
        },
        remove(link) {
            this.showDeleteConfirm(link.title).then(result => {
                if (!result) {
                    return;
                }

                this.deleteLink(link);
                this.links = this.getLinks();

                this.page = Math.min(this.page, this.pageCount);

                this.$toastr.s('removed.', link.title.toUpperCase());
            });
        },
        showDeleteConfirm(title) {
            const h = this.$createElement;
            const p1 = h('p', { class: ['mb-0', 'mt-2', 'text-secondary'] }, 'Do you want to remove:');
            const p2 = h('p', { class: ['mb-0', 'title'] }, title);

            return this.showConfirmModal([p1, p2], 'Remove Link');
        },
        vote(link) {
            this.updateLink(link);
            this.links = this.getLinks();
        },
    },
    computed: {
        filteredLinks() {
            let start = (this.page - 1) * this.pageSize;
            this.sort();
            return this.links?.slice(start, start + this.pageSize);
        },
        pageCount() {
            return Math.ceil(this.links.length / this.pageSize);
        },
    },
    created() {
        this.links = this.getLinks();
    },
};
</script>
