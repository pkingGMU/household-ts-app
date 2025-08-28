import VisitorCard, { type VisitorCardType } from "./VisitorCard.tsx";
type ListVisitorCardsProps = {
    cards: VisitorCardType[] | null;
};
export default function ListVisitorCards({ cards }: ListVisitorCardsProps) {
    return (
        <>
            <ul>
                {cards &&
                    cards.map((visitor: any) => (
                        <li key={visitor.id}>
                            <VisitorCard {...visitor} />
                        </li>
                    ))}
            </ul>
        </>
    );
}
