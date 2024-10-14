"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { LoaderCircle, MessageCircleQuestionIcon, Send } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "./chat/chat-bubble";
import { ChatInput } from "./chat/chat-input";
import { ChatMessageList } from "./chat/chat-message-list";
import CodeDisplayBlock from "./chat/code-display-block";

const queries = [
  "What are proteins ?",
  "What are molecules ?",
  "What is molecular docking ?",
  "What are ADMET values ?",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<any>([]);
  const [value, setValue] = useState("");

  const messagesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setMessages([...messages, value]);
    setValue("");
    try {
      setIsLoading(true);
      fetch("./api/groq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: value }),
      })
        .then((res) => res.json())
        .then((data) => {
          setMessages([...messages, value, data.content]);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <div className="flex items-center justify-items-stretch w-full h-full min-h-screen flex-col rounded-xl p-4">
      {messages.length === 0 ? (
        <>
          <Image
            src="/reactivy.png"
            width={350}
            height={350}
            alt="Picture of the author"
          />
          <h1 className="text-3xl text-primary">What can I ask ?</h1>

          <div className="py-8 lg:py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-10">
              {queries?.map((query, index) => (
                <Card key={index} onClick={() => setValue(query)}>
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="inline-flex justify-center items-center w-[48px] h-[48px] rounded-full border-2 bg-primary">
                      <MessageCircleQuestionIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{query}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </>
      ) : (
        <ChatMessageList ref={messagesRef}>
          {/* Messages */}
          {messages &&
            messages.map((message: string, index: number) => (
              <ChatBubble
                key={index}
                variant={index % 2 == 0 ? "sent" : "received"}
              >
                <ChatBubbleAvatar
                  src=""
                  fallback={index % 2 == 0 ? "👨🏽" : "🤖"}
                />
                <ChatBubbleMessage>
                  {message.split("```").map((part: string, index: number) => {
                    if (index % 2 === 0) {
                      return (
                        <Markdown key={index} remarkPlugins={[remarkGfm]}>
                          {part}
                        </Markdown>
                      );
                    } else {
                      return (
                        <pre className="whitespace-pre-wrap pt-2" key={index}>
                          <CodeDisplayBlock code={part} />
                        </pre>
                      );
                    }
                  })}
                </ChatBubbleMessage>
              </ChatBubble>
            ))}
          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar src="" fallback="🤖" />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      )}
      <div className="flex-1" />
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="relative bottom-4 left-1/2 transform -translate-x-1/2 w-full mt-10 flex items-center overflow-hidden rounded-lg border bg-background"
      >
        <ChatInput
          value={value}
          onKeyDown={onKeyDown}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          placeholder="Type your message here..."
          className="min-h-20 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
          <Button
            disabled={!value || isLoading}
            type="submit"
            size="lg"
            className="ml-auto gap-1.5"
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
