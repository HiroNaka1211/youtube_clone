import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { MainSection } from "./main-section";
import { Separator } from "@/components/ui/separator";
import { PersonalSection } from "./personal-section";

export const HomeSidebar = () => {
  return (
    <Sidebar className="top-[56px] border-none z-50">
      <SidebarContent className="bg-background">
        <MainSection />
        {/* The line for separating sections */}
        <Separator />
        {/* This section is showed only when the user logged in */}
        <PersonalSection />
      </SidebarContent>
    </Sidebar>
  );
};
