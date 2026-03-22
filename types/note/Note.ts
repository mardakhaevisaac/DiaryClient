import {Day} from "@/types/day";

export default interface Note {
    id: number;
    text: string;
    day: Day;
    parentNote: Note;
    subNotes: Note[];
}