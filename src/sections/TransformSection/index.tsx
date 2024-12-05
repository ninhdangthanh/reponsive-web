import SubText from "../../components/Subtext";
import TagTitle from "../../components/TagTitle";
import PORTABLE_NODE from '../../assets/portable-node.png'
import CODE_FREE_SETUP from '../../assets/code-free-setup.png'
import EARN_WITHOUT_RISK from '../../assets/earn-without-risk.png'
import ABSOLUTE_PRIVACY from '../../assets/absolute-privacy.png'
import UNBOUNDED_NAVIGATION from '../../assets/unbounded-navigation.png'
import PAY_AS_YOU_GO from '../../assets/pay-as-you-go.png'

export default function TransformSection() {
  return (
    <div id="features" className="px-[16px] py-[64px] lg:px-[32px] xl:px-[120px]">
      <div className="w-full desktop:w-[1200px] mx-auto flex flex-col items-center gap-[40px] md:gap-[60px]">
        <div className="text-center text-[20px] lg:text-[24px] xl:text-[32px] font-semibold w-[296px] xl:w-[408px]">
          Transform your phone into a node that earns reward
        </div>
        {/* For provider */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
          <div className="w-full lg:w-[282px] gap-[20px] flex flex-col">
            <TagTitle text="For provider" className="w-[115px] lg:w-[130px]" />
            <span className="text-[16px] leading-[24px] xl:text-[20px] xl:leading-[30px] font-semibold">
            Most Internet resources are to be left unused. You can share bandwidth directly from your phone and earn passive income risk-free.
          </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-2">
            <div
              className="lg:col-span-2 p-[24px] border-[1px] border-neutral-300/10 rounded-[16px] flex flex-col lg:flex-row items-center lg:items-start gap-[24px]"
              style={{
                background: 'linear-gradient(180deg, #1D1C2B 0%, #120E21 100%)'
              }}
            >
              <div className="flex flex-col gap-[12px]">
                <div className="text-[16px] leading-[24px] xl:text-[20px] xl:leading-[30px] font-semibold">
                  Portable node on your phone
                </div>
                <SubText>
                  Just like opening a personal hotspot, running a node in U2DPN is necessary for granting other users the access to your bandwidth, which then becomes your passive income stream.
                </SubText>
              </div>
              <img
                alt="Portable node on your phone"
                src={PORTABLE_NODE}
                className="w-[200px] h-[208px]"
              />
            </div>
            <div
              className="col-span-1 p-[24px] border-[1px] border-neutral-300/10 rounded-[16px] flex flex-col items-center gap-[24px]"
              style={{
                background: 'linear-gradient(180deg, #1D1C2B 0%, #120E21 100%)'
              }}
            >
              <div className="flex flex-col gap-[12px]">
                <div className="text-[16px] leading-[24px] xl:text-[20px] xl:leading-[30px] font-semibold">
                  Code-free node setup
                </div>
                <SubText>
                  Just one click and you're part of the DPN revolution. No coding knowledge required.
                </SubText>
              </div>
              <img
                alt="Portable node on your phone"
                src={CODE_FREE_SETUP}
                className="w-[200px] h-[200px]"
              />
            </div>
            <div
              className="col-span-1 p-[24px] border-[1px] border-neutral-300/10 rounded-[16px] flex flex-col items-center gap-[24px]"
              style={{
                background: 'linear-gradient(180deg, #1D1C2B 0%, #120E21 100%)'
              }}
            >
              <div className="flex flex-col gap-[12px]">
                <div className="text-[16px] leading-[24px] xl:text-[20px] xl:leading-[30px] font-semibold">
                  Earn cryptocurrency without risk
                </div>
                <SubText>
                  Actual risk-free passive income when you earn on what would be disposed of anyway.
                </SubText>
              </div>

              <img
                alt="Portable node on your phone"
                src={EARN_WITHOUT_RISK}
                className="w-[167px] h-[132px]"
              />
            </div>
          </div>
        </div>
        {/* For consumer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
          <div className="w-full lg:w-[282px] gap-[20px] flex flex-col">
            <TagTitle text="For consumer" className="w-[120px] lg:w-[135px]" />
            <span className="text-[16px] leading-[24px] xl:text-[20px] xl:leading-[30px] font-semibold">
            U2DPN elevates data privacy & security beyond what traditional VPNs are capable of by employing a distributed network structure, which eliminates centralized attacks and data breaches. No one, not even U2DPN, can see you on the Internet any longer.
          </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-2">
            <div
              className="lg:col-span-2 p-[24px] border-[1px] border-neutral-300/10 rounded-[16px] flex flex-col lg:flex-row items-center justify-between lg:items-start gap-[24px]"
              style={{
                background: 'linear-gradient(180deg, #1D1C2B 0%, #120E21 100%)'
              }}
            >
              <div className="flex flex-col gap-[12px]">
                <div className="text-[16px] leading-[24px] xl:text-[20px] xl:leading-[30px] font-semibold">
                  Absolute privacy
                </div>
                <SubText className="w-full lg:w-[283px] xl:w-[302px]">
                  With U2DPN, you can now finally browse the Internet at peace with the highest degree of safety.
                </SubText>
              </div>
              <img
                alt="Portable node on your phone"
                src={ABSOLUTE_PRIVACY}
                className="w-[184px] h-[165px]"
              />
            </div>
            <div
              className="col-span-1 p-[24px] border-[1px] border-neutral-300/10 rounded-[16px] flex flex-col items-center gap-[24px]"
              style={{
                background: 'linear-gradient(180deg, #1D1C2B 0%, #120E21 100%)'
              }}
            >
              <div className="flex flex-col gap-[12px]">
                <div className="text-[16px] leading-[24px] xl:text-[20px] xl:leading-[30px] font-semibold">
                  Unbounded navigation
                </div>
                <SubText>
                  Get access to unlimited bandwidth worldwide, supplied by U2DPN providers.
                </SubText>
              </div>
              <img
                alt="Portable node on your phone"
                src={UNBOUNDED_NAVIGATION}
                className="w-[194px] h-[173px]"
              />
            </div>
            <div
              className="col-span-1 p-[24px] border-[1px] border-neutral-300/10 rounded-[16px] flex flex-col items-center gap-[24px]"
              style={{
                background: 'linear-gradient(180deg, #1D1C2B 0%, #120E21 100%)'
              }}
            >
              <div className="flex flex-col gap-[12px]">
                <div className="text-[16px] leading-[24px] xl:text-[20px] xl:leading-[30px] font-semibold">
                  Pay as you go
                </div>
                <SubText>
                  Pay for your data as you use it. No subscription required.
                </SubText>
              </div>

              <img
                alt="Portable node on your phone"
                src={PAY_AS_YOU_GO}
                className="w-[244px] h-[157px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}