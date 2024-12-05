import appStoreIcon from '../../assets/app-store-icon.svg'
import chPlayIcon from '../../assets/ch-play-icon.svg'
import downloadBackground from './download-background.svg'
import downloadMockup from './download-mockup.png'
import GradientText from '../../components/GradientText'
import { ANDROID_DOWNLOAD_URL, IOS_DOWNLOAD_URL } from '../../constants/link'

export default function DownloadSection() {
  return (
    <div
      className="w-full bg-top px-[16px]"
      style={{
        backgroundImage: `url(${downloadBackground})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="w-full desktop:w-[1200px] mx-auto flex flex-col items-center laptop:bg-center">
        <div className="w-full laptop:w-fit order-2 laptop:order-1 flex flex-col items-center desktop:w-[431px] gap-[20px] mt-[24px] laptop:mt-0 mb-[20px] desktop:mt-[40px]">
          <GradientText>u2dpn download</GradientText>

          <div className="text-[20px] laptop:text-[24px] desktop:text-[32px] font-medium desktop:w-[431px] w-[326px] text-neutral-100 text-center">
            Download U2DPN mobile app on iOS and Android
          </div>

          <div className="flex laptop:flex-row flex-col items-center justify-center laptop:gap-[20px] gap-[16px] w-full">
            <a
              href={ANDROID_DOWNLOAD_URL}
              target='_blank'
              rel="noreferrer"
              className="h-[48px] laptop:w-[172px] desktop:w-[176px] w-full flex justify-center items-center gap-[16px] cursor-pointer rounded-full border border-neutral-600 opacity-60 hover:opacity-100 active:opacity-100 transition-opacity"
              style={{ background: 'linear-gradient(0deg, #242332, #242332),linear-gradient(0deg, #2D2C3B, #2D2C3B)' }}>
              <img className="w-[24px] h-[24px]" src={chPlayIcon} alt="" />
              <span className="text-[16px] text-white">
              Google play
            </span>
            </a>

            <a
              href={IOS_DOWNLOAD_URL}
              target='_blank'
              rel="noreferrer"
              className="h-[48px] laptop:w-[172px] w-full flex justify-center items-center gap-[16px] cursor-pointer rounded-full border border-neutral-600 opacity-60 hover:opacity-100 active:opacity-100 transition-opacity"
              style={{ background: 'linear-gradient(0deg, #242332, #242332),linear-gradient(0deg, #2D2C3B, #2D2C3B)' }}>
              <img className="w-[24px] h-[24px]" src={appStoreIcon} alt="" />
              <span className="text-[16px] text-white">
              Apple Store
            </span>
            </a>
          </div>
        </div>

        <img className="order-1 laptop:order-2 desktop:w-[800px] laptop:w-[640px] w-[226px] h-auto"
             src={downloadMockup}
             alt="" />
      </div>
    </div>
  )
}