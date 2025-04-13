import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { DocumentIcon } from "../icons/Documenticon"; // ✅ Add this
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
    Document = "document" // ✅ Added
}

export function CreateContentModal({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });

        onClose();
    }

    return <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center" />
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded fixed">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon onClick={onClose} />
                            </div>
                        </div>
                        <div>
                            <Input reference={titleRef} placeholder={"Title"} />
                            <Input reference={linkRef} placeholder={"Link"} />
                        </div>
                        <div>
                            <h1>Type</h1>
                            <div className="flex gap-2 justify-center pb-2">
                                <Button
                                    text="Youtube"
                                    startIcon={<DocumentIcon />}
                                    variant={type === ContentType.Youtube ? "primary" : "secondary"}
                                    onClick={() => setType(ContentType.Youtube)}
                                />
                                <Button
                                    text="Twitter"
                                    startIcon={<DocumentIcon />}
                                    variant={type === ContentType.Twitter ? "primary" : "secondary"}
                                    onClick={() => setType(ContentType.Twitter)}
                                />
                                <Button
                                    text="Document"
                                    startIcon={<DocumentIcon />}
                                    variant={type === ContentType.Document ? "primary" : "secondary"}
                                    onClick={() => setType(ContentType.Document)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addContent} variant="primary" text="Submit" startIcon={<DocumentIcon />} />
                        </div>
                    </span>
                </div>
            </div>
        </div>}
    </div>
}
