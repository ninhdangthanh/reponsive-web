import TagTitle from "../../components/TagTitle";
import REFERRAL_GRAPHIC from '../../assets/referral-graphic.png'
import SubText from "../../components/Subtext";
import Icon from "../../components/Icon";
import { ANDROID_DOWNLOAD_URL, IOS_DOWNLOAD_URL } from "../../constants/link";

export default function ReferralSection() {
  return (
    <div className="px-[16px] py-[64px] laptop:px-[32px] desktop:px-[120px]">
      <div className="w-full desktop:w-[1200px] mx-auto">
        <div className="flex flex-col-reverse laptop:flex-row border-[1px] rounded-[16px] border-neutral-600 justify-between">
          <div className="p-[32px] flex flex-col gap-[16px]">
            <TagTitle text="Referral" className="w-[90px]" />
            <span className="text-[20px] leading-[30px] laptop:text-[24px] laptop:leading-[32px] desktop:text-[32px] desktop:leading-[40px] font-semibold">
            Earn more reward with our <br /> affiliate program
          </span>
            <SubText>
              Invite your friends, get exclusive rewards. <br/> The more the merrier.
            </SubText>

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
                className="flex items-center justify-center gap-2 rounded-[1000px] bg-neutral-700 disabled:opacity-[35%] hover:bg-neutral-500 active:bg-neutral-500 items-center px-[32px] h-[48px]"
                onClick={() => window.open(IOS_DOWNLOAD_URL, "_blank")}
              >
                <Icon
                  name="appstore"
                />
                Apple Store
              </button>
            </div>
          </div>
          <div>
            <img
              src={REFERRAL_GRAPHIC}
              alt="Referral"
              className="w-[343px] h-[190px] laptop:w-[540px] laptop:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}