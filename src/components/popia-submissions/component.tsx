"use client";

import { useQuery } from "@tanstack/react-query";
import { getPopiaSubmissionsAdmin } from "./actions";
import { useState } from "react";
import { paginationType } from "@/lib/shared";
import Pagination from "../pagination";
import Loader from "../loader";

export function PopiaSubmissions() {
  const [pagination, setPagination] = useState<paginationType>({
    pageNumber: 1,
    pageSize: 10,
  });
  const popiaQuery = useQuery({
    queryKey: ["popia-submissions", pagination.pageSize, pagination.pageNumber],
    queryFn: () => getPopiaSubmissionsAdmin(pagination),
  });

  return (
    <div className="flex flex-col gap-7">
      <h1 className="font-sans text-xl font-bold">
        Consent in terms of the Protection of Personal Information Act
      </h1>
      {popiaQuery.isLoading && <Loader />}
      {popiaQuery.data?.items.map((item) => (
        <div className="rounded-md border bg-neutral-500 p-2" key={item.id}>
          <p>
            {item.email} has signed POPIA compliance on {item.date}
          </p>
          <p>their signature on record:</p>
          {item.signature.startsWith("data:image/") ? (
            <img src={item.signature} alt="user signature" />
          ) : (
            <p>{item.signature}</p>
          )}
        </div>
      ))}
      <div className="flex flex-row gap-4">
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
          query={popiaQuery}
        />
      </div>
    </div>
  );
}
