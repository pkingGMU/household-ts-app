import { useState } from "react";

export default function UploadImage() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    return (
        <>
            <div>
                {selectedImage && (
                    <img
                        width="200"
                        height="200"
                        src={URL.createObjectURL(selectedImage)}
                    />
                )}
            </div>
            <input
                type="file"
                name="uploadedImage"
                onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                        console.log(file);
                        setSelectedImage(file);
                    }
                }}
            />{" "}
        </>
    );
}
