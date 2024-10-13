import SideNav from "@/app/(workspace)/ui/sidenav";
import { ScrollArea } from "@/components/ui/scroll-area";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 pb-0 md:overflow-y-auto">
        <ScrollArea>{children}</ScrollArea>
      </div>
    </div>
  );
}
