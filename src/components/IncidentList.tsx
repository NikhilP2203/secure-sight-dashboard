"use client";

import Image from "next/image";

interface Incident {
  id: number;
  type: string;
  thumbnailUrl: string;
  tsStart: string;
  tsEnd: string;
  resolved: boolean;
}

export default function IncidentList({ incidents }: { incidents: Incident[] }) {
  return (
    <div className="bg-[#1a1a1a] p-4 rounded-lg w-[400px]">
      {/* Header */}
      <h2 className="text-red-500 font-bold text-lg mb-4">
        ⚠ {incidents.length} Unresolved Incidents
      </h2>

      {/* Scrollable list */}
      <div className="space-y-4 overflow-y-auto max-h-[380px] pr-2">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="flex items-center gap-3 bg-[#262626] p-3 rounded-lg hover:bg-[#333333] transition"
          >
            {/* Thumbnail */}
            <Image
              src={incident.thumbnailUrl}
              alt={incident.type}
              width={70}
              height={70}
              className="rounded-md object-cover"
            />
            {/* Info */}
            <div className="flex-1">
              <p className="font-semibold text-gray-200">{incident.type}</p>
              <p className="text-gray-400 text-xs">
                {new Date(incident.tsStart).toLocaleString()}
              </p>
            </div>
            {/* Status */}
            {!incident.resolved && (
              <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                Active
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
