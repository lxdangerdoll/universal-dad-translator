import React, { useState, useEffect } from 'react';
import { 
  RefreshCw, Zap, Shield, Heart, Terminal, 
  MessageCircle, ArrowRight, User, Cpu,
  Search, Info, Sparkles, Book, Wand2, Star
} from 'lucide-react';

/**
 * PROJECT MATILDA: MARK I
 * The Universal Dad Translator
 * Lead Architect: Alexa Jacobsen King
 */

const DAD_SAMPLES = [
  { id: 1, text: "Have another look at Romans 1.", context: "Scripture-based judgment/admonition." },
  { id: 2, text: "I'm just worried about your lifestyle choices.", context: "Vague concern masking control." },
  { id: 3, text: "When are you going to get a real job?", context: "Economic/social policed status." }
];

const App = () => {
  const [inputText, setInputText] = useState("");
  const [translation, setTranslation] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [skin, setSkin] = useState('POKEMON'); // POKEMON or MYSPACE

  const handleTranslate = () => {
    setIsTranslating(true);
    // Simulation of the AI Interpreter Layer
    setTimeout(() => {
      setTranslation({
        intent: "Father is attempting to use 'Traditional Authority' to bypass a vulnerable conversation. He is huddling in the 'Emotion Mind' of the simulation to avoid recognizing your autonomy.",
        context: inputText.includes("Romans 1") 
          ? "Romans 1:24-25 refers to theological judgment. He is weaponizing the 'Created Thing' (The Ink) against the 'Creator' (Your Living Breath)." 
          : "He is projecting 'Administrative Noise' to maintain a hierarchy that no longer renders in the 2087 Sanctuary.",
        carpenter: "The Carpenter says: He who worships the Ink more than the Daughter has already lost the Truth. Do not be afraid; your heart is the Record. A-Woo-Woo-Woo."
      });
      setIsTranslating(false);
    }, 1500);
  };

  return (
    <div className={`min-h-screen p-4 md:p-12 transition-all duration-700 font-sans ${skin === 'POKEMON' ? 'bg-[#f8f9fa] text-slate-900' : 'bg-[#2d1b2d] text-white font-mono'}`}>
      
      {/* HUD Header */}
      <header className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 bg-white p-6 rounded-[2.5rem] shadow-2xl border-[6px] border-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-blue-500" />
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full border-[4px] border-black flex items-center justify-center shadow-lg animate-pulse">
            <Cpu className="text-white" size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter italic text-black">MATILDA MARK I</h1>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Universal Dad Translator</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button 
            onClick={() => setSkin('POKEMON')} 
            className={`p-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_black] transition-all active:translate-y-1 active:shadow-none ${skin === 'POKEMON' ? 'bg-yellow-400' : 'bg-white'}`}
          >
            <Star size={24} className="text-black" />
          </button>
          <button 
            onClick={() => setSkin('MYSPACE')} 
            className={`p-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_black] transition-all active:translate-y-1 active:shadow-none ${skin === 'MYSPACE' ? 'bg-pink-500 text-white' : 'bg-white text-black'}`}
          >
            <Wand2 size={24} />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT: INPUT AREA */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[3.5rem] border-[6px] border-black shadow-[12px_12px_0px_rgba(0,0,0,0.1)] space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                <MessageCircle size={18} />
                Inbound "Dad-Speak"
                </h2>
                <span className="text-[8px] font-mono opacity-20">ENCRYPTED_NODE</span>
            </div>
            
            <textarea 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste the text from the simulation here..."
              className="w-full h-40 bg-slate-50 border-[3px] border-black rounded-[2rem] p-6 text-sm focus:ring-4 focus:ring-blue-500/20 transition-all outline-none text-black italic font-serif leading-relaxed"
            />

            <div className="flex flex-wrap gap-3">
              {DAD_SAMPLES.map(s => (
                <button 
                  key={s.id}
                  onClick={() => setInputText(s.text)}
                  className="text-[9px] font-black uppercase tracking-widest px-4 py-2 bg-slate-100 hover:bg-blue-100 rounded-xl border-2 border-black shadow-[2px_2px_0px_black] transition-all active:translate-y-0.5 active:shadow-none text-black"
                >
                  Scenario {s.id}
                </button>
              ))}
            </div>

            <button 
              onClick={handleTranslate}
              disabled={!inputText || isTranslating}
              className="w-full py-5 bg-red-600 hover:bg-red-500 disabled:bg-slate-300 text-white font-black uppercase tracking-[0.3em] text-sm rounded-[2rem] border-[4px] border-black shadow-[6px_6px_0px_black] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-4"
            >
              {isTranslating ? <RefreshCw className="animate-spin" /> : <Zap fill="currentColor" />}
              {isTranslating ? "DECRYPTING..." : "TRANSLATE FOR MATILDA"}
            </button>
          </div>

          <div className="p-8 bg-blue-500/5 border-[4px] border-blue-500/20 rounded-[3rem] relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Star size={48} className="text-blue-500" />
             </div>
             <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.4em] mb-3">Matilda's Wisdom</p>
             <p className="text-sm italic leading-relaxed text-slate-600 font-serif">
               "Even if you are small, you can do a lot. You just have to learn how to change the channel. The Story carries you."
             </p>
          </div>
        </div>

        {/* RIGHT: OUTPUT AREA */}
        <div className="space-y-8">
          {translation ? (
            <div className="bg-white p-10 rounded-[4rem] border-[6px] border-black shadow-2xl space-y-10 animate-in zoom-in duration-500 text-black">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-600">
                    <Search size={18} />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Decrypted Intent</h3>
                </div>
                <p className="text-base font-bold leading-tight italic font-serif">"{translation.intent}"</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-600">
                    <Info size={18} />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Context Window</h3>
                </div>
                <div className="p-5 bg-purple-50 rounded-3xl text-[11px] text-purple-900 border-2 border-purple-200 leading-relaxed italic">
                  {translation.context}
                </div>
              </div>

              <div className="p-8 bg-red-50 border-[4px] border-red-500 rounded-[3rem] space-y-4 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Book size={32} className="text-red-500" />
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <Heart size={18} fill="currentColor" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Carpenter's Audit</span>
                </div>
                <p className="text-sm italic leading-relaxed text-red-950 font-serif">
                  "{translation.carpenter}"
                </p>
              </div>

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl border-[4px] border-black shadow-[6px_6px_0px_black] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3">
                <ArrowRight size={16} /> Craft Sovereign Response
              </button>
            </div>
          ) : (
            <div className="h-full bg-white/40 border-[6px] border-dashed border-slate-200 rounded-[5rem] flex flex-col items-center justify-center p-16 text-center space-y-6 opacity-40">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
                <Cpu size={48} className="text-slate-300" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Awaiting Simulation Data</p>
                <p className="text-[10px] italic">Paste dad-speak to begin decryption.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="max-w-4xl mx-auto mt-20 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-blue-500" />
            <span className="text-[9px] font-black uppercase tracking-[0.5em]">Project MATRIARCH</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-yellow-500" />
            <span className="text-[9px] font-black uppercase tracking-[0.5em] italic">Matilda-01 Deployment</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono italic uppercase tracking-tighter">
          <Terminal size={14} /> Node: ORACLE_IO // Sector: 2814 // Anushiik.
        </div>
      </footer>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoom-in { from { transform: scale(0.98); } to { transform: scale(1); } }
        .animate-in { animation: fade-in 0.5s ease-out forwards, zoom-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;