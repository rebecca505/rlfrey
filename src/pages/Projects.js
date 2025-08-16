import { AbsoluteCenter, Box, Button, Card, Image, Text, SimpleGrid, CardHeader, CardBody, CardFooter, Flex, HStack, Separator, Link, Tag } from "@chakra-ui/react";
import Proj from '../components/data/Projects.json'
import { AiFillEye, AiOutlineCode } from "react-icons/ai";

export default function Projects() {
  const selectedClass = 'All';
  return (
    <div>
      <Box position="relative" w="100%" h="100px" ><AbsoluteCenter axis="both"><Text textStyle="2xl">{selectedClass}</Text></AbsoluteCenter></Box>

      <SimpleGrid px="20px" gap="20px" minChildWidth="350px">
        {Proj.map(proj =>
          selectedClass === 'All' || proj.class === selectedClass ? (
            <div>
              <Card.Root key={proj.id} h="100%">
                <CardHeader>
                  <Flex gap="5">
                    <Image w="50px" h="50px" src={proj.logo} borderRadius="lg" />
                    <Box>
                      <h1>{proj.title}</h1>
                      <Text color="gray.400" fontSize="xs"> by {proj.author} </Text>
                    </Box>
                  </Flex>
                  {proj.tag !== "" && (
                    <Box>
                      <Tag.Root>
                        <Tag.Label>{proj.tag}</Tag.Label>
                      </Tag.Root>
                    </Box>
                  )}
                </CardHeader>
                <CardBody color="gray.500">
                  {proj.description}
                </CardBody>
                <Separator variant="dotted" size="xs" pt="5" />
                <CardFooter justifyContent="flex-end">
                  <HStack gap="2">
                    {/* <Button variant="ghost" as={Link} href={proj.view}><AiFillEye /> View</Button> */}
                    <Button variant="ghost" as={Link} href={proj.code}><AiOutlineCode /> Code</Button>
                  </HStack>
                </CardFooter>
              </Card.Root>
            </div>) : null)}
      </SimpleGrid>
    </div>
  );
}
