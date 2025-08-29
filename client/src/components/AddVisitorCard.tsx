import UploadImage from "./UploadImage";
import { useState } from "react";
type AddVisitorCardProps = {
    onSubmit: (text: string, img: File) => void;
};

export default function AddVisitorCard({ onSubmit }: AddVisitorCardProps) {
    const [text, setText] = useState("");
    const [img, setImg] = useState<File | null>(null);

    const selectImage = (file: File) => {
        setImg(file);
    };

    return (
        <>
            <h3>Hello From Add Visitor Card Section</h3>
            <input
                type="text"
                placeholder="Add a message!"
                onChange={(e) => setText(e.target.value)}
            />
            <UploadImage selectImage={selectImage} />
            <button
                type="submit"
                onClick={() => {
                    img && onSubmit(text, img);
                }}
            >
                Submit
            </button>
        </>
    );
}
