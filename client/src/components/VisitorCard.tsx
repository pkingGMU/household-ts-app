export interface VisitorCardType {
    id: number;
    img: string;
    text: string;
}

export default function VisitorCard({ id, text, img }: VisitorCardType) {
    return (
        <>
            <div className="VisitorCard">
                <p>{`Visitor ${id}:`}</p> <p>{text}</p>
                {img && <img src={img} />}
            </div>
        </>
    );
}
