import { NaturalPersonSubmissions } from "@/components/natural-persons/component";
import { PopiaSubmissions } from "@/components/popia-submissions/component";

export default function AdminDashboardPage() {
  return (
    <>
      <h1 className="py-2 text-4xl">Completed Documents</h1>
      <div className="grid grid-cols-3">
        <PopiaSubmissions />
        <NaturalPersonSubmissions />
      </div>
    </>
  );
}
