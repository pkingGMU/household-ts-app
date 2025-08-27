import React, { useState } from "react";

export default function UploadImage() {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <>
            <input type="file" name="uploadedImage" />{" "}
        </>
    );
}
