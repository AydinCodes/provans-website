import { 
  HeroGrid, 
  CompanyIntro, 
  FeaturedProducts,
  NewsSection,
  Partnerships,
  TradeLogos,
  SocialFeed,
  ClickCollect,
} from "./components/home";

export default function Home() {
  return (
    <>
      <HeroGrid />
      <CompanyIntro />
      <FeaturedProducts />
      <NewsSection />
      <Partnerships />
      <TradeLogos />
      <SocialFeed />
      <ClickCollect />
    </>
  );
}
