// components/Header.tsx
'use client';

import { useState } from 'react';
import {Calendar, HomeIcon, MenuIcon, MousePointerClick, NewspaperIcon} from "lucide-react";
import {DayService} from "@/entities/day";
import {useRouter} from "next/navigation";
import Link from "next/link";
import ThreadsPage from "@/app/threads/page";

export default function Header()  {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    async function handleCreateDayClick() {
        await DayService.createDay();
        setIsOpen(false);
        router.refresh();
    }

    return (
        <header className="sticky top-0 z-50 w-full shadow-xl bg-gray-800 p-3">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="font-bold text-xl text-white flex gap-4">
                    <img className="w-20 h-20 shadow-lg" src="/logopepe.png"/>
                    <p className="text-6xl">Diary</p>
                </div>

                {/* Десктопное меню */}
                <nav className="hidden md:flex gap-6 text-white font-medium">
                    <Link href="/" className="hover:text-blue-100 transition"><HomeIcon/></Link>
                    <p onClick={handleCreateDayClick} className="hover:text-blue-100 transition"><NewspaperIcon/></p>
                    <Link href="/calendar" className="hover:text-blue-100 transition"><Calendar/></Link>
                    <Link href="/threads" className="hover:text-blue-100 transition"><MenuIcon/></Link>
                </nav>

                {/* Кнопка Бургер */}
                <button
                    className="md:hidden p-2 text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-black p-4 shadow-xl animate-in fade-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-4 text-white font-medium">
                        <a className="flex flex-row gap-4" href="#" onClick={handleCreateDayClick}><NewspaperIcon/> Сегодня</a>
                        <Link className="flex flex-row gap-4" href="/calendar" onClick={() => setIsOpen(false)}><Calendar/> Календарь</Link>
                        <Link className="flex flex-row gap-4" href="/threads" onClick={() => setIsOpen(false)}><MenuIcon/> Треды</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};
