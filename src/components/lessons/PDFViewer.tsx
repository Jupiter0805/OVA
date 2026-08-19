import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Bundled locally via Vite instead of a CDN — no third-party runtime
// dependency, and it stays in lockstep with whatever pdfjs-dist version
// react-pdf ships (the worker filename/format changes between majors).
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PDFViewerProps {
  url: string;
  title: string;
  author?: string;
  downloadName?: string;
}

export function PDFViewer({ url, title, author, downloadName }: PDFViewerProps) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const onDocumentLoadError = (err: Error) => {
    setError(`No se pudo cargar el PDF: ${err.message}`);
    setIsLoading(false);
  };

  return (
    <div className="border-2 border-border-light rounded-2xl overflow-hidden bg-white shadow-lg">
      <div className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {author && <p className="text-sm text-white/80">{author}</p>}
      </div>

      {error && (
        <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg mx-4 mt-4 text-sm font-medium">
          ⚠️ {error}
        </div>
      )}

      {isLoading && !error && (
        <div className="bg-white p-8 text-center">
          <p className="text-text-light">Cargando PDF... Por favor espera</p>
          <div className="animate-spin h-6 w-6 border-4 border-unicoc-red border-t-transparent rounded-full mx-auto mt-4" />
        </div>
      )}

      {!error && (
        <div className="bg-bg-light overflow-y-auto flex justify-center p-4" style={{ maxHeight: '70vh' }}>
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<p className="text-center py-8 text-text-light">Inicializando PDF...</p>}
          >
            <Page pageNumber={pageNumber} width={860} renderTextLayer renderAnnotationLayer />
          </Document>
        </div>
      )}

      {numPages > 0 && !error && (
        <div className="bg-bg-light p-4 flex flex-col sm:flex-row items-center justify-between rounded-b-2xl border-t border-border-light gap-4">
          <div className="flex gap-2 flex-wrap items-center">
            <button
              onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-unicoc-red text-white rounded-lg hover:bg-unicoc-red-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition font-medium"
            >
              ← Anterior
            </button>
            <span className="px-4 py-2 text-text-dark font-semibold whitespace-nowrap">
              Página {pageNumber} de {numPages}
            </span>
            <button
              onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
              disabled={pageNumber >= numPages}
              className="px-4 py-2 bg-unicoc-red text-white rounded-lg hover:bg-unicoc-red-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition font-medium"
            >
              Siguiente →
            </button>
          </div>

          <a
            href={url}
            download={downloadName}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-unicoc-red text-unicoc-red rounded-lg hover:bg-unicoc-red hover:text-white transition font-medium whitespace-nowrap"
          >
            ⬇️ Descargar PDF
          </a>
        </div>
      )}
    </div>
  );
}
