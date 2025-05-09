import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppSidebar from './layout/Sidebar';
import TimeSheet from './pages/TimeSheet';
import WorklogAnalytics from './pages/WorklogAnalytics';
import DailyCheckin from './pages/DailyCheckin';
import AppHeader from './layout/Header';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <AppHeader />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Routes>
            <Route path="/time" element={<TimeSheet />} />
            <Route path="/time/timesheets" element={<TimeSheet />} />
            <Route path="/time/analytics" element={<WorklogAnalytics />} />
            <Route path="/time/checkins" element={<DailyCheckin />} />
          </Routes>
        </main>
      </div>
      </div>
    </Router>
  );
};

export default App;

