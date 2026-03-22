import {DayService} from "@/entities/day";
import DayList from "@/features/DayList";

export default async function Home() {
    const days = await DayService.getAllDays();

    return (
    <div className="">
      <main className="">
          <h1 className="m-4 text-xl font-bold">Главная страница(пока пусто)</h1>
        <img className="mx-auto" src="/kanyewest.png"/>
      </main>
    </div>
    );
}
