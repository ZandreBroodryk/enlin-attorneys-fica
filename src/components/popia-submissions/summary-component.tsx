"use client";

import { useQuery } from "@tanstack/react-query";
import QueryResult from "../query-result";
import Link from "next/link";
import { getPopiaSubmissionsCount } from "./actions";

export default function PopiaSubmissionsSummary() {
  const submissionsCountQuery = useQuery({
    queryKey: ["popia-submissions"],
    queryFn: getPopiaSubmissionsCount,
  });

  return (
    <div className="flex flex-col">
      <h2 className="font-sans text-xl font-bold">
        Consent in terms of the Protection of Personal Information Act
        Submissions:
      </h2>
      <QueryResult query={submissionsCountQuery}>
        {(count) => <p>{count} submissions</p>}
      </QueryResult>
      <Link href={"/admin/popia"} className="text-blue-400">
        View
      </Link>
    </div>
  );
}
