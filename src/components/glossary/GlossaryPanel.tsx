import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { glossaryEntries } from './glossaryData';

// Persistent glossary panel available on any chapter. Collapsed by default
// (only the docked tab shows, so it never covers content) and slides in
// from the right when the student opens it. Purely client-side static data
// — no service/DB round-trip needed for a fixed glossary.
export function GlossaryPanel() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = glossaryEntries.filter((entry) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      entry.term.toLowerCase().includes(q) ||
      entry.fullName.toLowerCase().includes(q) ||
      entry.meaning.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* Docked tab — always visible, attached to the right edge, never covers content */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-expanded={open}
        aria-controls="glossary-panel"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-unicoc-red text-white rounded-l-xl shadow-lg px-2 py-4 flex flex-col items-center gap-2 hover:bg-unicoc-red-dark transition"
      >
        <span aria-hidden="true">📖</span>
        <span
          className="text-xs font-bold tracking-wide"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Glosario
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop — click to close, doesn't block scrolling the rest of the app */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 z-40"
            />
            <motion.div
              id="glossary-panel"
              role="dialog"
              aria-label="Glosario de términos"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed right-0 top-0 h-full w-full sm:w-[380px] bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white p-5 flex items-center justify-between">
                <h2 className="text-lg font-bold">📖 Glosario de términos</h2>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar glosario"
                  className="text-white/90 hover:text-white text-xl leading-none px-2"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 border-b border-border-light">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar término (ej. CAL, RBL...)"
                  className="w-full px-4 py-2 border-2 border-border-light rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-unicoc-red focus:border-transparent transition"
                />
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {filtered.length === 0 ? (
                  <p className="text-text-light text-sm text-center py-8">Sin resultados para "{query}".</p>
                ) : (
                  filtered.map((entry) => (
                    <div
                      key={entry.term}
                      className="bg-bg-light border border-border-light rounded-xl p-4"
                    >
                      <p className="font-bold text-unicoc-red text-sm mb-1">{entry.term}</p>
                      <p className="text-xs font-semibold text-text-dark mb-2">{entry.fullName}</p>
                      <p className="text-sm text-text-dark leading-relaxed">{entry.meaning}</p>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
