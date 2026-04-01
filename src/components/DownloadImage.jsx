import React from 'react';
import { useEffect } from 'react';
export default function DownloadImage({ setHitDownload , onDownload  , imageUrl , settings , setShowToast}) {
useEffect(() => {
  const handleEsc = e => {
    if (e.key === 'Escape') setHitDownload(false);
  };
  window.addEventListener('keydown', handleEsc);
  return () => window.removeEventListener('keydown', handleEsc);
}, []);

  const handleDownloadCopy = async () => {
    try {
     await onDownload()
    } catch (error) {
      console.error('Export failed', error);
    } finally {
     if(settings.autoCopy) setShowToast(true);
   }
}
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      {/* main panel */}
      <div className="w-full max-w-xl bg-white text-black rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200 font-outfit">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">Preview & Download Image</h2>
          <button
            onClick={() => setHitDownload(false)}
            className="text-black  transition-colors rounded-full p-1 cursor-pointer "
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* preview */}
        <div className="p-6 bg-gray-50 flex items-center justify-center min-h-[250px]">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Preview"
              className="max-h-64 rounded-md object-contain shadow-sm border border-gray-200"
            />
          ) : (
            <div className="text-gray-400 flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm">No preview available</p>
            </div>
          )}
        </div>

        {/* bottom */}
        <div className="flex items-center justify-end gap-3 border-t px-6 py-4 bg-white">
          <button
            onClick={() => setHitDownload(false)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none  cursor-pointer transition-all"
          >
            Cancel
          </button>

          {settings.autoCopy && (
            <button
              onClick={handleDownloadCopy}
              disabled={!imageUrl}
              className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed focus:outline-none cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Image + Copy Text
            </button>
          )}

          <button
            onClick={() => {
              onDownload();
            }}
            disabled={!imageUrl}
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed focus:outline-none cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
}
