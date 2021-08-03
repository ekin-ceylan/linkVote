<template lang="pug">
    .container.mt-4
        .row
            .col-12
                router-link(to="/")
                    i.fas.fa-arrow-left.mr-2
                    | Return to List

        b-form#add-link-form(@submit.prevent="add").row
            h1.col-12.text-center.text-md-left.my-4 Add New Link

            b-form-group.col-12(label="Link Name:" label-for="title" label-class="pl-2 ml-1")
                input#title.form-control(name="title" v-model="link.title" placeholder="e.g. Alphabet" @invalid="validate" @blur="validate" data-name="Link Name" required)
            b-form-group.col-12(label="Link URL:" label-for="url" label-class="pl-2 ml-1")
                input#url.form-control(name="url" v-model="link.url" placeholder="e.g. http://abc.xyz" @invalid="validate" @blur="validate" data-name="Link URL" required pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})")
            .col-12.text-center.text-md-right.my-3
                b-button#btn-submit-link.px-5.font-weight-bold(type="submit" pill variant="dark") ADD

</template>

<script>
import baseComponent from '@/base/mixins';
import { link } from '@/base/model';

export default {
    name: 'Add',
    mixins: [baseComponent],
    methods: {
        validate(e) {
            let el = e.target;

            let validity = el.validity;
            let name = el.getAttribute('data-name');
            let errorMessage = '';

            if (validity.valueMissing) {
                errorMessage = name + ' is required.';
            } else if (validity.patternMismatch || validity.typeMismatch) {
                errorMessage = 'Please, enter a valid ' + name + '.';
            }

            errorMessage ? el.classList.add('invalid') : el.classList.remove('invalid');

            el.setCustomValidity(errorMessage);
        },
        add() {
            let result = this.addLink(this.link);

            result
                ? this.$toastr.s('added.', this.link.title.toUpperCase()) //
                : this.$toastr.w('is already added.', this.link.title.toUpperCase());
        },
    },
    data() {
        return {
            link: new link(),
        };
    },
    created() {},
};
</script>
