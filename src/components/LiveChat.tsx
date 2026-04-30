import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

type Msg = { from: "bot" | "user"; text: string };

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"name" | "email" | "message" | "done">("name");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi! 👋 I'm Pauline's assistant. What's your name?" },
  ]);

  const reply = (text: string) =>
    setMsgs((m) => [...m, { from: "bot", text }]);
  const userSay = (text: string) =>
    setMsgs((m) => [...m, { from: "user", text }]);

  const handleSend = async () => {
    const value = input.trim();
    if (!value) return;
    userSay(value);
    setInput("");

    if (step === "name") {
      setName(value);
      setStep("email");
      setTimeout(() => reply(`Nice to meet you, ${value}! What's your email?`), 300);
    } else if (step === "email") {
      if (!z.string().email().safeParse(value).success) {
        setTimeout(() => reply("That doesn't look like a valid email. Try again?"), 300);
        return;
      }
      setEmail(value);
      setStep("message");
      setTimeout(() => reply("Great! What would you like to share with Pauline?"), 300);
    } else if (step === "message") {
      const parsed = schema.safeParse({ name, email, message: value });
      if (!parsed.success) {
        toast.error("Please check your details");
        return;
      }
      setSending(true);
      const { error } = await supabase
        .from("contact_messages")
        .insert({ ...parsed.data, source: "live_chat" });
      setSending(false);
      if (error) {
        setTimeout(() => reply("Something went wrong sending your message. Please try again."), 300);
        return;
      }
      setStep("done");
      setTimeout(
        () => reply("Got it! ✨ Pauline will reach out to you soon. Thanks for stopping by!"),
        300
      );
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open live chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[28rem] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-border bg-primary text-primary-foreground">
              <p className="font-semibold">Chat with Pauline</p>
              <p className="text-xs opacity-80">Usually replies within a day</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                      m.from === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                disabled={step === "done" || sending}
                placeholder={step === "done" ? "Conversation ended" : "Type a message..."}
                className="flex-1 px-3 py-2 rounded-full border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={step === "done" || sending || !input.trim()}
                aria-label="Send"
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
