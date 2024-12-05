import GRAPHIC from '../../assets/subnet-technology-graphic.png'
import SubText from '../../components/Subtext'
import TagTitle from '../../components/TagTitle'

export default function SubnetTechnology() {
  return (
    <div className="px-[16px] py-[64px] lg:px-[32px] xl:px-[120px]">
      <div className="w-full desktop:w-[1200px] mx-auto flex flex-col-reverse md:flex-col lg:flex-row justify-between">
        <div className="flex flex-1 justify-center lg:justify-start items-center">
          <img
            src={GRAPHIC}
            className="w-[325px] lg:w-[557px] h-[256px] lg:h-[440px]"
            alt="Subnet technology"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <TagTitle text='powerful web3 technology' className='w-[220px]' />
          <div className="text-[40px] leading-[48px]">
            Subnet technology: <br />
            Facilitating U2DPN and DePIN
          </div>
          <SubText>
            Built on Subnet Technology, U2DPN is one of many DePIN applications powered by Unicorn Ultra Decentralized Network. With unprecedented levels of security and performance, Subnet Technology offers U2DPN a significant advantage over traditional VPNs: the ability to handle large volumes of data traffic efficiently, all while on-chain for transparency, verifiability, and traceability.
          </SubText>
        </div>
      </div>
    </div>
  )
}