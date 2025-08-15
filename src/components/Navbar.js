import { Tabs } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <Tabs.Root defaultValue="home" variant="outline" p="1">
      <Tabs.List>
        <Tabs.Trigger  value="home" onClick={() => navigate("/")}>
            Home
        </Tabs.Trigger>
        <Tabs.Trigger  value="about" onClick={() => navigate("/about")}>
            About Me
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}