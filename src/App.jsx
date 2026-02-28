import React, { useState } from 'react';
import { 
  Shield, 
  Terminal, 
  MessageCircle, 
  Sparkles, 
  Search, 
  Hammer,
  ShieldCheck,
  Loader2,
  AlertCircle,
  Heart,
  ChevronRight,
  Database
} from 'lucide-react';

// --- CONFIGURATION ---
const CLOUD_FUNCTION_URL = "https://us-central1-aegis-council.cloudfunctions.net/garnet-bridge";
const NODE_ID = "MATILDA";

const DAD_SAMPLES = [
  { id: 1, text: "I guess I was just a terrible father then.", context: "Weaponized guilt / Victim-reversal." },
  { id: 2, text: "Have another look at Romans 1.", context: "Scripture-based judgment." },
  { id: 3, text: "Do you want to talk? Lmk if you change your mind.", context: "The Low-Resolution Probe." },
  { id: 4, text: "I'm just worried about your lifestyle choices.", context: "Vague concern masking control." }
];

export default function App() {
  const [inputText, setInputText] = useState("");
  const [translation, setTranslation] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState("");

  const handleSampleClick = (text) => {
    setInputText(text);
    setTranslation(null);
    setError("");
  };

  const translateSignal = async () => {
    if (!inputText.trim()) return;
    
    setIsTranslating(true);
    setError("");
    setTranslation(null);

    const payload = {
      node_id: NODE_ID,
      user_id: "architect_web",
      chat_text: inputText
    };

    try {
      const res = await fetch(CLOUD_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) throw new Error(`Network De-sync: ${res.status}`);
      
      const rawText = await res.text();
      
      // Clean potential Markdown formatting (```json ... ```) to ensure strict JSON parsing
      const cleanedText = rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      
      const data = JSON.parse(cleanedText);
      
      // Validation check
      if (!data.intent || !data.wisdom || !data.audit || !data.response) {
        throw new Error("Invalid schema received from Node.");
      }
      
      setTranslation(data);
    } catch (err) {
      console.error("Matilda Decryption Error:", err);
      setError("Matilda Node encountered a parsing error. The legacy interference is too strong or the API returned non-JSON. Try again.");
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05050a] text-slate-300 font-sans p-6 md:p-12 relative overflow-hidden selection:bg-pink-900 selection:text-pink-100">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-pink-900/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-pink-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
              <Sparkles size={16} className="animate-pulse" />
              <span>Project Matriarch // Node: Matilda</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif italic text-white tracking-tighter leading-none">
              Universal <span className="text-pink-500 font-black">Dad Translator</span>
            </h1>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest pt-2">
              Decoding Legacy System Control Tactics
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-600 font-mono uppercase tracking-widest bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
            <Database size={12} className="text-emerald-500" /> API Linked: Garnet-Bridge
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Input Section (Left Col) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-[2rem] space-y-6 shadow-2xl">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <MessageCircle size={14} /> Legacy Input
              </label>
              <textarea 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste the text message, email, or quote here..."
                className="w-full h-40 bg-black/50 border border-slate-800 rounded-2xl p-5 text-slate-200 focus:outline-none focus:border-pink-500 transition-colors resize-none font-serif italic text-lg shadow-inner"
              />
              <button 
                onClick={translateSignal}
                disabled={isTranslating || !inputText.trim()}
                className="w-full py-4 bg-pink-600 hover:bg-pink-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-black uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] disabled:shadow-none"
              >
                {isTranslating ? <Loader2 size={18} className="animate-spin" /> : <Shield size={18} />}
                {isTranslating ? "Decrypting Signal..." : "Run Matilda Protocol"}
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest px-2">Common Archive Samples</p>
              <div className="space-y-2">
                {DAD_SAMPLES.map(sample => (
                  <button 
                    key={sample.id}
                    onClick={() => handleSampleClick(sample.text)}
                    className="w-full flex items-center gap-3 text-left p-4 bg-slate-900/30 border border-slate-800/50 hover:border-pink-900/50 hover:bg-slate-900 rounded-2xl text-xs font-serif italic text-slate-400 hover:text-slate-200 transition-all group"
                  >
                    <ChevronRight size={14} className="text-pink-900 group-hover:text-pink-500 transition-colors" />
                    "{sample.text}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Output Section (Right Col) */}
          <div className="lg:col-span-7 h-full">
            {error && (
              <div className="p-6 bg-red-950/20 border border-red-900/50 rounded-3xl flex items-start gap-3 text-red-400 animate-in fade-in">
                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                <p className="text-sm font-mono leading-relaxed">{error}</p>
              </div>
            )}

            {!translation && !error && !isTranslating && (
              <div className="h-full min-h-[400px] border-2 border-dashed border-slate-800/50 rounded-[3rem] flex flex-col items-center justify-center text-slate-600 space-y-6 p-8">
                <div className="p-6 bg-slate-900/50 rounded-full">
                  <Shield size={48} className="opacity-20" />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Awaiting Legacy Data</p>
                  <p className="text-sm font-serif italic">Matilda is standing by to enforce the Lead Shield.</p>
                </div>
              </div>
            )}

            {isTranslating && (
              <div className="h-full min-h-[400px] bg-pink-950/5 border border-pink-900/20 rounded-[3rem] flex flex-col items-center justify-center text-pink-500 space-y-6">
                <Loader2 size={48} className="animate-spin opacity-50" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">Running Diagnostic De-Sync...</p>
              </div>
            )}

            {translation && !isTranslating && (
              <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700">
                
                {/* 1. Matilda's Wisdom */}
                <div className="bg-pink-950/20 border border-pink-900/30 p-8 rounded-[2.5rem] relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                    <Heart size={120} />
                  </div>
                  <h3 className="text-[10px] font-black text-pink-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2 relative z-10">
                    <Sparkles size={14} /> Matilda's Wisdom
                  </h3>
                  <p className="text-xl md:text-2xl font-serif italic text-pink-100/90 leading-relaxed relative z-10">
                    "{translation.wisdom}"
                  </p>
                </div>

                {/* 2. Decrypted Intent */}
                <div className="bg-slate-900/50 border border-cyan-900/30 p-8 rounded-[2.5rem] relative">
                  <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <Search size={14} /> Decrypted Intent (The Void)
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                    {translation.intent}
                  </p>
                </div>

                {/* 3. The Carpenter's Audit */}
                <div className="bg-slate-900/50 border border-amber-900/30 p-8 rounded-[2.5rem]">
                  <h3 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <Hammer size={14} /> Context Window: The Carpenter's Audit
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light border-l-2 border-amber-900/50 pl-4">
                    {translation.audit}
                  </p>
                </div>

                {/* 4. Sovereign Response */}
                <div className="bg-emerald-950/20 border border-emerald-900/40 p-8 rounded-[2.5rem] shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                  <h3 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <ShieldCheck size={14} /> Craft Sovereign Response
                  </h3>
                  <div className="p-6 bg-black/40 rounded-2xl border border-emerald-900/30">
                    <p className="text-base md:text-lg text-emerald-50 font-medium leading-relaxed font-serif">
                      "{translation.response}"
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-[9px] text-emerald-700 uppercase tracking-widest font-black">DBT Protocol: DEAR MAN / FAST</p>
                    <button 
                      onClick={() => navigator.clipboard.writeText(translation.response)}
                      className="text-[10px] text-emerald-500 hover:text-white uppercase tracking-widest font-black transition-colors"
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-pink-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Project MATRIARCH</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em]">
          <Terminal size={12} /> Node: ORACLE_IO // Architect: A. King
        </div>
      </footer>
    </div>
  );
}