import type { RequestEvent } from "./$types";
import { vegetables_data } from "./data";

export function load() {
    const currentMonth = new Date().getMonth();
    const data = vegetables_data[currentMonth];
    return data;
};

export const actions = {
    create: async (params: RequestEvent) => {
        const data = await params.request.formData();
        //perform save
    },
    stroke: async (params: RequestEvent) => {
        const data = await params.request.formData();
        //perform stroke data.get('name')
    },
    delete: async (params: RequestEvent) => {
        const data = await params.request.formData();
        //perform delete data.get('name')
    }
};