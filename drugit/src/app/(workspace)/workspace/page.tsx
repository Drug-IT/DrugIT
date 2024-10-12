"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [value, setValue] = useState("");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch("./api/groq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: value }),
      });
      const data = await res.json();
      setAiResponse(data.content);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setValue("");
    }
  };
  return (
    <div className="relative flex space-between w-full h-full flex-col rounded-xl p-4">
      <Image
        src="/reactivy.png"
        width={350}
        height={350}
        alt="Picture of the author"
      />
      <h1 className="text-4xl text-">What can I ask ?</h1>
      <div className="flex-1" />
      {aiResponse && (
        <div className="mt-4 p-4 w-5/6 bg-white border rounded-lg">
          <p className="text-gray-600 max-h-200 overflow-y-auto text-xl">
            {aiResponse}
          </p>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="relative w-full mt-20 flex items-center overflow-hidden rounded-lg border bg-background"
      >
        <Textarea
          id="content"
          placeholder="Ask me something..."
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0 text-xl"
        />
        <div className="flex items-right p-3">
          <Button
            type="submit"
            size="sm"
            className={`${
              isLoading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-400 hover:bg-red-500"
            } text-white px-4 py-2 rounded-lg focus:outline-none text-sm sm:text-base`}
          >
            {isLoading ? "Loading..." : "Submit"}
            {isLoading ? (
              <LoaderCircle className="size-3.5" />
            ) : (
              <Send className="size-3.5" />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
