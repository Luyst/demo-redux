import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNotesAsync } from "./redux/note";
import { AppDispatch } from "./redux/store";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>(); // Khai báo dispatch với kiểu AppDispatch

    useEffect(() => {
        // Gọi fetchNotesAsync khi component được mount
        dispatch(fetchNotesAsync());
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">
                    Notes App
                </h1>
            </header>
            <main className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                <AddNote />
                <div className="mt-6">
                    <NoteList />
                </div>
            </main>
        </div>
    );
};

export default App;
