import Navbar from "@/components/navbar";
import IncidentPlayer from "@/components/IncidentPlayer";
import IncidentList from "@/components/IncidentList";

async function getIncidents() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // ✅ fallback for local dev
  const res = await fetch(`${baseUrl}/api/incidents`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const incidents = await getIncidents();

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="p-6 flex flex-col gap-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Incident Player */}
          <div className="flex-1">
            <IncidentPlayer />
          </div>

          {/* Right: Incident List */}
          <div className="w-full lg:w-[400px]">
            <IncidentList incidents={incidents} />
          </div>
        </div>

        {/* Bottom Section: Timeline Placeholder */}
        <div className="bg-[#1A1A1A] h-[150px] rounded-lg mt-4 flex items-center justify-center text-gray-500">
          Timeline / Camera List will go here...
        </div>
      </main>
    </div>
  );
}
