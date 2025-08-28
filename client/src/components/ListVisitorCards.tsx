import VisitorCard from "./VisitorCard.tsx";
import type { VisitorCardType } from "./VisitorCard.tsx";

const cards: VisitorCardType[] = [
    { id: 1, text: "Henlo", img: "" },
    { id: 2, text: "Bruh", img: "" },
];

export default function ListVisitorCards() {
    return (
        <>
            <ul>
                {cards.map((visitor) => (
                    <li key={visitor.id}>
                        <VisitorCard {...visitor} />
                    </li>
                ))}
            </ul>
        </>
    );
}
