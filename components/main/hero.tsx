import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-[860px] w-full bg-[url('/Upload/piotr-brzeczek-cover.jpg')] bg-cover bg-center bg-no-repeat">
      <HeroContent />
    </div>
  );
};
