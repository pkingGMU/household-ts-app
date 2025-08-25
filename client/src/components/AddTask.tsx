import { useState } from "react";

type AddTaskProps = {
    onAddTask: (title: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
    const [title, setTitle] = useState("");

    return (
        <>
            <input
                placeholder="Add Task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button
                onClick={() => {
                    onAddTask(title);
                    setTitle("");
                }}
            >
                Add
            </button>
        </>
    );
}
