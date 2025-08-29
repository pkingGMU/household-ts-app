export interface VisitorCardType {
    id: number;
    imgUrl: string;
    text: string;
}

export default function VisitorCard({ id, text, imgUrl }: VisitorCardType) {
    console.log(imgUrl);

    return (
        <>
            <div className="VisitorCard">
                <p>{`Visitor ${id}:`}</p> <p>{text}</p>
                <p>{imgUrl}</p>
                {imgUrl && <img src={imgUrl} />}
            </div>
        </>
    );
}
