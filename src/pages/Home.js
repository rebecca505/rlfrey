import { Grid, Box, AbsoluteCenter, Button, Tabs, useBreakpointValue } from "@chakra-ui/react";
import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom"
import { useColorModeValue } from "../components/ui/color-mode";

export default function Home() {
  const navigate = useNavigate()
  const dynamicHeight = useBreakpointValue({
    base: "50px",
    sm: "90px",
    md: "130px",
    lg: "180px",
    xl: "200px",
    "2xl": "250px",
  });
  const splinebg = useColorModeValue('https://prod.spline.design/mC26st2WiUIQecBw/scene.splinecode', 'https://prod.spline.design/QrfJmR0y04DU0GbM/scene.splinecode')

  return (
    <div>
      <Box ml="5" mt="2" mb="7">
        <text>Hi, my name is</text>
      </Box>

      <Box
        as="section"
        position="relative"
        w="100%"
        h={dynamicHeight}
        overflow="hidden"
        bg="transparent"
      >
        <Box position="absolute" top="0" left="0" w="100%">
          <Spline alt="Rebecca Frey" scene={splinebg} />
        </Box>
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        <Box ml="5" mt="7">
          I am a Computer Science and Mathematics student at Barnard College of Columbia University. Class of 2027.
          <br />
          <br />
          I create projects and tools that turn real-world problems into elegant, usable solutions.
          From leading Girls Who Code workshops to developing innovative projects like 'What's Cookin',' I combine technical skill with curiosity to bring ideas to life.
          <br />
        </Box>
        <Box position="relative"> 
          <AbsoluteCenter  axis="both">
            <Grid templateRows="repeat(2, 1fr)" gap={10}>
              <Button minW="150px" onClick={() => navigate("/projects")}>My Projects</Button>
              <Button onClick={() => navigate("/classes")}>My Classes</Button>
            </Grid>
            </AbsoluteCenter> 
          </Box>
      </Grid>
    </div>
  );
}
