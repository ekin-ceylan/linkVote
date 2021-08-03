import { shallowMount } from '@vue/test-utils';
import Link from '@/components/Link.vue';
import { link } from '@/base/model';

describe('Link.vue', () => {
    it('props.value vote reactivity', () => {
        const l = new link();
        const wrapper = shallowMount(Link, {
            propsData: { value: l },
        });

        wrapper.vm.voteUp();
        expect(wrapper.vm.value.vote).toEqual(l.vote);
    });

    it('voteUp adds 1 to link', () => {
        const l = new link();
        const vote = l.vote;
        const wrapper = shallowMount(Link, {
            propsData: { value: l },
        });

        wrapper.vm.voteUp();
        expect(wrapper.vm.value.vote).toEqual(vote + 1);
    });

    it('voteDown subtract 1 from link', () => {
        const l = new link();
        const vote = l.vote;
        const wrapper = shallowMount(Link, {
            propsData: { value: l },
        });

        wrapper.vm.voteDown();
        expect(wrapper.vm.value.vote).toEqual(vote - 1);
    });
});
