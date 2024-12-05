import GRAPHIC from '../../assets/how-it-work-graphic.png'
import TagTitle from '../../components/TagTitle'

export default function HowItWork() {
  return (
    <div id="how_it_work" className="px-[16px] py-[64px] lg:px-[32px] xl:px-[120px]">
      <div className="w-full desktop:w-[1200px] mx-auto flex flex-col md:flex-col lg:flex-row justify-between">
        <div className="flex flex-1 flex-col gap-4">
          <TagTitle text='The new income stream' className='w-[190px]' />
          <div className="text-[40px] leading-[48px]">
            How does U2DPN work
          </div>
          <div className="text-[16px] leading-[26px] text-neutral-300">
            Most of the Internet bandwidth that you have paid for are not actively being used, hence wasted. With U2DPN, leverage your unused Internet capacity as a valuable asset and transform it into a source of earnings.
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end items-center">
          <img
            src={GRAPHIC}
            className="w-[312px] lg:w-[534px] h-[194px] lg:h-[332px]"
            alt="How does U2DPN work"
          />
        </div>
      </div>
    </div>
  )
}