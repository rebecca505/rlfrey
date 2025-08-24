import { AbsoluteCenter, Box, Button, Card, CardBody, CardFooter, CardHeader, Grid, GridItem, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import Courses from '../components/data/Classes.json'
import { useState } from "react";

export default function Classes() {
  const selectedYear = 'First';
  const selectedSem = 'Fall';
  const filteredCourses = Courses.filter(course => course.semester === selectedSem && course.year === selectedYear)
  const sortedCourses = [...filteredCourses].sort((a, b) => a.title.localeCompare(b.title))
  const numShown = useBreakpointValue({ base: 1, md: 1, lg: 2, xl: 3 });

  const [start, setStart] = useState(0);
  const mod = (n, m) => ((n % m) + m) % m;
  const sectionedCourses = Array.from({ length: numShown }, (_, i) => sortedCourses[mod(start + i, sortedCourses.length)]);

  function clickNext() {
    setStart(prev => prev + 1);
  }

  function clickBack() {
    setStart(prev => prev - 1);
  }

  return (
    <div>
      <Box position="relative" w="100%" h="100px" ><AbsoluteCenter axis="both"><Text textStyle="2xl">First-Year Fall</Text></AbsoluteCenter></Box>
      <Grid templateColumns="auto 1fr auto">
        <GridItem><Button variant="plain" onClick={clickBack}>BACK</Button></GridItem>
        <GridItem>
          <SimpleGrid px="20px" gap="20px" minChildWidth="350px">
            {sectionedCourses.map(course => (
              <Card.Root key={course.id} h="100%" backgroundImage={`url(${course.img})`} backgroundPosition="center">
                <CardHeader>{course.title}</CardHeader>
                <CardBody>{course.description}</CardBody>
                <CardFooter>{course.link} </CardFooter>
              </Card.Root>
            ))}
          </SimpleGrid>
        </GridItem>
        <GridItem><Button variant="plain" onClick={clickNext}>NEXT</Button></GridItem>
      </Grid>
    </div>
  );
}
