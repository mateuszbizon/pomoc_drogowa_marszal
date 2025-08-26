import CompanyInfo from "@/components/common/CompanyInfo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <CompanyInfo />
        <main>
            {children}
        </main>
    </>
  );
}
