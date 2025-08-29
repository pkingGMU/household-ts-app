import { useState } from "react";

type UploadImageProps = {
    selectImage: (file: File) => void;
    selectedImage: File | null;
};

export default function UploadImage({
    selectImage,
    selectedImage,
}: UploadImageProps) {
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
                        selectImage(file);

                    }
                }}
            />{" "}
        </>
    );
}
