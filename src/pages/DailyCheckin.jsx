import React, { useState } from 'react';

const DailyCheckin = () => {
  const [checkin, setCheckin] = useState({
    focus: '',
    blockers: ''
  });

  const [teamCheckins, setTeamCheckins] = useState([
    {
      id: 1,
      name: 'Anika Kumar',
      time: '09:15 AM',
      status: 'Working on the new dashboard interface. Planning to finish the analytics components by EOD.',
      project: 'UI Development'
    },
    {
      id: 2,
      name: 'Raj Patel',
      time: '08:45 AM',
      status: 'Reviewing client requirements and preparing documentation for the next sprint planning session.',
      project: 'Documentation'
    },
    {
      id: 3,
      name: 'Sarah Chen',
      time: '09:30 AM',
      status: 'Implementing API endpoints for the new feature set. Working on authentication flow.',
      project: 'Backend Development'
    },
    {
      id: 4,
      name: 'Mike Johnson',
      time: '08:30 AM',
      status: 'Testing the latest deployment and fixing reported bugs from QA team.',
      project: 'QA Testing'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get current time
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    // Create new check-in entry
    const newCheckin = {
      id: Date.now(),
      name: 'You', // Can be replaced with actual user name
      time: timeString,
      status: checkin.focus + (checkin.blockers ? '\nBlockers: ' + checkin.blockers : ''),
      project: 'Current Project' // Can be replaced with actual project
    };

    // Add new check-in to the list
    setTeamCheckins([newCheckin, ...teamCheckins]);

    // Reset form
    setCheckin({ focus: '', blockers: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Daily Check-in Form */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Daily Check-in</h1>
            <p className="text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <span className="text-sm text-gray-500">
            {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div>
              <label className="block text-base font-medium text-gray-900 mb-3">
                What are you working on today?
              </label>
              <textarea
                value={checkin.focus}
                onChange={(e) => setCheckin({ ...checkin, focus: e.target.value })}
                placeholder="Share your focus for the day..."
                rows={4}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-base font-medium text-gray-900 mb-3">
                Any blockers or challenges?
              </label>
              <textarea
                value={checkin.blockers}
                onChange={(e) => setCheckin({ ...checkin, blockers: e.target.value })}
                placeholder="Anything blocking your progress? (Optional)"
                rows={4}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Check-in
            </button>
          </div>
        </form>
      </div>

      {/* Team Check-ins */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900">Team Check-ins</h2>
          <p className="text-sm text-gray-600 mt-1">See what your team is working on today</p>
        </div>
        
        <div className="space-y-8">
          {teamCheckins.map((checkin) => (
            <div key={checkin.id} className="border-b border-gray-200 last:border-0 pb-8 last:pb-0">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{checkin.name}</h3>
                    <span className="text-sm text-gray-500">{checkin.time}</span>
                  </div>
                  <p className="mt-2 text-gray-900 whitespace-pre-line">{checkin.status}</p>
                  <div className="mt-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                      {checkin.project}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyCheckin;