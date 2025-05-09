import React, { useState } from 'react';

const TimeSheet = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '2024-02-20',
      project: 'Frontend Development',
      hours: 6.5,
      description: 'Implemented new dashboard components and fixed responsive layout issues'
    },
    {
      id: 2,
      date: '2024-02-20',
      project: 'API Integration',
      hours: 4.0,
      description: 'Connected backend endpoints and implemented data fetching logic'
    },
    {
      id: 3,
      date: '2024-02-19',
      project: 'Code Review',
      hours: 2.5,
      description: 'Reviewed pull requests and provided feedback to team members'
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    date: '',
    project: '',
    hours: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.date && newEntry.project && newEntry.hours && newEntry.description) {
      const entry = {
        id: Date.now(),
        ...newEntry,
        hours: parseFloat(newEntry.hours)
      };
      setEntries([entry, ...entries]);
      setNewEntry({ date: '', project: '', hours: '', description: '' });
    }
  };

  const handleCancel = () => {
    setNewEntry({ date: '', project: '', hours: '', description: '' });
  };

  return (
    <div className="space-y-6">
      {/* New Time Entry Form */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">New Time Entry</h2>
          <p className="text-gray-600 mt-1">Log your time spent on projects and tasks.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={newEntry.date}
                onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project</label>
              <select
                value={newEntry.project}
                onChange={(e) => setNewEntry({ ...newEntry, project: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a project</option>
                <option value="Frontend Development">Frontend Development</option>
                <option value="API Integration">API Integration</option>
                <option value="Code Review">Code Review</option>
                <option value="Documentation">Documentation</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hours</label>
            <input
              type="number"
              step="0.5"
              min="0.5"
              max="24"
              placeholder="Number of hours"
              value={newEntry.hours}
              onChange={(e) => setNewEntry({ ...newEntry, hours: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              placeholder="Describe the work you did..."
              value={newEntry.description}
              onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Entry
            </button>
          </div>
        </form>
      </div>

      {/* Recent Entries */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Entries</h2>
        <div className="space-y-4">
          {entries.map(entry => (
            <div key={entry.id} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-gray-900">{entry.project}</h3>
                  <p className="text-sm text-gray-500">{entry.date}</p>
                </div>
                <span className="text-sm font-medium text-blue-600">{entry.hours} hours</span>
              </div>
              <p className="text-gray-600">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSheet;