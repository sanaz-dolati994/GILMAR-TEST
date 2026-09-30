import { Box } from "@mui/material";

type PackageFeatureCardProps = {
  src?: string;
  alt: string;
  label?: string;
};

export default function PackageFeatureCard({
  src,
  alt,
  label,
}: PackageFeatureCardProps) {
  return (
    <Box
      sx={{
        width: "116px",
        height: "116px",
        flex: "0 0 116px",
        boxSizing: "border-box",
        p: "16px",
        gap: 0,
        borderRadius: "12px",
        bgcolor: "#FCFDFD",
        border: "1px solid #EEF3F6",
        boxShadow: "0 0 0 6px #fff, 0 24px 48px rgba(0,46,37,.12)",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {src ? (
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{ width: 52, height: 52, objectFit: "contain", display: "block" }}
        />
      ) : (
        <Box aria-hidden="true" sx={{ width: 52, height: 52 }} />
      )}
      <Box
        sx={{
          maxWidth: "100%",
          color: "#4C4C4D",
          fontFamily: "Abar Mid FaNum",
          fontSize: 14,
          fontWeight: 600,
          lineHeight: "32px",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {label ?? alt}
      </Box>
    </Box>
  );
}
