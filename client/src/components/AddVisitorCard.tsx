import UploadImage from "./UploadImage";

type AddVisitorCardProps = {
    onSubmit: () => void;
};

export default function AddVisitorCard({ onSubmit }: AddVisitorCardProps) {
    return (
        <>
            <h3>Hello From Add Visitor Card Section</h3>
            <input type="text" placeholder="Add a message!" />
            <UploadImage />
            <button type="submit" onClick={onSubmit}>
                Submit
            </button>
        </>
    );
}
