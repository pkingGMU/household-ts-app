import { useState, useEffect } from "react";
import AddTask from "./AddTask.tsx";
import ListTasks from "./ListTasks.tsx";

export default function TaskManager() {
    const [tasks, setTasks] = useState([{ id: 1, task: "text" }]);

    useEffect(() => {
        fetchTasks();
        const interval = setInterval(fetchTasks, 5000);
        return () => clearInterval(interval);
    }, []);

    const fetchTasks = async () => {
        const res = await fetch("/api/tasks");
        const data = await res.json();
        setTasks(data);
    };

    const handleAddTask = async (title: string) => {
        await fetch("/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ task: title }),
        });
        fetchTasks();
    };

    const handleClick = () => {
        console.log("Clicked Task");
    };
    return (
        <>
            <h2>Task Manager</h2>
            <AddTask onAddTask={handleAddTask} />
            <ListTasks tasks={tasks} handleClick={handleClick} />
        </>
    );
}
