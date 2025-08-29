export interface VisitorCardType {
    id: number;
    imgUrl: string;
    text: string;
    name: string;
    date: string;
}

export default function VisitorCard({
    id: _id,
    text,
    imgUrl,
    name,
    date,
}: VisitorCardType) {
    console.log(name);

    return (
        <>
            <div className="VisitorCard">
                <div className="Text">
                    <div className="Title">
                        <p>{name}</p>
                        <p>{date}</p>
                    </div>
                    <p className="Message">{text}</p>
                </div>
                {imgUrl && <img src={imgUrl} />}
            </div>
        </>
    );
}
