import { vegetables_data } from "./data";

export function load() {
    const currentMonth = new Date().getMonth();
    const data = vegetables_data[currentMonth];
    return data;
};
