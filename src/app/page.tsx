import React from 'react';
import Sidebar from '@/components/Sidebar';
import MenuBar from '@/components/MenuBar';
import Canvas from '@/components/Canvas';

export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <MenuBar />
        <Canvas />
      </div>
    </main>
  );
}
