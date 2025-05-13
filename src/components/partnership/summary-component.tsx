"use client";

import { useQuery } from "@tanstack/react-query";
import QueryResult from "../query-result";
import Link from "next/link";
import { getPartnershipSubmissionsCount } from "./actions";

export default function PartnershipSubmissionsSummary() {
  const submissionsCountQuery = useQuery({
    queryKey: ["partnership-submissions"],
    queryFn: getPartnershipSubmissionsCount,
  });

  return (
    <div className="flex flex-col">
      <h2 className="font-sans text-xl font-bold">Partnership Submissions:</h2>
      <QueryResult query={submissionsCountQuery}>
        {(count) => <p>{count} submissions</p>}
      </QueryResult>
      <Link href={"/admin/partnership"} className="text-blue-400">
        View
      </Link>
    </div>
  );
}
