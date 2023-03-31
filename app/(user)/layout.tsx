import "../../src/app/globals.css";
import Header from "../../components/Header";

export const metadata = {
  title: "The Blog",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* <Banner /> */}
        {children}
      </body>
    </html>
  );
}
