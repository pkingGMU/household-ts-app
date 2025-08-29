import UploadImage from "./UploadImage";
import { useState } from "react";
type AddVisitorCardProps = {
    onSubmit: (text: string, name: string, img: File) => void;
};

export default function AddVisitorCard({ onSubmit }: AddVisitorCardProps) {
    const [text, setText] = useState("");
    const [img, setImg] = useState<File | null>(null);
    const [name, setName] = useState("");

    const selectImage = (file: File) => {
        setImg(file);
    };

    return (
        <>
            <div className="AddVisitorCard">
                <input
                    type="text"
                    placeholder="Friend"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Add a message!"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <UploadImage img={img} selectImage={selectImage} />
                <button
                    type="submit"
                    onClick={() => {
                        img && onSubmit(text, name, img);
                        setText("");
                        setName("");
                        setImg(null);
                    }}
                >
                    Submit
                </button>
            </div>
        </>
    );
}
