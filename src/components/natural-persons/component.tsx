"use client";

import { useQuery } from "@tanstack/react-query";
import { getNaturalPersonSubmissionsAdmin } from "./actions";

export function NaturalPersonSubmissions() {
  const popiaQueries = useQuery({
    queryKey: ["natural-person-submissions"],
    queryFn: getNaturalPersonSubmissionsAdmin,
  });

  if (popiaQueries.isPending) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-7">
      <h1 className="font-sans text-xl font-bold">Natural Person Fica</h1>
      {popiaQueries.data?.map((item) => (
        <div className="rounded-md border bg-neutral-500 p-2" key={item.id}>
          <p>{item.fullNames}</p>
          <p>{item.email}</p>
          <p>{item.contactNumber}</p>
          <p>{item.maritalStatus}</p>
        </div>
      ))}
    </div>
  );
}
