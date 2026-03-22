import {Day} from "@/types/day";
import Note from "@/types/note/Note";

export default interface NoteCreateRequest {
    text: string;
    parentNoteId: number | null;
}