import Image from "next/image";
import SideBar from "../../components/ui/SideBar";
import MobileNav from "../../components/ui/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Mia",
    lastName: "Gonzales",
  };
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="w-full flex flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="menu icon" width={30} height={30} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
