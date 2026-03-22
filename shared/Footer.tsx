import {Copyright} from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t p-6 text-center bg-gray-800 text-white">
            <Copyright/> {new Date().getFullYear()} latte...Diary. Все права защищены.
        </footer>
    );
}