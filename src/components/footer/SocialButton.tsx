import { Box, Button } from "@mui/material";

const symbols: Record<string, string> = {
  X: "𝕏",
  YouTube: "▶",
  Telegram: "➤",
  LinkedIn: "in",
};

export default function SocialButton({ alt }: { alt: string }) {
  return (
    <Button
      type="button"
      aria-label={alt}
      sx={{
        width: 40,
        height: 40,
        minWidth: 40,
        p: 0,
        borderRadius: "50%",
        color: "#fff",
        background: "linear-gradient(90deg, #02ADF7 0%, #26E05A 100%)",
        fontSize: 15,
        fontWeight: 800,
        textTransform: "none",
        "&:hover": {
          background: "linear-gradient(90deg, #02ADF7 0%, #26E05A 100%)",
        },
      }}
    >
      <Box component="span" aria-hidden="true" sx={{ fontFamily: "Arial, sans-serif" }}>
        {symbols[alt]}
      </Box>
    </Button>
  );
}
