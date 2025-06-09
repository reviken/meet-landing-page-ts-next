import Image from "next/image";
import decoration from "@/assets/number.svg";
import people0 from "@/assets/desktop/image-woman-in-videocall.jpg";
import people1 from "@/assets/desktop/image-women-videochatting.jpg";
import people2 from "@/assets/desktop/image-men-in-meeting.jpg";
import people3 from "@/assets/desktop/image-man-texting.jpg";

export default function Main() {
  return (
    <div className="flex flex-col items-center gap-800 p-400 pb-800 desktop:px-1000">
      <Image className="self-center" src={decoration} alt="" />
      <div className="grid grid-cols-2 tablet:grid-cols-4 gap-200">
        <Image src={people0} alt="Woman in video call" />
        <Image src={people1} alt="Women video chatting" />
        <Image src={people2} alt="Men in meeting" />
        <Image src={people3} alt="Man texting" />
      </div>
      <div className="flex flex-col items-center gap-400 tablet:max-w-[500px] desktop:max-w-[550px]">
        <div className="flex flex-col items-center gap-200">
          <h3 className="tp-3 text-cyan-600">Built for modern use</h3>
          <h2 className="tp-2 text-slate-900 text-center">
            Smarter meetings, all in one place
          </h2>
        </div>
        <p className="tp-4 text-slate-600 text-center">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </div>
  );
}
