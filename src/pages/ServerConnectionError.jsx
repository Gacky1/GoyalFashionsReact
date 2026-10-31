import React, { useState } from 'react';

const ServerConnectionError = () => {
  const [checking, setChecking] = useState(false);
  const [checkStep, setCheckStep] = useState(0);
  const [checkFinished, setCheckFinished] = useState(false);
  const [currentTime] = useState(() => new Date().toUTCString());

  const runDiagnostic = () => {
    setChecking(true);
    setCheckFinished(false);
    setCheckStep(1);

    setTimeout(() => {
      setCheckStep(2);
    }, 1000);

    setTimeout(() => {
      setCheckStep(3);
    }, 2200);

    setTimeout(() => {
      setCheckStep(4);
      setChecking(false);
      setCheckFinished(true);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 flex flex-col justify-between font-sans antialiased p-4 sm:p-6 md:p-10">
      {/* Top Bar */}
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between pb-6 border-b border-slate-300/80">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white shadow-sm">
            <i className="fas fa-server text-sm"></i>
          </div>
          <div>
            <span className="font-semibold text-slate-900 tracking-tight text-sm sm:text-base">Web Infrastructure Gateway</span>
            <span className="hidden sm:inline-block ml-2 text-xs text-slate-500 font-mono">v4.18.2</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200">
            <span className="w-2 h-2 mr-1.5 bg-rose-500 rounded-full animate-ping"></span>
            Connection Failed
          </span>
        </div>
      </header>

      {/* Main Content Card */}
      <main className="max-w-4xl w-full mx-auto my-auto py-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200/90 overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-rose-50 via-slate-50 to-rose-50 border-b border-slate-200 p-6 sm:p-8">
            <div className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-medium bg-rose-500/10 text-rose-700 border border-rose-200/60 mb-3">
              HTTP 503 • Service Unavailable
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Sorry, we are unable to connect you to the website right now.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Our hosting gateway cannot reach the primary server. We are currently checking the systems and performing diagnostics on host services.
            </p>
          </div>

          {/* Connection Status Diagram (Cloudflare / Host style) */}
          <div className="p-6 sm:p-8 bg-slate-50/60 border-b border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
              
              {/* Step 1: User */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-sm">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-3 border border-emerald-100">
                  <i className="fas fa-laptop"></i>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm">Your Browser</h4>
                <div className="mt-1 flex items-center justify-center space-x-1.5 text-xs text-emerald-600 font-medium">
                  <i className="fas fa-check-circle"></i>
                  <span>Working</span>
                </div>
              </div>

              {/* Step 2: Gateway */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-sm">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-3 border border-emerald-100">
                  <i className="fas fa-cloud"></i>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm">Hosting Network</h4>
                <div className="mt-1 flex items-center justify-center space-x-1.5 text-xs text-emerald-600 font-medium">
                  <i className="fas fa-check-circle"></i>
                  <span>Operational</span>
                </div>
              </div>

              {/* Step 3: Host Server */}
              <div className="bg-rose-50/50 p-5 rounded-xl border-2 border-rose-300 text-center shadow-sm relative overflow-hidden">
                <div className="w-12 h-12 mx-auto rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xl mb-3 border border-rose-200">
                  <i className="fas fa-server"></i>
                </div>
                <h4 className="font-semibold text-rose-900 text-sm">Origin Host Server</h4>
                <div className="mt-1 flex items-center justify-center space-x-1.5 text-xs text-rose-600 font-semibold">
                  <i className="fas fa-times-circle"></i>
                  <span>Host Connection Paused</span>
                </div>
              </div>

            </div>
          </div>

          {/* Details & Actions */}
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider text-slate-500 mb-2">
                  <i className="fas fa-info-circle mr-1.5"></i>What happened?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The web server did not respond to connection requests from the hosting gateway. This typically indicates the host environment is offline, undergoing maintenance verification, or temporarily suspended pending system updates.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider text-slate-500 mb-2">
                  <i className="fas fa-wrench mr-1.5"></i>What can I do?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If you are a visitor, please try reloading in a few moments. If you are the website administrator or domain owner, please check your hosting status or get in touch with your technical support provider.
                </p>
              </div>
            </div>

            {/* Diagnostic Interactive Test */}
            <div className="border border-slate-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">System Diagnostics</h4>
                  <p className="text-xs text-slate-500">Run a real-time probe against the origin hosting cluster</p>
                </div>
                <button
                  onClick={runDiagnostic}
                  disabled={checking}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 flex items-center space-x-2 ${
                    checking
                      ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                      : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-95 shadow-sm'
                  }`}
                >
                  <i className={`fas fa-sync-alt ${checking ? 'animate-spin' : ''}`}></i>
                  <span>{checking ? 'Checking Systems...' : 'Check Server Status'}</span>
                </button>
              </div>

              {/* Diagnostic Log */}
              {checkStep > 0 && (
                <div className="space-y-2 pt-3 border-t border-slate-100 font-mono text-xs">
                  {checkStep >= 1 && (
                    <div className="flex items-center space-x-2 text-slate-700">
                      <i className="fas fa-check text-emerald-500 w-4"></i>
                      <span>[1/3] Gateway router response: <strong className="text-emerald-600">200 OK (12ms)</strong></span>
                    </div>
                  )}
                  {checkStep >= 2 && (
                    <div className="flex items-center space-x-2 text-slate-700">
                      <i className="fas fa-check text-emerald-500 w-4"></i>
                      <span>[2/3] DNS cluster resolution: <strong className="text-emerald-600">Active</strong></span>
                    </div>
                  )}
                  {checkStep >= 3 && (
                    <div className="flex items-center space-x-2 text-rose-700">
                      {checkStep === 3 ? (
                        <i className="fas fa-spinner animate-spin text-amber-500 w-4"></i>
                      ) : (
                        <i className="fas fa-times text-rose-500 w-4"></i>
                      )}
                      <span>
                        [3/3] Origin host handshake: <strong className="text-rose-600">503 Handshake Timeout / Service Paused</strong>
                      </span>
                    </div>
                  )}
                  {checkFinished && (
                    <div className="mt-3 p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-900 text-xs">
                      <p className="font-semibold flex items-center">
                        <i className="fas fa-exclamation-triangle mr-2 text-rose-600"></i>
                        Diagnostic Result: Origin server unavailable
                      </p>
                      <p className="mt-1 text-rose-700">
                        The primary hosting environment is currently not responding to HTTP/HTTPS traffic. Hosting service status check or administrative clearance required.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Technical Metadata Bar */}
            <div className="bg-slate-900 text-slate-400 p-4 rounded-xl text-xs font-mono space-y-1 overflow-x-auto">
              <div className="text-slate-300 font-semibold mb-1">Diagnostic Details:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                <div>Error Code: <span className="text-rose-400">HOST_SERVICE_UNAVAILABLE_503</span></div>
                <div>Status: <span className="text-amber-400">Awaiting Service Clearance</span></div>
                <div>Host Node: <span className="text-slate-300">apac-south-in01</span></div>
                <div>Gateway Cluster: <span className="text-slate-300">edge-proxy-04</span></div>
                <div>Timestamp: <span className="text-slate-300">{currentTime}</span></div>
                <div>Server Check: <span className="text-rose-400">Offline / Diagnostic Hold</span></div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-3 border-t border-slate-200">
              <button
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <i className="fas fa-redo-alt text-xs"></i>
                <span>Reload Page</span>
              </button>
              <div className="text-xs text-slate-500 text-center sm:text-right">
                If you are the website administrator, please contact technical support.
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl w-full mx-auto text-center pt-6 text-xs text-slate-500 border-t border-slate-300/80">
        <p>© {new Date().getFullYear()} Cloud Web Gateway & System Monitoring Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServerConnectionError;

