import { AbsoluteCenter, Box, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text } from "@chakra-ui/react";

export default function Classes() {
  return (
    <div>
      <Box position="relative" w="100%" h="100px" ><AbsoluteCenter axis="both"><Text textStyle="2xl">First-Year Fall</Text></AbsoluteCenter></Box>
      
      <SimpleGrid px="20px" gap="20px" minChildWidth="350px">
      <Card.Root backgroundImage="url('/images/whatscookin.png')">
        <CardHeader>title</CardHeader>
        <CardBody>description</CardBody>
        <CardFooter>link</CardFooter>
      </Card.Root>
      <Card.Root backgroundImage="url('/images/whatscookin.png')">
        <CardHeader>title</CardHeader>
        <CardBody>description</CardBody>
        <CardFooter>link</CardFooter>
      </Card.Root>
      <Card.Root backgroundImage="url('/images/whatscookin.png')">
        <CardHeader>title</CardHeader>
        <CardBody>description</CardBody>
        <CardFooter>link</CardFooter>
      </Card.Root>
      </SimpleGrid>
    </div>
  );
}
