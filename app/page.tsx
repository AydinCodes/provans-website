import { 
  HeroGrid, 
  Tagline, 
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
      <Tagline />
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
