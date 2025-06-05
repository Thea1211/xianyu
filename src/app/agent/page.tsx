'use client';
import { useState } from 'react';

export default function AgentPage() {
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    const botMessage = { from: 'bot', text: '您好！您的消息已收到，我们会尽快回复。' };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-400">智能客服</h1>
        <div className="border rounded p-4 h-80 overflow-y-auto mb-4 bg-white dark:bg-gray-900">
          {messages.map((m, idx) => (
            <div key={idx} className={`mb-2 ${m.from === 'user' ? 'text-right' : 'text-left'}`}> 
              <span className={`inline-block px-3 py-1 rounded ${m.from === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                {m.text}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            className="flex-grow border rounded-l px-3 py-2 focus:outline-none text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="请输入您的问题..."
          />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-r">
            发送
          </button>
        </form>
      </div>
    </div>
  );
}
