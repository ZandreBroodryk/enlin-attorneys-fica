import Header from "@/components/header";

export default function FicaFormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen max-w-screen bg-white text-black">
      <Header />
      <div className="h-20" />
      <div className="flex flex-col place-items-center px-7">{children}</div>
    </div>
  );
}
