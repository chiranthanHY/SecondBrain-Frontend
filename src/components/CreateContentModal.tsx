import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

// Define Props for Type Safety
interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({ open, onClose }: ModalProps) {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const linkRef = useRef<HTMLInputElement | null>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value?.trim();
        const link = linkRef.current?.value?.trim();

        if (!title || !link) {
            alert("Title and Link are required.");
            return;
        }

        try {
            await axios.post(
                `${BACKEND_URL}/api/v1/content`,
                { link, title, type },
                { headers: { Authorization: localStorage.getItem("token") } }
            );
            onClose();
        } catch (error) {
            console.error("Error adding content:", error);
            alert("Failed to add content. Please try again.");
        }
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            {/* Modal Overlay */}
            <div
                className="fixed inset-0 bg-gray-500 opacity-60"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
                {/* Close Button */}
                <div className="flex justify-end">
                    <button onClick={onClose} className="cursor-pointer">
                        <CrossIcon onClick={onClose} />
                    </button>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <Input reference={titleRef} placeholder="Title" />
                    <Input reference={linkRef} placeholder="Link" />

                    {/* Type Selection */}
                    <div>
                        <h1 className="text-lg font-semibold">Type</h1>
                        <div className="flex gap-2 justify-center">
                            <Button
                                text="YouTube"
                                variant={type === ContentType.Youtube ? "primary" : "secondary"}
                                onClick={() => setType(ContentType.Youtube)}
                                startIcon={undefined} // Pass undefined or optional prop
                            />
                            <Button
                                text="Twitter"
                                variant={type === ContentType.Twitter ? "primary" : "secondary"}
                                onClick={() => setType(ContentType.Twitter)}
                                startIcon={undefined} // Pass undefined or optional prop
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <Button
                            onClick={addContent}
                            variant="primary"
                            text="Submit"
                            startIcon={undefined} // Pass undefined or optional prop
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}