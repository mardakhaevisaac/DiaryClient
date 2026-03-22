import {Day} from "@/types/day";
import {JSX} from "react";
import {DayItem} from "@/entities/day";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import DeleteDay from "@/features/DeleteDay";

interface DayListProps {
    days: Day[];
}

export default function DayList({ days }: DayListProps): JSX.Element {
    return (
        <section>
            {days.map(day => (
                <article key={day.id} className="flex flex-row gap-2 items-center">
                    <Link href={`/${day.id}`} className="flex flex-row gap-2 items-center">
                        <DayItem showNotes={false} key={day.id} day={day}/>
                        <ChevronRight className="px-auto"/>
                    </Link>
                    <DeleteDay dayId={day.id}/>
                </article>
            ))}
        </section>
    );
}