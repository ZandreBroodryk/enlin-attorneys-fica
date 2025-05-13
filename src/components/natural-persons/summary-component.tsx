"use client";

import { useQuery } from "@tanstack/react-query";
import { getNaturalPersonSubmissionsCount } from "./actions";
import QueryResult from "../query-result";
import Link from "next/link";

export default function NaturalPersonSubmissionsSummary() {
  const submissionsCountQuery = useQuery({
    queryKey: ["natural-person-submissions"],
    queryFn: getNaturalPersonSubmissionsCount,
  });

  return (
    <div className="flex flex-col">
      <h2 className="font-sans text-xl font-bold">
        Natural Person Submissions:
      </h2>
      <QueryResult query={submissionsCountQuery}>
        {(count) => <p>{count} submissions</p>}
      </QueryResult>
      <Link href={"/admin/natural-person"} className="text-blue-400">
        View
      </Link>
    </div>
  );
}
