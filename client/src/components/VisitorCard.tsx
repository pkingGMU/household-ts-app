export interface VisitorCardType {
    id: number;
    imgUrl: string;
    text: string;
}

export default function VisitorCard({
    id: _id,
    text,
    imgUrl,
}: VisitorCardType) {
    console.log(imgUrl);

    return (
        <>
            <div className="VisitorCard">
                <p>{`Message:`}</p> <p>{text}</p>
                {imgUrl && <img src={imgUrl} />}
            </div>
        </>
    );
}
