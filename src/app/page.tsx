import Hero from "@/components/home/Hero";
import ColorPlayground from "@/components/home/ColorPlayground";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ColorPlayground />
      <ServicesHighlight />
      <GalleryTeaser />
      <CtaBanner />
    </>
  );
}
