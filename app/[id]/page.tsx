import {DayItem, DayService} from "@/entities/day";
import NoteForm from "@/features/NoteForm";

interface DayPageProps {
    params: {
        id: Promise<string>,
    };
}

export default async function DayPage({ params }: DayPageProps) {
    const { id } = await params;

    const day = await DayService.getDayById(Number(id));

    return (
        <div className="">
            <main className="">

                <DayItem showNotes={true} day={day}/>
                <NoteForm dayId={day.id} parentNoteId={null}/>
            </main>
        </div>
    );
}
