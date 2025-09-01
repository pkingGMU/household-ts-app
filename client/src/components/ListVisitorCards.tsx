import VisitorCard, { type VisitorCardType } from "./VisitorCard.tsx";
import { useAdmin } from "./AdminPanel.tsx";
type ListVisitorCardsProps = {
    cards: VisitorCardType[] | null;
    onDelete: (id: number) => void;
};
export default function ListVisitorCards({
    cards,
    onDelete,
}: ListVisitorCardsProps) {
    const { admin } = useAdmin();

    return (
        <>
            <ul>
                {cards &&
                    [...cards].reverse().map((visitor: any) => (
                        <li key={visitor.id}>
                            <VisitorCard {...visitor} />
                            {admin && (
                                <button onClick={() => onDelete(visitor.id)}>
                                    Delete
                                </button>
                            )}
                        </li>
                    ))}
            </ul>
        </>
    );
}
