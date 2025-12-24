import React, { useState } from 'react';
import { FileText, AlertTriangle, Clock, TrendingDown, ExternalLink, Calendar } from 'lucide-react';

const WorkActivity = () => {
  const [selectedStudent, setSelectedStudent] = useState('Alex');
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const students = [
    {
      name: 'Alex Johnson',
      avatar: 'A',
      lateSubmissions: 3,
      totalSubmissions: 8,
      plagiarismRisk: 'High',
      lastActivity: '2 hours ago',
      mood: '😞',
      status: 'At Risk'
    },
    {
      name: 'Bob Smith',
      avatar: 'B',
      lateSubmissions: 1,
      totalSubmissions: 10,
      plagiarismRisk: 'Low',
      lastActivity: '30 minutes ago',
      mood: '😐',
      status: 'Monitoring'
    },
    {
      name: 'Charlie Brown',
      avatar: 'C',
      lateSubmissions: 2,
      totalSubmissions: 7,
      plagiarismRisk: 'Medium',
      lastActivity: '1 day ago',
      mood: '😞',
      status: 'At Risk'
    }
  ];

  const handleScheduleCheckIn = (studentName: string) => {
    setShowScheduleModal(true);
    setTimeout(() => {
      alert(`Demo: Mentor check-in scheduled for ${studentName}. This would appear in their timetable as a purple "Mentor Check-In" event.`);
      setShowScheduleModal(false);
    }, 1500);
  };

  const submissions = {
    'Alex': [
      { task: 'React Components Project', due: '2024-01-15', submitted: '2024-01-17', status: 'late', plagiarism: 87 },
      { task: 'Algorithm Assignment', due: '2024-01-10', submitted: '2024-01-12', status: 'late', plagiarism: 23 },
      { task: 'Database Design', due: '2024-01-05', submitted: '2024-01-07', status: 'late', plagiarism: 45 },
      { task: 'UI/UX Mockup', due: '2024-01-01', submitted: '2024-01-01', status: 'on-time', plagiarism: 12 },
    ],
    'Bob': [
      { task: 'React Components Project', due: '2024-01-15', submitted: '2024-01-14', status: 'early', plagiarism: 8 },
      { task: 'Algorithm Assignment', due: '2024-01-10', submitted: '2024-01-11', status: 'late', plagiarism: 15 },
      { task: 'Database Design', due: '2024-01-05', submitted: '2024-01-04', status: 'early', plagiarism: 5 },
    ],
    'Charlie': [
      { task: 'React Components Project', due: '2024-01-15', submitted: '2024-01-16', status: 'late', plagiarism: 56 },
      { task: 'Algorithm Assignment', due: '2024-01-10', submitted: '2024-01-11', status: 'late', plagiarism: 34 },
      { task: 'Database Design', due: '2024-01-05', submitted: '2024-01-05', status: 'on-time', plagiarism: 18 },
    ]
  };

  const currentStudent = students.find(s => s.name === selectedStudent);
  const currentSubmissions = submissions[selectedStudent as keyof typeof submissions] || [];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Work Activity & Plagiarism Tracker</h1>
        <div className="flex items-center space-x-2 bg-slate-800 rounded-lg p-2">
          <span className="text-slate-400 text-sm">Monitoring:</span>
          <span className="text-green-400 font-medium">{students.length} Students</span>
        </div>
      </div>

      {/* Student Overview Table */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Student Tracker</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Name</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Submissions</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Late</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.name}
                  onClick={() => setSelectedStudent(student.name)}
                  className={`border-b border-slate-700 cursor-pointer hover:bg-slate-700/30 transition-colors ${
                    selectedStudent === student.name ? 'bg-blue-900/20' : ''
                  }`}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.avatar}
                      </div>
                      <div>
                        <div className="text-white font-medium">{student.name}</div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{student.mood}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white">{student.totalSubmissions}</td>
                  <td className="py-4 px-4">
                    <span className="text-red-400 font-medium">{student.lateSubmissions}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      student.status === 'At Risk' 
                        ? 'bg-red-900/50 text-red-300' 
                        : 'bg-yellow-900/50 text-yellow-300'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleScheduleCheckIn(student.name);
                      }}
                      className="flex items-center space-x-1 bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Schedule Check-In</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Student Details */}
      {currentStudent && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Submission History */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Submission Tracker - {currentStudent.name}</span>
            </h2>

            <div className="space-y-4">
              {currentSubmissions.map((submission, index) => (
                <div key={index} className="border border-slate-600 rounded-lg p-4 hover:border-blue-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-white font-medium">{submission.task}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-400 mt-1">
                        <span>Due: {submission.due}</span>
                        <span>Submitted: {submission.submitted}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className={`text-xs px-2 py-1 rounded ${
                        submission.status === 'late' ? 'bg-red-900/50 text-red-300' :
                        submission.status === 'early' ? 'bg-green-900/50 text-green-300' :
                        'bg-blue-900/50 text-blue-300'
                      }`}>
                        {submission.status}
                      </span>
                    </div>
                  </div>

                  {/* Plagiarism Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Similarity Score</span>
                      <span className={`font-medium ${
                        submission.plagiarism >= 70 ? 'text-red-400' :
                        submission.plagiarism >= 30 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {submission.plagiarism}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          submission.plagiarism >= 70 ? 'bg-red-500' :
                          submission.plagiarism >= 30 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${submission.plagiarism}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-6 p-4 bg-slate-900/50 rounded-lg">
              <div className="text-center text-red-400 font-medium mb-2">
                📊 This month: {currentStudent.lateSubmissions} late submissions
              </div>
              <div className="text-sm text-slate-400 text-center">
                Performance trend: <TrendingDown className="inline w-4 h-4 text-red-400" /> Declining
              </div>
            </div>
          </div>

          {/* Plagiarism Alert */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span>Plagiarism Report</span>
            </h2>

            <div className="space-y-4">
              {/* High Risk Alert */}
              <div className="bg-red-900/20 border border-red-500 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚨</span>
                  </div>
                  <div>
                    <h3 className="text-red-300 font-semibold">High Similarity Detected</h3>
                    <p className="text-red-400 text-sm">React Components Project</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-red-200">Similarity Score:</span>
                    <span className="text-red-400 font-bold text-lg">87%</span>
                  </div>
                  
                  <div className="bg-red-900/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-red-200 text-sm">Source Match:</span>
                      <ExternalLink className="w-4 h-4 text-red-400 cursor-pointer hover:text-red-300" />
                    </div>
                    <p className="text-red-300 text-sm font-mono">
                      GitHub Repository: "react-todo-app-template"
                    </p>
                    <p className="text-red-400 text-xs mt-1">
                      Multiple code blocks match exactly
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                      Flag for Review
                    </button>
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                      Contact Student
                    </button>
                  </div>
                </div>
              </div>

              {/* Plagiarism History */}
              <div className="space-y-3">
                <h3 className="text-white font-medium">Recent Plagiarism Checks</h3>
                
                {currentSubmissions.filter(s => s.plagiarism > 20).map((submission, index) => (
                  <div key={index} className="border border-slate-600 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm">{submission.task}</span>
                      <span className={`text-sm font-medium ${
                        submission.plagiarism >= 70 ? 'text-red-400' :
                        submission.plagiarism >= 30 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {submission.plagiarism}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1">
                      <div
                        className={`h-1 rounded-full ${
                          submission.plagiarism >= 70 ? 'bg-red-500' :
                          submission.plagiarism >= 30 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${submission.plagiarism}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-600">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-medium transition-colors">
                  Generate Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Check-In Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-purple-500 rounded-xl p-6 max-w-md mx-4">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Scheduling Check-In</h3>
            </div>
            <div className="flex items-center justify-center py-8">
              <div className="w-8 h-8 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin" />
            </div>
            <p className="text-slate-300 text-center text-sm">
              Adding mentor check-in to student's timetable...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkActivity;