import React, { useState, useEffect } from "react";
import { X, Copy, Check, Quote, BookOpen } from "lucide-react";

export default function BibtexModal({ publication, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!publication) return null;

  const bibtexCode = publication.links?.bibtex || "";

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtexCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bibtex-modal-backdrop" onClick={onClose}>
      <div
        className="bibtex-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bibtex-modal-header">
          <div className="bibtex-title-wrap">
            <Quote size={18} className="modal-icon" />
            <div>
              <h3 className="modal-title">BibTeX Citation</h3>
              <p className="modal-subtitle">{publication.venue} ({publication.year})</p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Paper title preview */}
        <div className="bibtex-paper-name">
          <span>{publication.title}</span>
        </div>

        {/* Code Snippet Box */}
        <div className="bibtex-code-container">
          <pre className="bibtex-code">
            <code>{bibtexCode}</code>
          </pre>
        </div>

        {/* Modal Footer / Copy Action */}
        <div className="bibtex-modal-footer">
          <span className="modal-hint">Click below to copy citation to clipboard</span>
          <button
            type="button"
            className={`copy-bibtex-btn ${copied ? "copied" : ""}`}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check size={16} />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy BibTeX</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
