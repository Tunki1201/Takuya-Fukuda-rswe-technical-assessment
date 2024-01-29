import TabCpn from "@/components/appStore/Tabs";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TabCpn />
      {children}
    </div>
  );
}
