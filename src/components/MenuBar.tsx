import React from 'react';

const MenuBar = () => {
  return (
    <div className="h-12 border-b border-notion-border bg-white flex items-center px-4 space-x-4">
      <div className="flex space-x-2">
        <button className="p-2 hover:bg-gray-100 rounded">
          <span className="font-bold">B</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <span className="italic">I</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <span className="underline">U</span>
        </button>
      </div>
      <div className="h-6 w-px bg-notion-border"></div>
      <div className="flex space-x-2">
        <button className="p-2 hover:bg-gray-100 rounded">
          <span>H1</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <span>H2</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <span>H3</span>
        </button>
      </div>
      <div className="h-6 w-px bg-notion-border"></div>
      <div className="flex space-x-2">
        <button className="p-2 hover:bg-gray-100 rounded">
          <span>📝</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <span>📋</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <span>📊</span>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
