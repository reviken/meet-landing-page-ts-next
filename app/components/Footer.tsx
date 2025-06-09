import decoration from "@/assets/number-2.svg";
import background from "@/assets/footer.png";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function Footer() {
  return (
    <div className="flex flex-col desktop:items-center">
      <Image className="self-center mb-[-30px] z-10" src={decoration} alt="" />
      <div
        className="flex flex-col desktop:flex-row px-400 desktop:px-1400 py-800 gap-300 desktop:gap-400"
        style={{
          background: `url(${background.src})`,
          backgroundSize: "cover",
        }}
      >
        <p className="tp-2 text-white text-center desktop:text-left desktop:basis-[33%]">
          Experience more together
        </p>
        <p className="tp-4 text-white text-center desktop:text-left desktop:basis-[33%]">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <div className="desktop:basis-[33%]">
          <ButtonLink href="/" color="purple-600">
            Download <span className="text-purple-300">v1.3</span>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
