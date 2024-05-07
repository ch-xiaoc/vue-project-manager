import { defineStore } from "pinia";
import { ref } from "vue";

export const useWebStore = defineStore("web",()=>{
    const webClicks = ref(101)

    return {
        webClicks
    }

},{persist:true})