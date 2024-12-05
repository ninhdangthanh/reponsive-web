import BG from '../../assets/statistic-background.png'
import TagTitle from '../../components/TagTitle'
import { useEffect, useState } from 'react'
import { formatDisplayedNumber } from '../../utils'

export default function Statistic() {
  const [statistics, setStatistics] = useState({
    contributors: 0,
    activeContributors: 0,
    sessions: 0
  })

  useEffect(() => {
    Promise.all([
      fetch('https://scan-service.u2dpn.xyz/user/count'),
      fetch('https://scan-service.u2dpn.xyz/user/active'),
      fetch('https://scan-service.u2dpn.xyz/connections/total-connections')
    ]).then(async res => {
      const [contributors, activeContributors, sessions] = await Promise.all(res.map(item => item.json()))
      setStatistics({
        contributors: !contributors.error ? contributors : 0,
        activeContributors: !activeContributors.error ? activeContributors : 0,
        sessions: !sessions.error ? sessions : 0
      })
    }).catch(err => {
      console.error(err)
    })
  }, []);

  return (
    <div
      id="statistic"
    >
      <div className="w-full desktop:w-[1200px] mx-auto desktop:h-[520px] laptop:h-[438px] flex flex-col justify-start items-center relative">
        <img
          className='absolute w-[1200px] h-[438px]'
          src={BG}
          alt='U2DPN statistic'
        />
        <TagTitle text="statistic" className="w-[81px] lg:w-[91px]" />
        <div className="text-[20px] lg:text-[40px] leading-[30px] lg:leading-[48px] mb-[24px] lg:mb-[64px] mt-[24px] z-10 relative">
          U2DPN Subnet Statistics
        </div>

        <div className='flex flex-col lg:flex-row justify-center gap-[72px] z-10 relative'>
          <div className='text-center gap-4'>
            <div className='text-[64px] leading-[76px] text-neutral-0'>{formatDisplayedNumber(statistics.contributors)}</div>
            <div className='text-[16px] leading-[24px] text-neutral-300'>Total Contributor Nodes</div>
          </div>
          <div className='text-center gap-4'>
            <div className='text-[64px] leading-[76px] text-neutral-0'>{formatDisplayedNumber(statistics.activeContributors)}</div>
            <div className='text-[16px] leading-[24px] text-neutral-300'>Active Contributor Nodes</div>
          </div>
          <div className='text-center gap-4'>
            <div className='text-[64px] leading-[76px] text-neutral-0'>7</div>
            <div className='text-[16px] leading-[24px] text-neutral-300'>Subnet Validator Nodes</div>
          </div>
          <div className='text-center gap-4'>
            <div className='text-[64px] leading-[76px] text-neutral-0'>{formatDisplayedNumber(statistics.sessions)}</div>
            <div className='text-[16px] leading-[24px] text-neutral-300'>Total Sessions Served</div>
          </div>
          {/*<div className='text-center gap-4'>*/}
          {/*  <div className='text-[64px] leading-[76px] text-neutral-0'>12.35 TB</div>*/}
          {/*  <div className='text-[16px] leading-[24px] text-neutral-300'>Total Bandwidth Shared</div>*/}
          {/*</div>*/}
        </div>

      </div>
    </div>
  )
}