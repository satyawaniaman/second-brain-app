import { X, FileText, ExternalLink, Twitter, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config/config";

interface CardProps {
  id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube" | "document";
  onDelete?: () => void;
}

export function Card({ id, title, link, type, onDelete }: CardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Load Twitter embed script
    if (type.toLowerCase() === "twitter") {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [type]);

  const getIconStyle = () => {
    switch (type) {
      case "youtube":
        return "text-red-500";
      case "twitter":
        return "text-blue-400";
      case "document":
        return "text-indigo-500";
      default:
        return "text-gray-500";
    }
  };

  const handleDelete = async () => {
    if (!id || isDeleting) return;

    try {
      setIsDeleting(true);
      await axios.delete(`${BACKEND_URL}/api/v1/contents`, {
        data: { contentId: id },
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      // Call the onDelete callback to refresh the parent component
      if (onDelete) {
        onDelete();
      }
    } catch (error) {
      console.error("Error deleting content:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="p-4 bg-white dark:bg-gray-800/90 rounded-lg border border-gray-200 dark:border-gray-700/50 w-full shadow-sm hover:shadow-md transition-shadow">
        <div className="justify-between flex">
          <div className="flex items-center text-md">
            <div className={`pr-2 ${getIconStyle()}`}>
              {type == "youtube" && <Youtube size={20} />}
              {type == "twitter" && <Twitter size={20} />}
              {type == "document" && <FileText size={20} />}
            </div>
            <div className="text-gray-900 dark:text-gray-200 text-lg font-medium truncate max-w-[180px]">
              {title}
            </div>
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-400 hover:text-blue-500 transition-colors">
              <a
                href={link}
                target="_blank"
                className="p-1.5 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="text-gray-400 hover:text-red-500 transition-colors">
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className={`p-1.5 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 ${isDeleting ? "opacity-50 cursor-not-allowed" : ""}`}
                title="Delete"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type.toLowerCase() === "youtube" &&
            (() => {
              const embedUrl = link.includes("youtu.be")
                ? `https://www.youtube.com/embed/${link.split("youtu.be/")[1].split("?")[0]}`
                : link.replace("watch", "embed").replace("?v=", "/");
              return (
                <div className="rounded-md overflow-hidden border border-gray-200 dark:border-gray-700/50">
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
                </div>
              );
            })()}
          {type.toLowerCase() === "twitter" && (
            <div className="rounded-md overflow-hidden border border-gray-200 dark:border-gray-700/50 p-2">
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}>{title}</a>
              </blockquote>
            </div>
          )}
          {type.toLowerCase() === "document" && (
            <div className="py-6 text-center">
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-800/30 transition-colors"
              >
                <FileText size={16} />
                <span>View Document</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
