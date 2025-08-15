import { Box } from "@chakra-ui/react";
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div>
      <Box
        as="section"
        position="relative"
        w="100%"
        h="200px"
        overflow="hidden"
        bg="transparent"
      >
        <Box position="absolute" top="0" left="0" w="100%">
          <Spline scene="https://prod.spline.design/mC26st2WiUIQecBw/scene.splinecode" />
        </Box>
      </Box>
      <h1>Welcome to My Site</h1>
      <p>This is the Home page.</p>
    </div>
  );
}
