import { Box } from "@mui/material";
import About from "@/components/home/About";
import HeroSection from "@/components/home/HeroSection";
import ResortBanner from "@/components/home/ResortBanner";
import Header from "@/components/layout/Header";
import { RulesSection } from "@/components/rules/RulesSection";
import FloatingIcons from "@/components/rules/FloatingIcons";
import ServicesSection from "@/components/services/ServicesSection";
import RoomsSection from "@/components/room/RoomsSection";
import VideoTourSection from "@/components/videotour/VideoTourSection";
import Comments from "@/components/revieweravatar/Comments";
import PackagesSection from "@/components/packages/PackagesSection";
import BlogsSection from "@/components/blogs/BlogsSection";
import FaqSection from "@/components/faq/FaqSection";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <Box component="main" className="home-page">
      <Box
        component="section"
        id="home"
        aria-label="معرفی اقامتگاه گیلمار"
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "auto", md: 960 },
          minHeight: { xs: 0, md: 960 },
          overflow: "hidden",
          background:
            "radial-gradient(ellipse 62% 48% at 22% 0%, rgba(197,216,255,.66), transparent 100%), radial-gradient(ellipse 62% 48% at 78% 0%, rgba(197,216,255,.66), transparent 100%)",
        }}
      >
        <Header />
        <HeroSection />
        <ResortBanner />
        <FloatingIcons />
      </Box>
      <About />
      <RulesSection />
      <ServicesSection />
      <RoomsSection />
      <VideoTourSection />
      <Comments />
      <PackagesSection />
      <BlogsSection />
      <FaqSection />
      <Footer />
    </Box>
  );
}
