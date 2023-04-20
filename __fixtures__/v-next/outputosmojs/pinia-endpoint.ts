/**
* This file and any referenced files were automatically generated by @osmonauts/telescope@latest
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/


import { defineStore } from "pinia";
import type { LCDClient } from '@osmonauts/lcd';

export const useEndpoint = defineStore('pinia.endpoint', {
    state: () => {
        return {
            restClient: {} as LCDClient,
        }
    },
    actions: {
        setRestClient(client: LCDClient) {
            this.restClient = client
        }
    }
})
