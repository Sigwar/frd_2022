import { defineStore } from 'pinia';
import { RootStore} from './global.types';

export const useGlobalStore = defineStore('globalStore', {
    state: () => ({
        lang: 'pl',
        token: ''
    } as RootStore),
    getters: {
        //Getters are just computed so we can not passed any params to them
        getLang: (state: RootStore): String => state.lang,
    },
    actions: {
        changeLanguage(payload: string) {
            this.lang = payload
        },
        setToken(payload: string): void {
            document.cookie = `fifaToken=${payload}; max-age=3600;`;
            this.token = payload;
        },
        logOut(): void {
            this.token = '';
            document.cookie = 'fifaToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        },
        setTokenFromCookie(): void {
            if(this.token === '') {
                const cookiesToken = document.cookie.replace('fifaToken=', '')
                if(cookiesToken !== '') {
                    this.token = cookiesToken;
                }
            }
        }
    },
});
