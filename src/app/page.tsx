'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Zap, Download, Play, Sparkles, Infinity } from 'lucide-react';

export default function Home() {
  const [beats, setBeats] = useState(12487);
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setBeats(prev => prev + Math.floor(Math.random() * 7));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Infinity className="w-12 h-12 text-purple-500" />
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Infinitune
            </h1>
          </motion.div>

          <p className="text-2xl md:text-4xl mb-4 text-gray-300">
            Beats infinitos con IA · 100% gratis
          </p>

          <div className="flex items-center justify-center gap-4 my-8 text-lg">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="font-mono text-3xl text-green-400">
              +{beats.toLocaleString()}+
            </span>
            <span className="text-gray-400">beats generados</span>
          </div>

          {/* Generador */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Trap oscuro con 808s profundos y hi-hats rápidos..."
                  className="flex-1 bg-black/50 border border-gray-700 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-purple-500 transition"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-lg hover:scale-105 transition flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Generar
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3 text-center">
                15 segundos · Sin registro · Descarga gratis
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-10"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Últimos beats */}
      <div className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Últimos beats creados por la comunidad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1,2,3,4,5,6].map(i => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6"
            >
              <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-xl h-48 mb-4 flex items-center justify-center">
                <Play className="w-16 h-16 text-white/70" />
              </div>
              <h3 className="font-bold text-xl mb-2">Dark Trap Type Beat</h3>
              <p className="text-gray-400 text-sm mb-4">808 mafia · 140 BPM</p>
              <button className="w-full py-3 bg-purple-600 rounded-xl font-bold hover:bg-purple-500 transition flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Descargar gratis
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}