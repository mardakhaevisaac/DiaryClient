"use client";

import {Note} from "@/types/note";
import {JSX, useState} from "react";
import NoteList from "@/features/NoteList";
import DeleteNote from "@/features/DeleteNote";
import NoteForm from '@/features/NoteForm';

interface NoteItemProps {
    note: Note;
    dayId: number;
}

export default function NoteItem({ note, dayId }: NoteItemProps): JSX.Element {
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    return (
        <div className="m-2">
            <div className="flex gap-2 ml-5">
                <p className="indent-8"
                    onClick={() => setIsCreateOpen(!isCreateOpen)}>
                    ● {note.text}
                </p>
                <DeleteNote noteId={note.id} />
            </div>

            {isCreateOpen && (
                <NoteForm
                    closeInput={() => setIsCreateOpen(false)}
                    dayId={dayId}
                    parentNoteId={note.id}
                />
            )}

            {note.subNotes?.length > 0 && (
                <div className="ml-8">
                    <NoteList dayId={dayId} notes={note.subNotes} />
                </div>
            )}
        </div>
    );
}