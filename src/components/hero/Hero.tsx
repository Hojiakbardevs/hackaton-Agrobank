import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";

import Navbar from "../layout/Navbar";
import { BackgroundEffects } from "./BackgroundEffects";

export const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 lg:pt-0">
        <BackgroundEffects />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-24">
            <div className="order-2 lg:order-1">
              <HeroLeft />
            </div>
            <div className="order-1 lg:order-2 h-[600px] lg:h-[800px] flex items-center justify-center">
              <HeroRight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
