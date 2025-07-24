"use client";
import { Home, Camera, Video, AlertTriangle, Users } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#111] via-[#222] to-[#1a1a1a] text-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="text-xl font-bold">MANDLACX</span>
      </div>

      {/* Center: Navigation */}
      <div className="flex items-center gap-8">
        <a href="#" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300">
          <Home size={18} /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-yellow-300">
          <Camera size={18} /> Cameras
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-yellow-300">
          <Video size={18} /> Scenes
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-yellow-300">
          <AlertTriangle size={18} /> Incidents
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-yellow-300">
          <Users size={18} /> Users
        </a>
      </div>

      {/* Right: User Profile */}
      <div className="flex items-center gap-3">
        <img
          src="/avatar.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border border-gray-600"
        />
        <div className="text-right">
          <p className="font-semibold">Mohammed Ajhas</p>
          <p className="text-sm text-gray-400">ajhas@mandlac.com</p>
        </div>
        <span className="text-gray-400 text-lg">▼</span>
      </div>
    </nav>
  );
}
