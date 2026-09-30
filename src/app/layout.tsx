import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import ThemeRegistry from "@/them/ThemRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: "اقامتگاه بوم‌گردی گیلمار | اقامت در طبیعت گیلان",
  description:
    "اقامت در اقامتگاه بوم‌گردی گیلمار، میان طبیعت سرسبز گیلان، همراه با تجربه‌های محلی و آرامش کنار تالاب.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
