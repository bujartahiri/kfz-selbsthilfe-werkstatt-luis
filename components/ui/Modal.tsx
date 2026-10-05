"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0d0f12]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#14161c] border border-[#242935] shadow-2xl flex flex-col z-10 technical-corner rounded-sm">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#242935]">
          <h2 id="modal-title" className="text-lg font-bold tracking-tight text-[#f4f3ef] uppercase font-mono">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Schließen"
            className="p-1.5 rounded text-[#8e95a3] hover:text-[#f4f3ef] hover:bg-[#222732] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4f82a]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 py-6 overflow-y-auto space-y-4 text-sm text-[#8e95a3] leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#242935] bg-[#0d0f12]/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1a1e26] hover:bg-[#222732] text-[#f4f3ef] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#2b3140] transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
