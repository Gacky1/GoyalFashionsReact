import React, { useState } from 'react';
import './PlacesCovered.css';

const PlacesCovered = () => {
  const [selectedState, setSelectedState] = useState('all');

  const places = [
    { name: 'Chomu', state: 'Rajasthan' },
    { name: 'Sanchore', state: 'Rajasthan' },
    { name: 'Pipar', state: 'Rajasthan' },
    { name: 'Nagaur', state: 'Rajasthan' },
    { name: 'Hanumangarh', state: 'Rajasthan' },
    { name: 'Govindgarh', state: 'Rajasthan' },
    { name: 'Khajroli', state: 'Rajasthan' },
    { name: 'Rawla Mandi', state: 'Rajasthan' },
    { name: 'Anupgarh', state: 'Rajasthan' },
    { name: 'Pilibanga', state: 'Rajasthan' },
    { name: 'Abohar', state: 'Punjab' },
    { name: 'Fazilka', state: 'Punjab' }
  ];

  const filteredPlaces = selectedState === 'all' 
    ? places 
    : places.filter(place => place.state.toLowerCase() === selectedState);

  return (
    <div className="places-covered">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${selectedState === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedState('all')}
        >
          All Places
        </button>
        <button 
          className={`filter-btn rajasthan ${selectedState === 'rajasthan' ? 'active' : ''}`}
          onClick={() => setSelectedState('rajasthan')}
        >
          Rajasthan
        </button>
        <button 
          className={`filter-btn punjab ${selectedState === 'punjab' ? 'active' : ''}`}
          onClick={() => setSelectedState('punjab')}
        >
          Punjab
        </button>
      </div>

      {/* Places Grid */}
      <div className="places-grid">
        {filteredPlaces.map((place, index) => (
          <div
            key={index}
            className={`place-card ${place.state.toLowerCase()}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={`place-marker ${place.state.toLowerCase()}`}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="place-name">{place.name}</div>
            <div className="place-state">{place.state}</div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="places-summary">
        <div className="summary-item">
          <span className="summary-number">{filteredPlaces.length}</span>
          <span className="summary-label">Places Covered</span>
        </div>
      </div>
    </div>
  );
};

export default PlacesCovered;