import React, { useState } from 'react';
import { Plus, Clock, User } from 'lucide-react';

const Timetable = () => {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState({ day: '', time: '' });

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Sample events data
  const events = {
    'Monday-10:00 AM': { title: 'React Workshop', type: 'class' },
    'Monday-2:00 PM': { title: 'Mentor Check-In', type: 'mentor', locked: true },
    'Tuesday-9:00 AM': { title: 'Algorithm Study', type: 'study' },
    'Wednesday-11:00 AM': { title: 'Team Meeting', type: 'meeting' },
    'Wednesday-3:00 PM': { title: 'Mentor Check-In', type: 'mentor', locked: true },
    'Thursday-1:00 PM': { title: 'Code Review', type: 'class' },
    'Friday-10:00 AM': { title: 'Project Demo', type: 'presentation' },
    'Saturday-2:00 PM': { title: 'Study Group', type: 'study' },
  };

  const handleAddEvent = (day: string, time: string) => {
    const eventKey = `${day}-${time}`;
    if (events[eventKey as keyof typeof events]?.locked) {
      alert('This mentor check-in cannot be modified by students.');
      return;
    }
    setSelectedSlot({ day, time });
    setShowAddEvent(true);
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'mentor': return 'bg-purple-600 text-white border-purple-500';
      case 'class': return 'bg-blue-600 text-white border-blue-500';
      case 'study': return 'bg-green-600 text-white border-green-500';
      case 'meeting': return 'bg-orange-600 text-white border-orange-500';
      case 'presentation': return 'bg-red-600 text-white border-red-500';
      default: return 'bg-slate-600 text-white border-slate-500';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Weekly Timetable</h1>
        <div className="flex items-center space-x-2 text-slate-400">
          <Clock className="w-5 h-5" />
          <span>Current Week</span>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
        <h3 className="text-white font-medium mb-3">Event Types</h3>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-600 rounded"></div>
            <span className="text-slate-300 text-sm">Mentor Check-In (Locked)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span className="text-slate-300 text-sm">Class</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-600 rounded"></div>
            <span className="text-slate-300 text-sm">Study</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-600 rounded"></div>
            <span className="text-slate-300 text-sm">Meeting</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-600 rounded"></div>
            <span className="text-slate-300 text-sm">Presentation</span>
          </div>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-700">
                <th className="p-4 text-left text-white font-semibold border-r border-slate-600">Time</th>
                {days.map((day) => (
                  <th key={day} className="p-4 text-center text-white font-semibold border-r border-slate-600 min-w-[140px]">
                    {day.slice(0, 3)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, timeIndex) => (
                <tr key={time} className="border-b border-slate-600">
                  <td className="p-4 text-slate-300 font-mono text-sm border-r border-slate-600 bg-slate-700/30">
                    {time}
                  </td>
                  {days.map((day) => {
                    const eventKey = `${day}-${time}`;
                    const event = events[eventKey as keyof typeof events];
                    
                    return (
                      <td key={day} className="p-2 border-r border-slate-600 h-16 relative">
                        {event ? (
                          <div className={`w-full h-full rounded-lg p-2 text-xs font-medium flex items-center justify-center text-center relative ${getEventColor(event.type)}`}>
                            {event.locked && (
                              <User className="w-3 h-3 absolute top-1 right-1" />
                            )}
                            <span className="truncate">{event.title}</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleAddEvent(day, time)}
                            className="w-full h-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-600/50 rounded-lg transition-all duration-200 group"
                          >
                            <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          </button>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">This Week</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Total Events:</span>
              <span className="text-white font-medium">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Classes:</span>
              <span className="text-blue-400 font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Mentor Check-ins:</span>
              <span className="text-purple-400 font-medium">2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Study Sessions:</span>
              <span className="text-green-400 font-medium">2</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">Upcoming</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div>
                <div className="text-white text-sm">React Workshop</div>
                <div className="text-slate-400 text-xs">Mon 10:00 AM</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <div>
                <div className="text-white text-sm">Mentor Check-In</div>
                <div className="text-slate-400 text-xs">Mon 2:00 PM</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <div>
                <div className="text-white text-sm">Algorithm Study</div>
                <div className="text-slate-400 text-xs">Tue 9:00 AM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm transition-colors">
              Add Study Session
            </button>
            <button className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg text-sm transition-colors">
              Schedule Meeting
            </button>
            <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-2 px-4 rounded-lg text-sm transition-colors">
              View Full Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {showAddEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-slate-600 rounded-xl p-6 max-w-md mx-4 w-full">
            <h3 className="text-lg font-semibold text-white mb-4">Add Event</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Time Slot
                </label>
                <div className="bg-slate-700 rounded-lg px-4 py-2 text-white">
                  {selectedSlot.day} at {selectedSlot.time}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  placeholder="Enter event title..."
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Event Type
                </label>
                <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500">
                  <option value="study">Study Session</option>
                  <option value="class">Class</option>
                  <option value="meeting">Meeting</option>
                  <option value="presentation">Presentation</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowAddEvent(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Demo: Event would be added to your timetable!');
                  setShowAddEvent(false);
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg transition-colors"
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timetable;