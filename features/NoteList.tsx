import {Note} from "@/types/note";
import { NoteItem } from "@/entities/note";

interface NoteListProps {
    dayId: number;
    notes: Note[];
}

export default function NoteList({ dayId, notes }: NoteListProps) {
    return (
        <section>
            {notes.map(note => (
                <article key={note.id}>
                    <NoteItem dayId={dayId} note={note}/>
                </article>
            ))}
        </section>
    );
}