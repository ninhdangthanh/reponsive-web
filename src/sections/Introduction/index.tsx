import Icon from "../../components/Icon";
import GRAPHIC from '../../assets/introduction-graphic.png'
import TagTitle from "../../components/TagTitle";
import { ANDROID_DOWNLOAD_URL, IOS_DOWNLOAD_URL } from "../../constants/link";

export default function IntroductionSection() {
  return (
    <div id="introduction" className="px-[16px] py-[64px] laptop:px-[32px] desktop:px-[120px]">
      <div className="w-full desktop:w-[1200px] mx-auto flex flex-col-reverse laptop:flex-row justify-between">
        <div className="flex flex-1 flex-col gap-4">
          <TagTitle text={"U2DPN Decentralized Subnet Network"} className="w-[285px] lg:w-[330px]" />
          <div className="text-[32px] leading-[40px] laptop:text-[40px] laptop:leading-[48px]">
            Protect online privacy and monetize your unused internet with
            <span
              style={{
                background: "-webkit-linear-gradient(269.45deg, #1AF7A9 0%, #08CDDA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              className="ml-1"
            >
            Decentralized VPN
          </span>
          </div>
          <div className="text-[16px] leading-[26px] text-neutral-300">
            Earn passive income and enjoy secure, censorship-free browsing all from your smartphone
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <button
              className="flex items-center justify-center gap-2 rounded-[1000px] bg-neutral-700 disabled:opacity-[35%] hover:bg-neutral-500 active:bg-neutral-500 px-[32px] h-[48px]"
              onClick={() => window.open(ANDROID_DOWNLOAD_URL, "_blank")}
            >
              <Icon
                name="playstore"
              />
              Google Play
            </button>
            <button
              className="flex items-center justify-center gap-2 rounded-[1000px] bg-neutral-700 disabled:opacity-[35%] hover:bg-neutral-500 active:bg-neutral-500 px-[32px] h-[48px]"
              onClick={() => window.open(IOS_DOWNLOAD_URL, "_blank")}
            >
              <Icon
                name="appstore"
              />
              Apple Store
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end items-center">
          <img
            src={GRAPHIC}
            className="w-[240px] h-[240px] laptop:w-[460px] laptop:h-[460px]"
            alt="U2DPN Decentralized Subnet Network"
          />
        </div>
      </div>
    </div>
  )
}