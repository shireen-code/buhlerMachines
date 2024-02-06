// App.tsx
import React, { useState, useEffect } from 'react';
import Navigation from './components/header/Navigation';
import Overview from './components/Overview/Overview';
import './App.css';
import { Machine } from './types'; // Adjust the path as needed


const App: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    // Fetch machine data from JSON file or API
    const fetchMachineData = async () => {
      try {
        const data: Machine[] = [
          { name: 'Scale', state: 'Running', icon: 'aspect_ratio', color: 'green', stateIcon: 'refresh'},
          { name: 'Bag Attach', state: 'Alarm', icon:  'view_list', color: 'green',stateIcon: 'alarm_add'},
          { name: 'Packer', state: 'Running', icon: 'view_list', color: 'red', stateIcon: 'refresh'},
          { name: 'Bag Closer', state: 'Warning', icon: 'grid_on', color: 'orange', stateIcon: 'warning' }
        ];
        setMachines(data);
      } catch (error) {
        console.error('Error fetching machine data:', error);
      }
    };

    fetchMachineData();
  }, []);

  return (
    <div className="app-container">
      <Navigation machines={machines} />
      <Overview machines={machines} />
    </div>
  );
};

export default App;
