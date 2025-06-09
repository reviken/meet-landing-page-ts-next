import hero from "@/assets/tablet/image-hero.png";
import heroLeft from "@/assets/desktop/image-hero-left.png";
import heroRight from "@/assets/desktop/image-hero-right.png";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function Hero() {
  return (
    <div className="flex flex-col gap-500 tablet:gap-900 desktop:flex-row desktop:gap-400 pt-800 pb-400">
      <Image
        className="desktop:hidden object-cover self-center"
        src={hero}
        alt=""
      />
      <Image
        className="hidden desktop:block object-cover object-right relative left-[-50px]"
        src={heroLeft}
        alt=""
      />
      <div className="flex flex-col px-400 gap-300 desktop:self-center">
        <h1 className="tp-1 text-slate-900 text-center text-pretty">
          Group Chat for Everyone
        </h1>
        <p className="tp-4 text-slate-600 text-center">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div className="flex flex-col tablet:flex-row tablet:justify-center gap-200">
          <ButtonLink color="cyan-600" href="/">
            Download <span className="text-cyan-300">v1.3</span>
          </ButtonLink>
          <ButtonLink color="purple-600" href="/">
            What is it?
          </ButtonLink>
        </div>
      </div>
      <Image
        className="hidden desktop:block object-cover object-left relative left-[50px]"
        src={heroRight}
        alt=""
      />
    </div>
  );
}
