"use client";

import { useQuery } from "@tanstack/react-query";
import QueryResult from "../query-result";
import Link from "next/link";
import { getTrustSubmissionsCount } from "./actions";

export default function TrustSubmissionsSummary() {
  const submissionsCountQuery = useQuery({
    queryKey: ["natural-person-submissions"],
    queryFn: getTrustSubmissionsCount,
  });

  return (
    <div className="flex flex-col">
      <h2 className="font-sans text-xl font-bold">Trust Submissions:</h2>
      <QueryResult query={submissionsCountQuery}>
        {(count) => <p>{count} submissions</p>}
      </QueryResult>
      <Link href={"/admin/trust"} className="text-blue-400">
        View
      </Link>
    </div>
  );
}
