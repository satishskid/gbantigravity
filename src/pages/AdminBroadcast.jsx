import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Lock, AlertCircle, CheckCircle } from 'lucide-react';

export default function AdminBroadcast() {
    const [pin, setPin] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [statusMsg, setStatusMsg] = useState('');

    // A simple client-side lock for V1.
    // In production, we'd use real Auth, but this stops casual snooping.
    const ACCESS_PIN = "2049";

    const handleSend = async (e) => {
        e.preventDefault();

        if (pin !== ACCESS_PIN) {
            setStatus('error');
            setStatusMsg('Invalid Access PIN');
            return;
        }

        if (!message.trim()) return;

        setStatus('loading');

        try {
            // Call our new Netlify Function
            const res = await fetch('/.netlify/functions/telegram-broadcast', {
                method: 'POST',
                body: JSON.stringify({ message }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to send');

            setStatus('success');
            setStatusMsg('Message broadcasted cleanly to Telegram!');
            setMessage(''); // Clear box
        } catch (err) {
            setStatus('error');
            setStatusMsg(err.message);
        }
    };

    if (pin !== ACCESS_PIN) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pt-32">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <Lock size={24} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Restricted Access</h2>
                    <p className="text-sm text-gray-500 mb-6">Enter the GreyBrain Admin PIN to access the broadcast terminal.</p>
                    <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="Enter PIN"
                        className="w-full text-center text-2xl tracking-widest border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black mb-4"
                        autoFocus
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container max-w-2xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="bg-gray-900 p-8 text-white">
                        <div className="flex items-center gap-3 mb-2">
                            <Send className="text-blue-400" />
                            <h1 className="text-2xl font-bold font-heading">Neural Link</h1>
                        </div>
                        <p className="text-gray-400 text-sm">Broadcast signals directly to the @greybrainsoai channel.</p>
                    </div>

                    <div className="p-8">
                        <form onSubmit={handleSend} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Transmission Message
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your announcement here... (Supports HTML like <b>bold</b>)"
                                    className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm leading-relaxed"
                                ></textarea>
                                <p className="text-xs text-gray-400 mt-2 text-right">
                                    {message.length} chars
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    {status === 'loading' && <span className="text-blue-600 flex items-center gap-2"><div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div> Transmitting...</span>}
                                    {status === 'success' && <span className="text-green-600 flex items-center gap-2"><CheckCircle size={16} /> {statusMsg}</span>}
                                    {status === 'error' && <span className="text-red-600 flex items-center gap-2"><AlertCircle size={16} /> {statusMsg}</span>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading' || !message.trim()}
                                    className="btn bg-gray-900 text-white px-8 py-3 rounded-xl hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    <Send size={18} />
                                    Broadcast
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="bg-gray-50 p-6 border-t border-gray-100">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Recent Signals</h4>
                        <div className="text-sm text-gray-500 italic">
                            No history available in this session.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
