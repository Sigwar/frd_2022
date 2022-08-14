import {defineStore} from "pinia";

export type RootStore = {
    lang: String;
};

export const useGlobalStore = defineStore('globalStore', {
    state: () => ({lang: 'en'} as RootStore),
    getters: {
        //Getters are just computed so we can not passed any params to them
        getLang: (state) => state.lang,
    },
    actions: {
        changeLanguage(payload: string) {
            this.lang = payload
        },
        changeLanguageShort: (state: RootStore, payload: string) => state.lang = payload,
    },
});
