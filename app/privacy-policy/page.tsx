import type { Metadata } from "next";
import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PrivacyPolicyContent from "@/components/containers/privacy/PrivacyPolicyContent";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

export const metadata: Metadata = {
  title: "Privacy Policy | TailorPro | WeddySoft",
  description:
    "Privacy Policy for TailorPro, the WeddySoft Android shop-management app for tailoring and alteration businesses.",
};

const page = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="Privacy Policy" />
      <PrivacyPolicyContent />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
