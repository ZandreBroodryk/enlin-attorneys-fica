"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function FicaFormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <div className="min-h-screen max-w-screen">
      {/* <div className="h-20" /> */}
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col place-items-center px-7">{children}</div>
      </QueryClientProvider>
    </div>
  );
}
