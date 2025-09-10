import { BACKEND_URL } from "@/config/config";
import axios from "axios";
import { useEffect, useState } from "react";
export function useContent() {
  const [contents, setContents] = useState([]);

  function refresh() {
    axios
      .get(`${BACKEND_URL}/api/v1/contents`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // Ensure we're getting the array of contents
        const contentData =
          response.data.content || response.data.contents || [];
        setContents(contentData);
      })
      .catch((error) => {
        console.error("Error fetching contents:", error);
        setContents([]);
      });
  }

  useEffect(() => {
    refresh();
  }, []);

  return { contents, refresh };
}
