import { Tabs } from "@chakra-ui/react"
import { useNavigate, useLocation } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab = location.pathname.slice(1) || "home";

  return (
    <Tabs.Root value={currentTab} variant="outline" p="1">
      <Tabs.List>
        <Tabs.Trigger value="home" onClick={() => navigate("/")}>
          Home
        </Tabs.Trigger>
        <Tabs.Trigger value="projects" onClick={() => navigate("/projects")}>
          Projects
        </Tabs.Trigger>
        {/* <Tabs.Trigger value="classes" onClick={() => navigate("/classes")}>
          Classes
        </Tabs.Trigger> */}
      </Tabs.List>
    </Tabs.Root>
  );
}
