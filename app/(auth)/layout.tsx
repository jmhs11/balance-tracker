import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center h-full">
      {/* <Link href={"/"}>Go back</Link> */}
      {children}
    </div>
  );
}
