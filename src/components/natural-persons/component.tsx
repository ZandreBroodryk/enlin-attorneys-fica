"use client";

import { useQuery } from "@tanstack/react-query";
import { getNaturalPersonSubmissionsAdmin } from "./actions";
import { paginationType } from "@/lib/shared";
import { useState } from "react";
import PaginationQueryResult from "../pagination-query-result";

export function NaturalPersonSubmissions() {
  const [pagination, setPagination] = useState<paginationType>({
    pageNumber: 1,
    pageSize: 10,
  });
  const naturalPersonQuery = useQuery({
    queryKey: [
      "natural-person-submissions",
      pagination.pageNumber,
      pagination.pageSize,
    ],
    queryFn: () => getNaturalPersonSubmissionsAdmin(pagination),
  });

  return (
    <div className="flex flex-col gap-7">
      <h1 className="font-sans text-xl font-bold">Natural Person Fica</h1>
      <PaginationQueryResult
        query={naturalPersonQuery}
        pagination={pagination}
        setPagination={setPagination}
      >
        {(submissons) =>
          submissons.map((item) => (
            <div className="rounded-md border bg-neutral-500 p-2" key={item.id}>
              <p>{item.fullNames}</p>
              <p>{item.email}</p>
              <p>{item.contactNumber}</p>
              <p>{item.maritalStatus}</p>
            </div>
          ))
        }
      </PaginationQueryResult>
    </div>
  );
}
