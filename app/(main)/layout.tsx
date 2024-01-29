import HeaderCpn from "@/components/header";
import FooterCpn from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[390px] block m-auto bg-[white] mt-[100px]">
      <HeaderCpn />
      {children}
      <FooterCpn />
    </div>
  );
}
