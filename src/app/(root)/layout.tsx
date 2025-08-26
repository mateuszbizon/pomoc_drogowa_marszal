import CompanyInfo from "@/components/common/CompanyInfo";
import Nav from "@/components/common/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <CompanyInfo />
        <Nav />
        <main>
            {children}
        </main>
    </>
  );
}
