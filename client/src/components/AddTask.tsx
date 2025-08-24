import { useEffect, useState } from "react";
import ListTasks from "./ListTasks";

type AddTaskProps = {
    onAddTask: (title: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
    const [title, setTitle] = useState("");

    return (
        <>
            <input
                placeholder="Add Task"
                onChange={(e) => setTitle(e.target.value)}
            />

            <button
                onClick={() => {
                    setTitle("");
                    onAddTask(title);
                }}
            >
                Add
            </button>
        </>
    );
}
