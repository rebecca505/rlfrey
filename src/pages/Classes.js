import { AbsoluteCenter, Box, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text } from "@chakra-ui/react";
import Courses from '../components/data/Classes.json'

export default function Classes() {
  return (
    <div>
      <Box position="relative" w="100%" h="100px" ><AbsoluteCenter axis="both"><Text textStyle="2xl">First-Year Fall</Text></AbsoluteCenter></Box>

      <SimpleGrid px="20px" gap="20px" minChildWidth="350px">
        {Courses.map(course => (
            <div>
              <Card.Root key={course.id} h="100%" backgroundImage="url('course.img')">
                <CardHeader>{course.title}</CardHeader>
                <CardBody>{course.description}</CardBody>
                <CardFooter>{course.link}</CardFooter>
              </Card.Root>
            </div>))}
      </SimpleGrid>
    </div>
  );
}
