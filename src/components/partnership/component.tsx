"use client";

import { useQuery } from "@tanstack/react-query";
import { paginationType } from "@/lib/shared";
import { useState } from "react";
import { getPartnershipSubmissionsAdmin } from "./actions";
import PaginationQueryResult from "../pagination-query-result";

export function PartnershipSubmissions() {
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
    queryFn: () => getPartnershipSubmissionsAdmin(pagination),
  });

  return (
    <div className="flex flex-col gap-7">
      <h1 className="font-sans text-xl font-bold">Partnership Fica</h1>
      <PaginationQueryResult
        pagination={pagination}
        query={naturalPersonQuery}
        setPagination={setPagination}
      >
        {(submissions) =>
          submissions.map((item) => (
            <div className="rounded-md border bg-neutral-500 p-2" key={item.id}>
              <p>{item.partnershipTradingName}</p>
              <p>{item.primaryEmail}</p>
              <p>{item.primaryContactNr}</p>
              <p>{item.placeOfBusiness}</p>
            </div>
          ))
        }
      </PaginationQueryResult>
    </div>
  );
}
