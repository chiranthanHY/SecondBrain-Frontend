import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function GeminiSidebar() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askGemini = async () => {
    setLoading(true);
    setResponse("");
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/gemini/ask`,
        { prompt: input },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setResponse(res.data.text);
    } catch (e) {
      console.error("Gemini error:", e);
      setResponse("⚠️ Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed top-0 left-72 right-0 z-50 bg-white shadow-md border-b border-gray-200 p-4 flex items-center gap-4">
      <input
        type="text"
        placeholder="Ask Gemini something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={askGemini}
        disabled={loading || input.trim() === ""}
        className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Ask"}
      </button>
      {response && (
        <div className="absolute top-full left-0 mt-2 bg-gray-50 border border-gray-200 p-4 rounded-md shadow max-w-2xl w-full z-40">
          <strong className="block text-gray-700 mb-1">Gemini:</strong>
          <p className="text-sm text-gray-800 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}
