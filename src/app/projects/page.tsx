import React from 'react';
import Sidebar from '@/components/Sidebar';
import MenuBar from '@/components/MenuBar';
import Canvas from '@/components/Canvas';

export default function Projects() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <MenuBar />
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
                  <h1 className="text-4xl font-bold mb-8">Projects</h1>
                  <p className="text-gray-500">Start organizing your projects here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 