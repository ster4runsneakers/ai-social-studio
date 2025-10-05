import React from "react";
import { Card, Typography, Checkbox, Button, Space } from "antd";

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

function SocialPostCreatorAntD({ lang }) {
  const t = messages[lang] || messages.en;

  return (
    <Card style={{ maxWidth: 400, margin: "24px auto" }}>
      <Typography.Title level={4}>{t.title}</Typography.Title>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Checkbox defaultChecked>{t.caption}</Checkbox>
        <Checkbox defaultChecked>{t.hook}</Checkbox>
        <Checkbox defaultChecked>{t.cta}</Checkbox>
        <Checkbox defaultChecked>{t.hashtags}</Checkbox>
        <Checkbox defaultChecked>{t.emojis}</Checkbox>
        <Button type="primary" block>
          {t.generate}
        </Button>
      </Space>
    </Card>
  );
}

export default SocialPostCreatorAntD;