import GradientText from '../../components/GradientText'
import guideImage1 from './guide-1.svg'
import guideImage2 from './guide-2.svg'
import guideImage3 from './guide-3.svg'

export default function GuideSection() {
  const steps = [
    {
      title: 'Download U2DPN app',
      description: 'Install U2DPN for free, now available on Android (Google Play) and soon on iOS.',
      image: guideImage1
    },
    {
      title: 'Connect to U2DPN Subnet',
      description: 'Open U2DPN and you\'re just one click away from linking your device to the network.',
      image: guideImage2
    },
    {
      title: 'Start earning',
      description: 'Your phone now becomes a portable node that earns for you, even in your sleep.',
      image: guideImage3
    }
  ]

  return (
    <div className="w-full px-[16px] py-[32px] laptop:py-[120px]">
      <div className="w-full desktop:w-[1200px] mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center desktop:w-[431px] gap-[20px] mb-[60px]">
          <GradientText>Step by Step</GradientText>

          <div className="text-[20px] laptop:text-[24px] desktop:text-[32px] desktop:w-[653px] laptop:w-[454px] font-medium text-neutral-100 text-center">
            Join the future of Decentralized Internet and start earning directly
          </div>
        </div>

        <div className="flex flex-col laptop:flex-row laptop:items-stretch gap-[24px] w-full laptop:w-[960px] desktop:w-[1200px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 rounded-[16px] border border-neutral-700 p-[16px] hover:border-neutral-300 transition-all"
              style={{
                background: 'linear-gradient(180deg, #1D1C2B 0%, #120E21 100%),linear-gradient(0deg, #242332, #242332)'
              }}>
              <div className="w-full desktop:h-[262px] laptop:h-[202px] rounded-[8px] bg-[#120E21]">
                <img src={step.image} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="py-[8px] desktop:pt-[32px] pt-[24px] desktop:pb-[12px] laptop:p-[8px] flex flex-col gap-[8px]">
                <GradientText>Step {index + 1}</GradientText>
                <div className="desktop:text-[20px] text-[16px] text-white font-medium">
                  {step.title}
                </div>
                <div className="desktop:text-[16px] text-[14px] text-neutral-300">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}