import React from 'react';

const Canvas = () => {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <div
              contentEditable
              className="min-h-[500px] outline-none"
              data-placeholder="Type '/' for commands..."
              suppressContentEditableWarning
            >
              <h1 className="text-4xl font-bold mb-8">Untitled</h1>
              <p className="text-gray-500">Start writing here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
