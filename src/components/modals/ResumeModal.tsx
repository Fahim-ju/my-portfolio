import { useState } from 'react';
import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import './ResumeModal.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const zoomPluginInstance = zoomPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const getFilePluginInstance = getFilePlugin();
  const toolbarPluginInstance = toolbarPlugin();

  const { ZoomInButton, ZoomOutButton, CurrentScale } = zoomPluginInstance;
  const { CurrentPageLabel, GoToNextPageButton, GoToPreviousPageButton } = pageNavigationPluginInstance;
  const { DownloadButton } = getFilePluginInstance;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="bg-slate-900 rounded-lg w-full h-[90vh] max-w-4xl flex flex-col shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-2 border-b border-slate-700">
          <h2 className="text-l font-semibold text-slate-100">My Resume</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Custom Toolbar */}
        <div className="resume-modal-toolbar flex items-center gap-4 p-2 border-b border-slate-700 bg-slate-800">
          <div className="flex items-center gap-2">
            <GoToPreviousPageButton />
            <CurrentPageLabel />
            <GoToNextPageButton />
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-2">
            <ZoomOutButton />
            <CurrentScale>
              {({ scale }) => (
                <span className="zoom-percentage">{Math.round(scale * 100)}%</span>
              )}
            </CurrentScale>
            <ZoomInButton />
          </div>
          <div className="divider ml-auto"></div>
          <div className="flex items-center gap-2">
            <DownloadButton />
          </div>
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
              plugins={[zoomPluginInstance, pageNavigationPluginInstance, getFilePluginInstance, toolbarPluginInstance]}
              onDocumentLoad={() => setIsLoading(false)}
              initialPage={0}
              defaultScale={SpecialZoomLevel.PageWidth}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
}
