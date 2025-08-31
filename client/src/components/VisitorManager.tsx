import AddVisitorCard from "./AddVisitorCard.tsx";
import ListVisitorCards from "./ListVisitorCards.tsx";
import { useState, useEffect } from "react";
import type { VisitorCardType } from "./VisitorCard.tsx";

export default function VisitorManager() {
    const [cards, setCards] = useState<VisitorCardType[]>([]);
    useEffect(() => {
        let active = true;

        const fetchLoop = async () => {
            await fetchTasks();
            if (active) {
                setTimeout(fetchLoop, 5000);
            }
        };

        fetchLoop();
        return () => {
            active = false;
        };
    }, []);

    const fetchTasks = async () => {
        const res = await fetch("/api/visitors");
        const data = await res.json();
        setCards(data);
        console.log(data);
    };

    const handleAddVisitorCard = async (
        visitorText: string,
        visitorName: string,
        visitorImg: File,
    ) => {
        console.log("Adding Visitor Card");

        const formData = new FormData();
        formData.append("eventImage", visitorImg);
        formData.append("text", visitorText);
        formData.append("name", visitorName);
        console.log(formData);
        await fetch("/api/visitors", {
            method: "POST",
            body: formData,
        });
        fetchTasks();
    };

    const handleDeleteVisitorCard = async (id: number) => {
        console.log(`Deleting: ${id}`);
        if (cards.length > 0) {
            setCards((prevCards) => prevCards.filter((t) => t.id !== id));
        }
        console.log("Clicked Task");
        await fetch(`api/visitors/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        fetchTasks();
    };

    return (
        <>
            <AddVisitorCard onSubmit={handleAddVisitorCard} />
            <ListVisitorCards
                cards={cards}
                onDelete={handleDeleteVisitorCard}
            />
        </>
    );
}
