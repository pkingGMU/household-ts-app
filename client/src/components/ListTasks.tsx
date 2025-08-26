type ListTaskProps = {
    tasks: {
        id: number;
        task: string;
    }[];
    handleClick: (itemId: number) => void;
};

export default function ListTasks({ tasks, handleClick }: ListTaskProps) {
    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} onClick={() => handleClick(task.id)}>
                        {task.task}
                    </li>
                ))}
            </ul>
        </>
    );
}
