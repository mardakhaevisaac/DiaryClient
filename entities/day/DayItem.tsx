import {Day} from "@/types/day";
import {JSX} from "react";
import NoteList from "@/features/NoteList";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";

interface DayItemProps {
    day: Day;
    showNotes: boolean;
}

export default function DayItem({ day, showNotes }: DayItemProps): JSX.Element {
    return (
        <article>
            <div className="flex flex-row items-center gap-2">
                {showNotes && <Link href="/calendar">
                    <ChevronLeft/>
                </Link>}
                <p className="text-4xl">{day.date}</p>
            </div>
            {showNotes && <NoteList dayId={day.id} notes={day.notes}/>}
        </article>
    );
}