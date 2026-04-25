import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'


const navItems = ['Home', 'About Us', 'Products', 'Gallery', 'Contact']

const features = [
  ['Premium Quality', 'Crafted to perfection'],
  ['Warranty Protection', 'Guaranteed excellence'],
  ['Timely Shipping', 'Prompt delivery assurance'],
  ['Sustainable Artistry', 'Eco-friendly practices'],
]

const techniques = [
  {
    title: 'Traditional Textile Screen Printing',
    desc: 'Extensively used for garments, fabrics, and accessories with rich detail.',
  },
  {
    title: 'Advanced UV Screen Printing',
    desc: 'Instant UV curing allows faster production and durable vibrant prints.',
  },
  {
    title: 'Four-Color Process Printing',
    desc: 'CMYK workflow for realistic full-color images and soft gradients.',
  },
]

export default function App() {
  return (
    <Box bg="#f7f3ea" color="#1e1e1e" fontFamily="Inter, sans-serif">
      <Box bg="#163a2f" color="white" py={2} textAlign="center" fontSize="sm">
        Rasi offers worldwide print export services!
      </Box>

      <Container maxW="1200px" py={6}>
        <Flex justify="space-between" align="center" mb={12}>
          <Heading size="md" letterSpacing="widest">RASI PRINTS</Heading>
          <HStack spacing={8} fontWeight="medium">
            {navItems.map((item) => (
              <Text key={item}>{item}</Text>
            ))}
          </HStack>
        </Flex>

        <Grid templateColumns="1.1fr 0.9fr" gap={10} alignItems="center" mb={20}>
          <VStack align="start" spacing={6}>
            <Heading size="2xl" lineHeight="1.1">
              Elevating Every Print With Precision and Passion.
            </Heading>
            <Text fontSize="lg" color="gray.700">
              Rasi Screen Printing, where tradition meets innovation to deliver exquisite designs
              with every stroke.
            </Text>
            <Button bg="#c89b5f" color="white" _hover={{ bg: '#a87e47' }}>
              Contact us
            </Button>
          </VStack>
          <Image
            src="https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&w=900&q=80"
            alt="Screen printing"
            h="420px"
            w="100%"
            objectFit="cover"
            borderRadius="xl"
          />
        </Grid>

        <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={20}>
          {features.map(([title, sub]) => (
            <Box key={title} bg="white" borderRadius="lg" p={5} boxShadow="sm">
              <Heading size="sm" mb={2}>{title}</Heading>
              <Text fontSize="sm" color="gray.600">{sub}</Text>
            </Box>
          ))}
        </Grid>

        <Heading size="xl" mb={4}>Rasi&apos;s Array of Screen Printing Techniques</Heading>
        <Text color="gray.600" mb={8}>
          Dive into a diverse range of methods, from classic textile workflows to modern UV and
          process-driven output.
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={20}>
          {techniques.map((item, i) => (
            <Box key={item.title} bg="white" borderRadius="lg" overflow="hidden" boxShadow="sm">
              <Image
                src={`https://picsum.photos/seed/rasi-${i + 1}/700/420`}
                alt={item.title}
                h="220px"
                w="100%"
                objectFit="cover"
              />
              <Box p={5}>
                <Heading size="md" mb={3}>{item.title}</Heading>
                <Text color="gray.600">{item.desc}</Text>
              </Box>
            </Box>
          ))}
        </Grid>

        <Box bg="white" borderRadius="xl" p={10} mb={20}>
          <Heading size="lg" mb={4}>Client Praise for Rasi Screen Printing</Heading>
          <Text fontSize="lg" color="gray.700" mb={4}>
            “High quality printing and always on time. Their professionalism and finishing quality
            consistently exceed expectations.”
          </Text>
          <HStack color="#c89b5f" spacing={3}>
            <Text>✓</Text>
            <Text fontWeight="semibold">Mr. Manjunath Gowda / CFO</Text>
          </HStack>
        </Box>
      </Container>

      <Box bg="#163a2f" color="white" py={14}>
        <Container maxW="1200px">
          <Grid templateColumns="2fr 1fr 1fr" gap={10}>
            <Box>
              <Heading size="md" mb={3}>WE ARE THE BEST!</Heading>
              <Text color="gray.200">
                Rasi is a premier destination for unparalleled excellence in screen printing services.
              </Text>
            </Box>
            <Stack>
              <Heading size="sm">SITEMAP</Heading>
              {navItems.map((item) => (
                <Text key={item}>{item}</Text>
              ))}
            </Stack>
            <Stack>
              <Heading size="sm">HEAD OFFICE</Heading>
              <Text>No 712, Dharapuram Road, Tirupur - 641605</Text>
              <Text>6238641240</Text>
              <Text>rasiprinting1989@gmail.com</Text>
            </Stack>
          </Grid>
          <Text mt={10} fontSize="sm" color="gray.300">
            Copyright 2024, All Rights Reserved by Galvin Design Studio.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
