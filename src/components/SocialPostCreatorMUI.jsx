import React from "react";
import {
  Box,
  Paper,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  useMediaQuery,
} from "@mui/material";

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

function SocialPostCreatorMUI({ lang }) {
  const t = messages[lang] || messages.en;
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ my: 2 }}>
      <Paper elevation={3} sx={{ p: isMobile ? 2 : 3, maxWidth: 480, mx: "auto" }}>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ mb: 2, fontWeight: "bold" }}>
          {t.title}
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label={t.caption} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={t.hook} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={t.cta} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={t.hashtags} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={t.emojis} />
        </FormGroup>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" color="primary">
            {t.generate}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

        HEAD
export default SocialPostCreatorMUI;
=======
export default SocialPostCreatorMUI;
        f6533232aa753206a0de83f30c855a6bb61a997c
