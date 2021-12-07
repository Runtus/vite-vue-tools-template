import { defineStore } from 'pinia';

export const useStore = defineStore('count', {
    state: () => {
        return {
            count: 0,
        };
    },
});
