// import { link } from '@/base/model';

var baseComponent = {
    data() {
        return {
            // links: [],
        };
    },
    methods: {
        showConfirmModal(message, title) {
            return this.$bvModal.msgBoxConfirm(message, {
                id: 'alert-modal',
                title: title,
                bodyClass: 'confirm-body text-center',
                headerClass: 'confirm-header bg-dark rounded-0 text-white p-2 align-items-center',
                titleClass: 'confirm-title',
                contentClass: 'confirm-content rounded-0 bg-link border border-vote',
                footerClass: 'confirm-footer border-0 justify-content-center flex-row-reverse flex-nowrap',
                okVariant: 'dark',
                cancelVariant: 'dark',
                cancelTitle: 'CANCEL',
                hideHeaderClose: false,
                centered: true,
            });
        },
        getLinks() {
            let links = JSON.parse(localStorage.getItem('Links') || null) || [];

            return links.map(link => {
                link.createDate = new Date(link.createDate);
                link.lastVoteDate = new Date(link.lastVoteDate);

                return link;
            });
        },
        addLink(link) {
            let links = this.getLinks();
            let isExist = links.some(x => x.url == link.url || x.title == link.title);

            if (isExist) {
                return false;
            }

            link.createDate = new Date();
            link.lastVoteDate = this.link.createDate;
            links.push(link);
            this.setLinks(links);

            return true;
        },
        deleteLink(link) {
            let links = this.getLinks();

            let index = links.findIndex(x => {
                return x.title == link.title && x.url == link.url;
            });

            links.splice(index, 1);

            this.setLinks(links);
        },
        updateLink(link) {
            let links = this.getLinks();
            let index = links.findIndex(x => {
                return x.title == link.title && x.url == link.url;
            });

            links[index] = link;
            this.setLinks(links);
        },
        setLinks(links) {
            localStorage.setItem('Links', JSON.stringify(links));
        },
    },
    // watch: {
    //     links: {
    //         handler(value) {
    //             localStorage.setItem('Links', JSON.stringify(value));
    //         },
    //         deep: true,
    //     },
    // },
    created() {
        // this.links = JSON.parse(localStorage.getItem('Links') || null) || [];
        // let a = this.links.map(link => {
        //     link.createDate = new Date(link.createDate);
        //     link.lastVoteDate = new Date(link.lastVoteDate);
        //     return link;
        // });
        // console.log(a);
    },
};

export default baseComponent;
