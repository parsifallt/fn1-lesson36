"use client";

import {
  Bell,
  ChevronDown,
  Link,
  MoreVertical,
  Paperclip,
  Search,
  Send,
  Settings,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function MessagesPage() {
  return (
    <div className="flex h-screen">
      <div className="w-64 border-r flex flex-col">
        <div className="p-4 ">
          <div className="flex items-center gap-2 mb-8">
            <img src="/Logo2222.svg" alt="rasm" />
          </div>

          <nav className="space-y-1 ">
            <a
              href="Dashboard"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              </svg>
              Dashboard
            </a>
            <a
              href="Messages"
              className="flex items-center gap-3 px-3 py-2 text-indigo-600 bg-indigo-50 rounded-lg"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              Messages
              <span className="ml-auto bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                1
              </span>
            </a>
            <a
              href="My Applications"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              My Applications
            </a>
            <a
              href="FindJobs"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M11 4a7 7 0 1 0 4.9 12l3.4 3.4a1 1 0 0 0 1.4-1.4l-3.4-3.4A7 7 0 0 0 11 4zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
              </svg>
              Find Jobs
            </a>
            <a
              href="BrowseCompanies"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 20V8l8-5 8 5v12H4zM10 14h4v6h-4v-6zM6 10h2v2H6v-2zM16 10h2v2h-2v-2z" />
              </svg>
              Browse Companies
            </a>
            <a
              href="MyPublicProfile"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM4 20a8 8 0 1 1 16 0H4z" />
              </svg>
              My Public Profile
            </a>
          </nav>
        </div>

        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-3">
            <img
              src="/Avatar5.svg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-medium">Jake Gyll</div>
              <div className="text-sm text-gray-500">jakegyll@email.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <main>
          <header className="flex items-center justify-between px-16 py-5 bg-white border-b border-blue-500 ">
            <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>
            <nav className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-blue-600" />
              <a
                href="/"
                className="text-blue-600 hover:text-blue-700 text-base transition-colors font-medium"
              >
                Back to homepage
              </a>
            </nav>
          </header>
        </main>

        <div className="flex">
          <div className="w-80 border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="h-[510px]  ">
              <div className="p-4 bg-indigo-50">
                <div className="flex gap-3 w-[200px]">
                  <img
                    src="/Avatar.svg"
                    alt="Jan"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1 ">
                    <div className="flex items-center justify-between w-[240px]">
                      <div className="font-medium">Jan Mayer</div>
                      <div className="text-sm text-gray-500 ">12 mins ago</div>
                    </div>
                    <div className="text-sm text-gray-600 truncate w-[240px]">
                      We want to invite you for a quick interview...
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-3">
                  <img
                    src="/Avatar2.svg"
                    alt="Jan"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Joe Bartmann</div>
                      <div className="text-sm text-gray-500">3:40 PM</div>
                    </div>
                    <div className="text-sm text-gray-600 truncate">
                      Hey thanks for your interview...
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-3">
                  <img
                    src="/Avatar3.svg"
                    alt="Jan"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Ally Wales</div>
                      <div className="text-sm text-gray-500">3:40 PM</div>
                    </div>
                    <div className="text-sm text-gray-600 truncate">
                      Hey thanks for your interview...
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-3">
                  <img
                    src="/Avatar5.svg"
                    alt="Jan"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">James Garden</div>
                      <div className="text-sm text-gray-500">3:40 PM</div>
                    </div>
                    <div className="text-sm text-gray-600 truncate">
                      Hey thanks for your interview...
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-3">
                  <img
                    src="/Avatar6.svg"
                    alt="Jan"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Alison Gayte</div>
                      <div className="text-sm text-gray-500">3:40 PM</div>
                    </div>
                    <div className="text-sm text-gray-600 truncate">
                      Hey thanks for your interview...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <img
                  src="/Avatar.svg"
                  alt="Jan"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium">Jan Mayer</div>
                  <div className="text-sm text-gray-500">
                    Recruiter at Nomad
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Link className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Star className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
              <div className="flex gap-3">
                <img
                  src="/Avatar.svg"
                  alt="Jan"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p>
                      Hey Jake, I wanted to reach out because we saw your work
                      contributions and were impressed by your work.
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p>We want to invite you for a quick interview</p>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">12 mins ago</div>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="flex-1 flex justify-end">
                  <div className="bg-indigo-600 text-white rounded-lg p-3 max-w-[80%]">
                    <p>
                      Hi Jan, sure I would love to. Thanks for taking the time
                      to see my work!
                    </p>
                  </div>
                </div>
                <img
                  src="/Avatar5.svg"
                  alt="You"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="text-sm text-gray-500 mt-1 flex-1 flex justify-end pr-10">
                12 mins ago
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Paperclip className="w-5 h-5 text-gray-500" />
                </button>
                <input
                  type="text"
                  placeholder="Reply message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
