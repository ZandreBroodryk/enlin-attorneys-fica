import NaturalPersonSubmissionsSummary from "@/components/natural-persons/summary-component";
import PartnershipSubmissionsSummary from "@/components/partnership/summary-component";
import PopiaSubmissionsSummary from "@/components/popia-submissions/summary-component";
import TrustSubmissionsSummary from "@/components/trust/summary-component";

export default function AdminDashboardPage() {
  return (
    <>
      <h1 className="py-2 text-4xl">Completed Documents</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <PopiaSubmissionsSummary />
        <NaturalPersonSubmissionsSummary />
        <PartnershipSubmissionsSummary />
        <TrustSubmissionsSummary />
      </div>
    </>
  );
}
