import { useState } from "react";

export default function LinkSafetyChecker() {
  const [url, setUrl] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    setAnalyzed(true);
  };

  const handleReset = () => {
    setUrl("");
    setAnalyzed(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Is My URL Safe?</h1>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center">
        {!analyzed ? (
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center mt-6">
            <h2 className="text-2xl font-semibold mb-2">Is this link safe?</h2>
            <p className="text-gray-600 mb-4">
              Scan a URL you want to visit to detect malware, fake websites, and phishing attacks.
            </p>
            <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="Enter your URL here"
                className="px-4 py-2 w-80 border-none focus:ring-0 focus:outline-none"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <>
              </>
              <button
                className="bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-blue-700"
                onClick={handleAnalyze}
              >
                Analyze
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center mt-6">
            <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded mb-4">
              <p className="font-semibold">⚠ {url} was identified as a phishing site. It could trick you into revealing your personal information, like login credentials and credit card details.</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700" onClick={handleReset}>
                Check another link
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100">
                Incorrect detection? Report it
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
