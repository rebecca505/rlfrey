import { Tabs } from "@chakra-ui/react"
import { useNavigate, useLocation } from "react-router-dom"
import { useColorModeValue } from "./ui/color-mode";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab = location.pathname.slice(1) || "home";
  const colorBg = useColorModeValue("white", "black")

  return (
    <Tabs.Root position="sticky" top="0" value={currentTab} variant="outline" p="1" zIndex= "1000" backgroundColor= {colorBg}>
      <Tabs.List>
        <Tabs.Trigger value="home" onClick={() => navigate("/")}>
          Home
        </Tabs.Trigger>
        <Tabs.Trigger value="projects" onClick={() => navigate("/projects")}>
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="classes" onClick={() => navigate("/classes")}>
          Classes
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}
