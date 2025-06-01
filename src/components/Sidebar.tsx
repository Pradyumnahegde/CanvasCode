'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  const [pages, setPages] = useState<Array<{ id: string; title: string }>>([]);

  const createNewPage = () => {
    const pageId = `page-${pages.length + 1}`;
    const newPage = {
      id: pageId,
      title: `New Page ${pages.length + 1}`
    };
    setPages([...pages, newPage]);
    router.push(`/${pageId}`);
  };

  return (
    <div className="w-64 h-screen bg-notion-sidebar border-r border-notion-border flex flex-col">
      <div className="p-4 border-b border-notion-border">
        <h1 className="text-xl font-semibold">My Workspace</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          <Link href="/quick-notes">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              <span>📝</span>
              <span>Quick Notes</span>
            </div>
          </Link>
          <Link href="/projects">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              <span>📚</span>
              <span>Projects</span>
            </div>
          </Link>
          {pages.map((page) => (
            <Link href={`/${page.id}`} key={page.id}>
              <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                <span>📄</span>
                <span>{page.title}</span>
              </div>
            </Link>
          ))}
          <div className="border-t border-notion-border my-2"></div>
          <div 
            onClick={createNewPage}
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer text-gray-600"
          >
            <span>+</span>
            <span>New Tab</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
