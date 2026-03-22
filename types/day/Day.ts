import {Note} from "@/types/note";

export default interface Day {
    id: number;
    date: string;
    notes: Note[];
}