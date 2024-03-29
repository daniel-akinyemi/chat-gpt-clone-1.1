"use client";

type Props = {
  chatId: string;
};

import useSWR from 'swr'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import ModelSelection from "./ModelSelection";

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setprompt] = useState("");
  const { data: session } = useSession();

//   const {data:model } = useSWR('model',{
//     fallbackData: 'text-davinci-003'
// })

const model = 'text-davinci-003'


  const sendMessage = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (!prompt)return;

    const input = prompt.trim();
    setprompt('');
    const message: Message={
        text:input,
        createdAt: serverTimestamp(),
        user:{
            _id:session?.user?.email!,
            name:session?.user?.name!,
            avatar:session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
        }
    }

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message
      )
// Toast notification to say loading!
      const notification = toast.loading('ChatGPT is thinking...')

      await fetch('/api/askQuestion',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          prompt:input, chatId, model, session,
        }),

      }).then(()=> {
        toast.success('ChatGPT has responded',{
          id:notification,
        })

      });
  }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
      <form onSubmit={sendMessage}className="p-5 space-x-5 flex">
        <input
          type="text"
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => setprompt(e.target.value)}
          placeholder="Type your message here"
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11a37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div className="md:hidden">
      <ModelSelection/>
      </div>
    </div>
  );
};

export default ChatInput;
