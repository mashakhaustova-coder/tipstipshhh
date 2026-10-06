import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success';

export const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const [status, setStatus] = useState<Status>('idle');
  const [name, setName] = useState('');
  const [venue, setVenue] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setStatus('idle');
      setName('');
      setVenue('');
      setContact('');
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setStatus('submitting');

    // TODO: poveži sa pravim CRM/webhook-om (Formspree, Google Sheet, Telegram bot...)
    // Trenutno je ovo samo UI simulacija — lead se nigde ne čuva dok se endpoint ne doda.
    window.setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="relative z-10 w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-7 max-h-[92vh] overflow-y-auto"
            style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Zatvori"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {status === 'success' ? (
              <div className="py-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">Zahtev poslat!</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Javljamo se u roku od 24h na {contact}.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition-colors"
                >
                  Zatvori
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 w-fit mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BA77]" />
                  <span>Besplatna proba za 48h</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Zatraži demo za svoj lokal
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Ostavi kontakt — javljamo se isti dan, bez obaveze.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
                  <div>
                    <label htmlFor="cm-name" className="block text-xs font-bold text-slate-700 mb-1">
                      Ime i prezime
                    </label>
                    <input
                      id="cm-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Marko Marković"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="cm-venue" className="block text-xs font-bold text-slate-700 mb-1">
                      Naziv kafića / restorana
                    </label>
                    <input
                      id="cm-venue"
                      type="text"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      placeholder="Dorćol Bar"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="cm-contact" className="block text-xs font-bold text-slate-700 mb-1">
                      Telefon ili email
                    </label>
                    <input
                      id="cm-contact"
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="npr. 060 123 4567 ili ime@email.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="mt-2 w-full inline-flex items-center justify-center gap-1.5 py-3 bg-[#00BA77] hover:bg-[#00c982] disabled:opacity-70 text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_16px_rgba(0,186,119,0.3)] active:scale-95"
                  >
                    {status === 'submitting' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Pošalji zahtev</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Bez ugovorne obaveze. Podaci se koriste samo za kontakt.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
