import { useState } from "react";
import AddTask from "./AddTask.tsx";
import ListTasks from "./ListTasks.tsx";

let nextId = 2;

export default function TaskManager() {
    const [tasks, setTasks] = useState([{ id: 1, text: "text" }]);

    function handleAddTask(title: string) {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: title,
            },
        ]);
    }

    return (
        <>
            <h2>Task Manager</h2>
            <AddTask onAddTask={handleAddTask} />
            <ListTasks tasks={tasks} />
        </>
    );
}
