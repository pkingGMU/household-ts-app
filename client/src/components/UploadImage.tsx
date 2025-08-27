import React, { useState } from "react";

export default function UploadImage() {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <>
            <div>
                {selectedImage && (
                    <img src={URL.createObjectURL(selectedImage)} />
                )}
            </div>
            <input
                type="file"
                name="uploadedImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />{" "}
        </>
    );
}
