import {Note, NoteCreateRequest, NoteUpdateRequest} from "@/types/note";
import axios from "axios";

const api = axios.create({
    baseURL: "https://diaryserver-production.up.railway.app/api/notes",
});

export default class NoteService {
    static async createNote(dayId: number, request: NoteCreateRequest): Promise<Note> {
        const response = await api.post(`/${dayId}`, request);
        return response.data;
    }

    static async updateNote(id: number, request: NoteUpdateRequest): Promise<Note> {
        const response = await api.put(`/${id}`, request);
        return response.data;
    }

    static async deleteNote(id: number): Promise<void> {
        await api.delete(`/${id}`);
    }
}