import { AbsoluteCenter, Box, Text } from "@chakra-ui/react";

export default function Classes() {
  return (
    <div>
      <h1>hi</h1>
      <p>This is my classes.</p>
      <Box position="relative" w="100%" h="100px" ><AbsoluteCenter axis="both"><Text textStyle="2xl">First-Year Fall</Text></AbsoluteCenter></Box>
    </div>
  );
}
