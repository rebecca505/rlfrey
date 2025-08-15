import { Grid, Box, AbsoluteCenter, Button, Tabs } from "@chakra-ui/react";
import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom"
import Navbar from '../components/Navbar';

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <Box ml="5" mt="2" mb="7">
        <text>Hi, my name is</text>
      </Box>

      <Box
        as="section"
        position="relative"
        w="100%"
        h={{ base: "50px", sm: "100px", md: "150px", xl: "200px", "2xl": "250px" }}
        overflow="hidden"
        bg="transparent"
      >
        <Box position="absolute" top="0" left="0" w="100%">
          <Spline scene="https://prod.spline.design/mC26st2WiUIQecBw/scene.splinecode" />
        </Box>
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        <Box ml="5" mt="7">
          I am a Computer Science and Mathematics student at Barnard College of Columbia University.
          <br />
          <br />
          I create projects and tools that turn real-world problems into elegant, usable solutions.
          From leading Girls Who Code workshops to developing innovative projects like 'What's Cookin',' I combine technical skill with curiosity to bring ideas to life.
          <br />
        </Box>
        <Box position="relative"> 
          <AbsoluteCenter  axis="both">
            <Grid templateRows="repeat(2, 1fr)" gap={10}>
              <Button onClick={() => navigate("/projects")}>My Projects</Button>
              <Button onClick={() => navigate("/classes")}>My Classes</Button>
            </Grid>
            </AbsoluteCenter> 
          </Box>
      </Grid>
    </div>
  );
}
