import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Analyzer } from './components/Analyzer';
import { Dashboard } from './components/Dashboard';
import { History } from './components/History';
import { Settings } from './components/Settings';
import { ViewState, AnalysisResult, Criteria, DEFAULT_CRITERIA } from './types';
import { Menu } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [history, setHistory] = useState<AnalysisResult[]>([]);
  const [criteria, setCriteria] = useState<Criteria[]>(DEFAULT_CRITERIA);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setHistory((prev) => [result, ...prev]);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard history={history} />;
      case 'analyze':
        return <Analyzer criteria={criteria} onAnalysisComplete={handleAnalysisComplete} />;
      case 'history':
        return <History history={history} />;
      case 'settings':
        return <Settings criteria={criteria} setCriteria={setCriteria} />;
      default:
        return <Dashboard history={history} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      <Sidebar 
        currentView={currentView} 
        setView={setCurrentView} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-200 p-4 z-10 flex items-center justify-between shadow-sm h-16 no-print">
        <div className="flex items-center gap-2">
           {/* Mobile Logo Fallback */}
            <div className="w-7 h-7 bg-[#0500e2] rounded-md flex items-center justify-center shrink-0">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
               </svg>
            </div>
           <span className="font-bold text-xl text-[#000000] tracking-tight">Revu<span className="text-[#0500e2]">QA</span></span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      <main className="flex-1 w-full lg:ml-64 transition-all duration-300">
        <div className="h-full p-4 pt-24 lg:p-8 lg:pt-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
             <header className="mb-6 lg:mb-8 no-print">
                <h1 className="text-2xl lg:text-3xl font-bold text-[#000000] tracking-tight capitalize">
                  {currentView === 'analyze' ? 'Analyze Interaction' : currentView}
                </h1>
                <p className="text-sm lg:text-base text-slate-500 mt-2">
                  {currentView === 'dashboard' && 'Welcome back, Jane. Here is your team\'s quality overview.'}
                  {currentView === 'analyze' && 'Upload transcripts or paste text to generate instant QA insights.'}
                  {currentView === 'history' && 'Review past evaluations and track improvement over time.'}
                  {currentView === 'settings' && 'Customize your quality standards and scorecard weighting.'}
                </p>
             </header>
             
             {renderView()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;