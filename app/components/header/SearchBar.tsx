'use client';

import { SearchIcon } from '../icons';

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for:"
        className="w-48 pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-[#0061af] transition-colors"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#231f20]">
        <SearchIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
