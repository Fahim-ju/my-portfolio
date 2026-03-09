import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-lg w-full h-[90vh] max-w-4xl flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-semibold text-slate-100">My Resume</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-slate-800">
          {isLoading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-slate-400">Loading resume...</div>
            </div>
          )}
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
            <Viewer
              fileUrl="/resume.pdf"
              plugins={[defaultLayoutPluginInstance]}
              onDocumentLoad={() => setIsLoading(false)}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
}
