export const metadata = { title: "Active Autism AI", description: "Clinical & Training Platform" };
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
