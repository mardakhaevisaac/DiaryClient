export default function Sidebar() {
    return (
        <aside className="w-full md:w-64 bg-gray-50 p-4 border-r">
            <ul className="space-y-2">
                <li className="hover:text-blue-500 cursor-pointer">Категория 1</li>
                <li className="hover:text-blue-500 cursor-pointer">Категория 2</li>
            </ul>
        </aside>
    );
}