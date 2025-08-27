import { useState, useEffect } from "react";
import UploadImage from "./UploadImage.tsx";
export default function TaskManager() {
    interface VisitorEntry {
        id: number;
        text: string;
        icon: string;
        background: string;
    }

    return (
        <>
            <h2>Hello From Visitor Manager</h2>
            <UploadImage />
        </>
    );
}
