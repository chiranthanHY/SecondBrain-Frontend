import { useState, useEffect } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { DocumentIcon } from "../icons/Documenticon";

type ContentType = "youtube" | "twitter" | "document";

interface CardProps {
  title: string;
  link: string;
  type: ContentType;
}

export function Card({ title, link, type }: CardProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (type === "twitter") {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [type]);

  if (!isVisible) return null;

  const getYoutubeEmbedUrl = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div className="p-4 bg-white rounded-2xl border border-gray-200 max-w-80 min-w-72 shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex items-center text-base font-medium text-gray-800">
          <div className="text-gray-500 mr-2">
            {type === "youtube" && <YoutubeIcon />}
            {type === "twitter" && <TwitterIcon />}
            {type === "document" && <DocumentIcon />}
          </div>
          <span className="line-clamp-2">{title}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ShareIcon />
          </a>
          <button onClick={() => setIsVisible(false)}>
            <CrossIcon onClick={() => setIsVisible(false)} />
          </button>
        </div>
      </div>

      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            className="w-full aspect-video rounded-md"
            src={getYoutubeEmbedUrl(link)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}

        {type === "document" && (
          <div className="border p-3 rounded-md bg-gray-50 text-gray-600 text-sm text-center">
            <a href={link} target="_blank" rel="noopener noreferrer" className="underline font-medium">
              View Document
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
