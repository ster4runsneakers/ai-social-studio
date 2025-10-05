import React from "react";
import {
  Box,
  Heading,
  Checkbox,
  VStack,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const messages = {
  en: {
    title: "Create Social Media Post",
    caption: "Caption",
    hook: "Hook",
    cta: "Call to Action",
    hashtags: "Hashtags",
    emojis: "Add Emojis",
    generate: "Generate",
  },
  el: {
    title: "Δημιουργία Δημοσίευσης για Social Media",
    caption: "Κείμενο",
    hook: "Hook",
    cta: "Παρότρυνση (CTA)",
    hashtags: "Hashtags",
    emojis: "Προσθήκη Emojis",
    generate: "Δημιούργησε",
  },
};

function SocialPostCreatorChakra({ lang }) {
  const t = messages[lang] || messages.en;
  const size = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box maxW="400px" mx="auto" my={8} p={6} borderRadius="lg" bg="gray.50" boxShadow="md">
      <Heading as="h2" size={size} mb={4} textAlign="center">{t.title}</Heading>
      <VStack spacing={3} align="stretch">
        <Checkbox defaultChecked>{t.caption}</Checkbox>
        <Checkbox defaultChecked>{t.hook}</Checkbox>
        <Checkbox defaultChecked>{t.cta}</Checkbox>
        <Checkbox defaultChecked>{t.hashtags}</Checkbox>
        <Checkbox defaultChecked>{t.emojis}</Checkbox>
        <Button colorScheme="teal">{t.generate}</Button>
      </VStack>
    </Box>
  );
}

<<<<<<< HEAD
export default SocialPostCreatorChakra;
=======
export default SocialPostCreatorChakra;
>>>>>>> 81e58428818b790e4e044f65450d5eebab4bdd7a
