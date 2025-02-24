import { CrossIcon } from "../icons/CrossIcon";
import { DocumentIcon } from "@/icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { useEffect } from 'react';

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube"| "document";
}

export function Card({ title, link, type }: CardProps) {
  useEffect(() => {
    // Load Twitter embed script
    if (type.toLowerCase() === 'twitter') {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [type]);
  return (
    <div className="h-full">
      <div className="p-4 bg-white rounded-md border-gray-200 border h-full w-full">
        <div className="justify-between flex">
          <div className="flex items-center text-md">
            <div className="text-grey-500 pr-2">
              {type == "youtube" && <YoutubeIcon />}
              {type == "twitter" && <TwitterIcon />}
              {type == "document" && <DocumentIcon />}
            </div>
            <div className="text-black text-lg font-medium " >
              {title}
            </div>
            
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-500">
              <CrossIcon />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type.toLowerCase() === "youtube" && (() => {
            const embedUrl = link.includes('youtu.be')
              ? `https://www.youtube.com/embed/${link.split('youtu.be/')[1].split('?')[0]}`
              : link.replace("watch", "embed").replace("?v=", "/");
            console.log('Original link:', link);
            console.log('Embed URL:', embedUrl);
            return (
              <iframe
                width="100%"
                height="250"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            );
          })()}
          {type.toLowerCase() === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}>{title}</a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
