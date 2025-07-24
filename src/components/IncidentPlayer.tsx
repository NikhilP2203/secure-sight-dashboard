"use client";

export default function IncidentPlayer() {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden w-full h-[500px]">
      {/* Main Image Placeholder */}
      <img
        src="/video-placeholder.png"
        alt="Video Placeholder"
        className="w-full h-full object-cover"
      />

      {/* Camera thumbnails at bottom-right */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {["cam1.png", "cam2.png"].map((cam, index) => (
          <img
            key={index}
            src={`/${cam}`}
            alt={`Camera ${index + 1}`}
            className="w-16 h-16 object-cover rounded-md border-2 border-white shadow-md hover:scale-105 transition-transform duration-200"
          />
        ))}
      </div>
    </div>
  );
}
