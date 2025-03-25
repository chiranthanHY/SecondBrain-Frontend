import { CrossIcon } from "../icons/CrossIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon"; // Import YoutubeIcon

import { TwitterIcon } from "../icons/TwitterIcon"; // Import TwitterIcon


interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

import { useState } from "react";

export function Card({ title, link, type }: CardProps) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        console.log("CrossIcon clicked"); // Debugging log
        setIsVisible(false);
    };


    if (!isVisible) return null;


    return <div>
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72  border min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        {type === "youtube" ? <YoutubeIcon /> : <TwitterIcon />} 

                    </div>


                    {title}

                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                    <a href={link} target="_blank" rel="noopener noreferrer">

                            <ShareIcon />
                        </a>
                    </div>
                    <div className="text-gray-500">
                        <CrossIcon onClick={handleClose} />

                    </div>
                </div>
            </div>

            <div className="pt-4">
                {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>

        </div>
    </div>
}