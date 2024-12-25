import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-black h-full p-6">
      <div className="text-white mb-8">
        <h1 className="text-2xl font-bold mb-8">Spotify</h1>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-4 text-gray-300 hover:text-white">
            <Home size={24} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-4 text-gray-300 hover:text-white">
            <Search size={24} />
            <span>Search</span>
          </a>
          <a href="#" className="flex items-center space-x-4 text-gray-300 hover:text-white">
            <Library size={24} />
            <span>Your Library</span>
          </a>
        </nav>
      </div>
      
      <div className="mt-8">
        <div className="text-white space-y-4">
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <Plus size={24} className="p-1 bg-gray-300 text-black rounded-sm" />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <Heart size={24} className="p-1 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-sm" />
            <span>Liked Songs</span>
          </button>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="text-sm text-gray-400">
            {['Chill Vibes', 'Rock Classics', 'Jazz Collection', 'Workout Mix'].map((playlist) => (
              <div key={playlist} className="py-2 hover:text-white cursor-pointer">
                {playlist}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;