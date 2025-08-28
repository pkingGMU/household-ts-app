import AddVisitorTask from "./AddVisitorCard.tsx";
import ListVisitorCards from "./ListVisitorCards.tsx";
import { useState } from "react";
import type { VisitorCardType } from "./VisitorCard.tsx";

export default function VisitorManager() {
    const [cards, setCards] = useState<VisitorCardType[] | null>(null);

    const handleAddVisitorCard = () => {
        console.log("Adding Visitor Card");
        setCards([{ id: 1, text: "Bruh", img: "" }]);
    };

    return (
        <>
            <AddVisitorTask onSubmit={handleAddVisitorCard} />
            <ListVisitorCards cards={cards} />
        </>
    );
}
