import {DayService} from "@/entities/day";
import DayList from "@/features/DayList";

export default async function CalendarPage() {
    const days = await DayService.getAllDays();

    return (
        <div className="">
            <main className="">
                <DayList days={days}/>
            </main>
        </div>
    );
}
