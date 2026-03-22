"use client";

import {useState} from "react";
import {Note} from "@/types/note";
import {LucideSendHorizonal, SendHorizonal} from "lucide-react";
import NoteService from "@/entities/note/NoteService";
import {NoteCreateRequest} from "@/types/note";
import {useRouter} from "next/navigation";

interface NoteFormProps {
    dayId: number;
    parentNoteId: number | null;
    closeInput: () => void;
}

export default function NoteForm({ dayId, parentNoteId, closeInput }: NoteFormProps) {
    const [note, setNote] = useState<string>("");
    const router = useRouter();

    async function sendNote() {
        if (note.length < 3) {
            return;
        }

        await NoteService.createNote(dayId, { text: note, parentNoteId: parentNoteId })
        router.refresh();

        setNote("");

        if (parentNoteId !== null) {
            closeInput()
        }
    }

    return (
        <section className="flex items-end gap-2 w-full p-2">
            <textarea autoFocus={true}
                   value={note}
                   onChange={(e) => setNote(e.target.value)}
                   placeholder="Заметка" className="flex-1 w-full flex-grow outline-none bg-gray-100 p-2 m-2 h-20 resize-none "
            />
            <button onClick={sendNote}
            className="flex-none ">
                <SendHorizonal className="m-3"/>
            </button>
        </section>
    );
}