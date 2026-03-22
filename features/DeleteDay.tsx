"use client";

import {Trash2Icon} from "lucide-react";
import {DayService} from "@/entities/day";
import {JSX} from "react";
import {useRouter} from "next/navigation";

interface DeleteNoteProps {
    dayId: number;
}

export default function DeleteDay({ dayId }: DeleteNoteProps): JSX.Element {
    const router = useRouter();

    async function handleDeleteDayClick()  {
        await DayService.deleteDay(dayId);
        router.refresh();
    }

    return (
        <button onClick={handleDeleteDayClick}>
            <Trash2Icon color="lightgray" size={20} />
        </button>
    );
}