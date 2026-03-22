"use client";

import {Delete, DeleteIcon, RecycleIcon, Trash, TrashIcon} from "lucide-react";
import NoteService from "@/entities/note/NoteService";
import {useRouter} from "next/navigation";

interface DeleteNoteProps {
    noteId: number;
}

export default function DeleteNote({ noteId }: DeleteNoteProps) {
    const router = useRouter();

    async function handleDeleteNoteClick() {
        await NoteService.deleteNote(noteId);
        router.refresh();
    }

    return (
        <button onClick={handleDeleteNoteClick}>
            <TrashIcon size={18} color='lightgray'/>
        </button>
    )
}