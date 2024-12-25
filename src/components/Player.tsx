import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

const Player = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 w-1/4">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"
            alt="Album cover"
            className="w-14 h-14 rounded"
          />
          <div>
            <h4 className="text-sm font-semibold">Summer Nights</h4>
            <p className="text-xs text-gray-400">Artist Name</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white">
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipBack size={20} />
            </button>
            <button className="bg-white rounded-full p-2 text-black hover:scale-105 transition">
              <Play size={24} fill="black" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Repeat size={20} />
            </button>
          </div>
          <div className="w-full mt-2 flex items-center space-x-2">
            <span className="text-xs text-gray-400">2:14</span>
            <div className="flex-1 h-1 bg-gray-600 rounded-full">
              <div className="w-1/3 h-full bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 w-1/4 justify-end">
          <Volume2 size={20} />
          <div className="w-24 h-1 bg-gray-600 rounded-full">
            <div className="w-2/3 h-full bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;