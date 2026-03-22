import axios from "axios";
import {Day} from "@/types/day";

const api = axios.create({
    baseURL: "https://diaryserver-production.up.railway.app/api/days",
});

export default class DayService {
    static async createDay(): Promise<Day> {
        const response = await api.post("");
        return response.data;
    }

    static async getAllDays(): Promise<Day[]> {
        const response = await api.get("");
        return response.data;
    }

    static async getDayById(id: number): Promise<Day> {
        const response = await api.get(`/${id}`);
        return response.data;
    }

    static async deleteDay(id: number): Promise<void> {
        await api.delete(`/${id}`);
    }
}