type ListTaskProps = {
    tasks: {
        id: number;
        text: string;
    }[];
};

export default function ListTasks({ tasks }: ListTaskProps) {
    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
        </>
    );
}
