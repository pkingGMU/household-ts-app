import VisitorCard, { type VisitorCardType } from "./VisitorCard.tsx";
type ListVisitorCardsProps = {
    cards: VisitorCardType[] | null;
    onDelete: (id: number) => void;
};
export default function ListVisitorCards({
    cards,
    onDelete,
}: ListVisitorCardsProps) {
    return (
        <>
            <ul>
                {cards &&
                    [...cards].reverse().map((visitor: any) => (
                        <li key={visitor.id}>
                            <VisitorCard {...visitor} />
                            <button onClick={() => onDelete(visitor.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
            </ul>
        </>
    );
}
