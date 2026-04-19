import CompanyInfo from "@/components/common/CompanyInfo";
import Footer from "@/components/common/Footer";
import NavBlog from "@/components/common/NavBlog";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <CompanyInfo />
        <NavBlog />
        <main>
            {children}
        </main>
        <Footer />
    </>
  );
}
