import React, { useState } from 'react';
import './TrainingCenters.css';

const TrainingCenters = () => {
  const [selectedState, setSelectedState] = useState('all');
  const [hoveredCenter, setHoveredCenter] = useState(null);

  const trainingCenters = [
    { id: 1, name: 'Chomu', state: 'Rajasthan', students: 450, programs: 3 },
    { id: 2, name: 'Sanchore', state: 'Rajasthan', students: 320, programs: 2 },
    { id: 3, name: 'Pipar', state: 'Rajasthan', students: 280, programs: 2 },
    { id: 4, name: 'Nagaur', state: 'Rajasthan', students: 380, programs: 3 },
    { id: 5, name: 'Hanumangarh', state: 'Rajasthan', students: 520, programs: 4 },
    { id: 6, name: 'Govindgarh', state: 'Rajasthan', students: 290, programs: 2 },
    { id: 7, name: 'Khajroli', state: 'Rajasthan', students: 180, programs: 2 },
    { id: 8, name: 'Rawla Mandi', state: 'Rajasthan', students: 220, programs: 2 },
    { id: 9, name: 'Anupgarh', state: 'Rajasthan', students: 340, programs: 3 },
    { id: 10, name: 'Pilibanga', state: 'Rajasthan', students: 260, programs: 2 },
    { id: 11, name: 'Abohar', state: 'Punjab', students: 420, programs: 3 },
    { id: 12, name: 'Fazilka', state: 'Punjab', students: 380, programs: 3 }
  ];

  const filteredCenters = selectedState === 'all' 
    ? trainingCenters 
    : trainingCenters.filter(center => center.state.toLowerCase() === selectedState);

  const handleCenterClick = (center) => {
    console.log(`Clicked on: ${center.name}, ${center.state}`);
  };

  return (
    <div className="training-centers-container">
      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button 
          className={`filter-tab ${selectedState === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedState('all')}
        >
          All Centers ({trainingCenters.length})
        </button>
        <button 
          className={`filter-tab ${selectedState === 'rajasthan' ? 'active' : ''}`}
          onClick={() => setSelectedState('rajasthan')}
        >
          Rajasthan ({trainingCenters.filter(c => c.state === 'Rajasthan').length})
        </button>
        <button 
          className={`filter-tab ${selectedState === 'punjab' ? 'active' : ''}`}
          onClick={() => setSelectedState('punjab')}
        >
          Punjab ({trainingCenters.filter(c => c.state === 'Punjab').length})
        </button>
      </div>

      {/* Centers Grid */}
      <div className="centers-grid">
        {filteredCenters.map((center, index) => (
          <div
            key={center.id}
            className={`center-card ${center.state.toLowerCase()}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredCenter(center.id)}
            onMouseLeave={() => setHoveredCenter(null)}
            onClick={() => handleCenterClick(center)}
          >
            <div className="center-header">
              <div className={`center-marker ${center.state.toLowerCase()}`}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="center-info">
                <h3 className="center-name">{center.name}</h3>
                <p className="center-state">{center.state}</p>
              </div>
            </div>
            
            <div className="center-stats">
              <div className="stat">
                <div className="stat-number">{center.students}</div>
                <div className="stat-label">Students</div>
              </div>
              <div className="stat">
                <div className="stat-number">{center.programs}</div>
                <div className="stat-label">Programs</div>
              </div>
            </div>

            <div className="center-actions">
              <button className="view-details-btn">
                <i className="fas fa-eye"></i>
                View Details
              </button>
            </div>

            {hoveredCenter === center.id && (
              <div className="hover-overlay">
                <i className="fas fa-mouse-pointer"></i>
                Click to explore
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="summary-stats">
        <div className="summary-card">
          <div className="summary-icon">
            <i className="fas fa-building"></i>
          </div>
          <div className="summary-info">
            <div className="summary-number">{filteredCenters.length}</div>
            <div className="summary-label">Training Centers</div>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="summary-info">
            <div className="summary-number">
              {filteredCenters.reduce((sum, center) => sum + center.students, 0)}
            </div>
            <div className="summary-label">Total Students</div>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="summary-info">
            <div className="summary-number">
              {filteredCenters.reduce((sum, center) => sum + center.programs, 0)}
            </div>
            <div className="summary-label">Active Programs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCenters;