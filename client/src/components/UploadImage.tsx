type UploadImageProps = {
    selectImage: (file: File) => void;
    img: File | null;
};

export default function UploadImage({ selectImage, img }: UploadImageProps) {
    return (
        <>
            <div>
                {img && (
                    <img
                        width="200"
                        height="200"
                        src={URL.createObjectURL(img)}
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
