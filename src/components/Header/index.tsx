import { Transition } from "@headlessui/react";
import Icon from "../Icon";
import { Popover } from '@headlessui/react'
import { Fragment, forwardRef, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useWindowSize } from "usehooks-ts";
import MobileHeader from "./MobileHeader";
import { ANDROID_DOWNLOAD_URL, IOS_DOWNLOAD_URL } from "../../constants/link";

export const MOBILE_WIDTH = 991

export const SECTIONS = [
  {
    title: "Introduction",
    value: "introduction",
    sectionId: "introduction"
  },
  {
    title: "Statistic",
    value: "statistic",
    sectionId: "statistic"
  },
  {
    title: "How it works",
    value: "how_it_work",
    sectionId: "how_it_work"
  },
  {
    title: "Features",
    value: "features",
    sectionId: "features"
  },
  {
    title: "FAQs",
    value: "faqs",
    sectionId: "faqs"
  },
  {
    title: "Explorer",
    value: "explorer",
    external: "https://scan.u2dpn.xyz/"
  },
  {
    title: "Docs",
    value: "docs",
    external: "https://docs.u2dpn.xyz/"
  }
]

const SECTION_IDS = SECTIONS.map(s => s.sectionId).filter(Boolean) as string[]

const MyCustomButton = forwardRef(function(props: any, ref: any) {
  return (
    <button
      className="flex items-center h-full justify-center gap-1 px-[24px] rounded-[1000px] text-neutral-800"
      ref={ref}
      style={{
        background: 'linear-gradient(269.45deg, #1AF7A9 0%, #08CDDA 100%)'
      }}
      {...props}
    />
  )
})

export default function Header() {
  const { width } = useWindowSize()

  const [activeTab, setActiveTab] = useState('introduction')

  const scrollIntoEl = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleLinkClick = (link: any) => {
    if (link.external) {
      return window.open(link.external, "_blank")
    }
    scrollIntoEl(link.sectionId)
    window.history.replaceState(link, link.title, `#${link.sectionId}`)
  }

  useEffect(() => {
    const onScroll = () => {
      const sectionElements = SECTION_IDS.map(id => document.getElementById(id))

      sectionElements.forEach(el => {
        if (!el) return
        const position = el.getBoundingClientRect()
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          setActiveTab(el.id)
        }
      })
    }
    onScroll()
    window.addEventListener('scrollend', onScroll)

    return () => window.removeEventListener('scrollend', onScroll)
  }, []);

  // useEffect(() => {
  //   if (activeTab) {
  //     window.location.href = `/#${activeTab}`
  //   }
  // }, [activeTab])

  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the '#' character from the hash
    if (hash) {
      scrollIntoEl(hash)
    }
  }, []);



  if (width <= MOBILE_WIDTH) {
    return <MobileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
  }

  return (
    <div className="bg-[#120E21] z-20 h-[72px] flex justify-between px-[24px] py-[12px] fixed top-0 w-full">
      <div className="flex items-center gap-8">
        <div className="flex items-center cursor-pointer h-[40px]" onClick={() => {
          const el = document.getElementById(SECTIONS[0].sectionId as string)
          el?.scrollIntoView({ behavior: 'smooth' })
        }}>
          <svg className="h-full w-fit" width="245" height="88" viewBox="0 0 245 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M43.884 73.5615C64.7884 73.5615 81.7347 56.6152 81.7347 35.7108C81.7347 27.0336 78.8149 19.0384 73.9042 12.6541L63.6998 22.784C66.1287 26.4997 67.5407 30.9403 67.5407 35.7108C67.5407 48.776 56.9492 59.3675 43.884 59.3675C30.8187 59.3675 20.2272 48.776 20.2272 35.7108C20.2272 30.7418 21.7592 26.1307 24.3766 22.3239L14.2008 12.2224C9.08692 18.6762 6.0332 26.8369 6.0332 35.7108C6.0332 56.6152 22.9796 73.5615 43.884 73.5615Z" fill="url(#paint0_linear_742_14201)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M43.8836 54.8762C54.4185 54.8762 62.9587 46.336 62.9587 35.8012C62.9587 32.3403 62.037 29.0946 60.4256 26.2964L55.0547 31.6281C55.5401 32.9269 55.8055 34.333 55.8055 35.8012C55.8055 42.3855 50.4679 47.7231 43.8836 47.7231C37.2993 47.7231 31.9617 42.3855 31.9617 35.8012C31.9617 34.2273 32.2667 32.7247 32.8208 31.3491L27.4848 26.052C25.785 28.905 24.8086 32.2391 24.8086 35.8012C24.8086 46.336 33.3488 54.8762 43.8836 54.8762Z" fill="url(#paint1_linear_742_14201)"/>
            <circle cx="43.9843" cy="37.5226" r="4.21672" fill="url(#paint2_linear_742_14201)"/>
            <path d="M115.576 60.66C113.127 60.66 110.963 60.154 109.086 59.142C107.209 58.13 105.735 56.7147 104.664 54.896C103.608 53.0627 103.08 50.914 103.08 48.45V28.342L107.04 28.32V48.12C107.04 49.616 107.289 50.9213 107.788 52.036C108.301 53.136 108.976 54.0527 109.812 54.786C110.648 55.5193 111.565 56.0693 112.562 56.436C113.574 56.788 114.579 56.964 115.576 56.964C116.588 56.964 117.6 56.7807 118.612 56.414C119.624 56.0473 120.541 55.5047 121.362 54.786C122.198 54.0527 122.865 53.1287 123.364 52.014C123.863 50.8993 124.112 49.6013 124.112 48.12V28.32H128.072V48.45C128.072 50.8993 127.537 53.0407 126.466 54.874C125.41 56.7073 123.943 58.13 122.066 59.142C120.189 60.154 118.025 60.66 115.576 60.66ZM133.352 59.978L133.374 56.458L147.432 43.808C148.606 42.752 149.39 41.7547 149.786 40.816C150.197 39.8627 150.402 38.8873 150.402 37.89C150.402 36.6727 150.124 35.5727 149.566 34.59C149.009 33.6073 148.246 32.83 147.278 32.258C146.325 31.686 145.24 31.4 144.022 31.4C142.761 31.4 141.639 31.7007 140.656 32.302C139.674 32.8887 138.896 33.6733 138.324 34.656C137.767 35.6387 137.496 36.7093 137.51 37.868H133.506C133.506 35.8733 133.968 34.1133 134.892 32.588C135.816 31.048 137.07 29.8453 138.654 28.98C140.253 28.1 142.064 27.66 144.088 27.66C146.054 27.66 147.814 28.1147 149.368 29.024C150.923 29.9187 152.148 31.1433 153.042 32.698C153.952 34.238 154.406 35.9833 154.406 37.934C154.406 39.3127 154.23 40.508 153.878 41.52C153.541 42.532 153.013 43.4707 152.294 44.336C151.576 45.1867 150.674 46.096 149.588 47.064L137.906 57.558L137.4 56.238H154.406V59.978H133.352ZM159.67 60V28.32H169.438C169.761 28.32 170.325 28.3273 171.132 28.342C171.939 28.3567 172.709 28.4153 173.442 28.518C175.891 28.8407 177.937 29.7353 179.58 31.202C181.237 32.654 182.484 34.502 183.32 36.746C184.156 38.99 184.574 41.4613 184.574 44.16C184.574 46.8587 184.156 49.33 183.32 51.574C182.484 53.818 181.237 55.6733 179.58 57.14C177.937 58.592 175.891 59.4793 173.442 59.802C172.709 59.89 171.931 59.9487 171.11 59.978C170.303 59.9927 169.746 60 169.438 60H159.67ZM163.696 56.26H169.438C169.995 56.26 170.619 56.2453 171.308 56.216C171.997 56.172 172.599 56.106 173.112 56.018C174.843 55.6953 176.243 54.9693 177.314 53.84C178.385 52.7107 179.169 51.3027 179.668 49.616C180.167 47.9293 180.416 46.1107 180.416 44.16C180.416 42.1653 180.159 40.3247 179.646 38.638C179.147 36.9513 178.363 35.5507 177.292 34.436C176.221 33.3213 174.828 32.61 173.112 32.302C172.599 32.1993 171.99 32.1333 171.286 32.104C170.582 32.0747 169.966 32.06 169.438 32.06H163.696V56.26ZM189.619 60V28.32H202.137C202.445 28.32 202.812 28.3347 203.237 28.364C203.662 28.3787 204.073 28.4227 204.469 28.496C206.185 28.76 207.622 29.3467 208.781 30.256C209.954 31.1653 210.834 32.3167 211.421 33.71C212.008 35.0887 212.301 36.6213 212.301 38.308C212.301 39.98 212 41.5127 211.399 42.906C210.812 44.2847 209.932 45.436 208.759 46.36C207.6 47.2693 206.17 47.856 204.469 48.12C204.073 48.1787 203.662 48.2227 203.237 48.252C202.812 48.2813 202.445 48.296 202.137 48.296H193.535V60H189.619ZM193.535 44.578H202.005C202.284 44.578 202.599 44.5633 202.951 44.534C203.318 44.5047 203.662 44.4533 203.985 44.38C204.997 44.1453 205.818 43.72 206.449 43.104C207.094 42.4733 207.564 41.74 207.857 40.904C208.15 40.0533 208.297 39.188 208.297 38.308C208.297 37.428 208.15 36.57 207.857 35.734C207.564 34.8833 207.094 34.1427 206.449 33.512C205.818 32.8813 204.997 32.456 203.985 32.236C203.662 32.148 203.318 32.0967 202.951 32.082C202.599 32.0527 202.284 32.038 202.005 32.038H193.535V44.578ZM216.689 60V28.32H220.649L237.171 53.07V28.32H241.131V60H237.171L220.649 35.228V60H216.689Z" fill="#DEDEDE"/>
            <defs>
              <linearGradient id="paint0_linear_742_14201" x1="81.7347" y1="73.5616" x2="5.31336" y2="72.6512" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1AF7A9"/>
                <stop offset="1" stopColor="#08CDDA"/>
              </linearGradient>
              <linearGradient id="paint1_linear_742_14201" x1="62.9587" y1="54.8763" x2="24.4466" y2="54.3843" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1AF7A9"/>
                <stop offset="1" stopColor="#08CDDA"/>
              </linearGradient>
              <linearGradient id="paint2_linear_742_14201" x1="48.201" y1="33.3059" x2="39.687" y2="33.3881" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1AF7A9"/>
                <stop offset="1" stopColor="#08CDDA"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        {SECTIONS.map((i) => {
          return (
            <div
              key={`section-${i.value}`}
              onClick={() => handleLinkClick(i)}
              className="cursor-pointer flex flex-col gap-2 items-center"
            >
              <div className="flex items-center gap-2">
                <span className={activeTab === i.value ? "text-neutral-0" : "text-neutral-300"}>
                  {i.title}
                </span>
                {i.external && <Icon name="up-right" width={16} height={16} />}
              </div>
              <div className="h-[1px] w-[24px]">
                <Transition
                  as={Fragment}
                  show={activeTab === i.value}
                  enter="transform transition duration-[100ms]"
                  enterFrom="opacity-0 scale-50"
                  enterTo="opacity-100 scale-100"
                  leave="transform duration-200 transition ease-in-out"
                  leaveFrom="opacity-100 scale-100 "
                  leaveTo="opacity-0 scale-95 "
                >
                  <div
                    className="h-full w-full"
                    style={{
                      background: 'linear-gradient(269.45deg, #1AF7A9 0%, #08CDDA 100%)'
                    }}
                  />
                </Transition>
              </div>
            </div>
          )
        })}
      </div>
      <Popover className="relative h-full">
        <Popover.Button as={MyCustomButton}>
          <>
            <span className="font-bold">Download Now</span>
            <Icon
              name="chevron-down"
            />
          </>
        </Popover.Button>

        <Popover.Panel
          className="absolute right-0 mt-[16px] z-10 bg-[#1D1C2B] p-[24px] w-[422px] rounded-[16px] border-[1px] border-neutral-600"
        >
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-between justify-center items-center">
              <div className="text-center text-[#9DA4B0] text-[12px] leading-[18px]">Scan to download <br /> Android app
              </div>
              <div className="my-[32px] p-[4px] w-[124px] h-[124px] flex items-center justify-center bg-[#FFFFFF]">
                <QRCode
                  value={ANDROID_DOWNLOAD_URL}
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px]"
                />
              </div>
              <button
                className="flex items-center justify-center gap-2 rounded-[1000px] bg-neutral-700 disabled:opacity-[35%] hover:bg-neutral-500 active:bg-neutral-500 px-[32px] h-[48px]"
                onClick={() => window.open(ANDROID_DOWNLOAD_URL, "_blank")}
              >
                <Icon
                  name="playstore"
                />
                Google Play
              </button>
            </div>
            <div className="flex flex-col items-between justify-center items-center">
              <div className="text-center text-[#9DA4B0] text-[12px] leading-[18px]">Scan to download <br /> iOS app
              </div>
              <div className="my-[32px] p-[4px] w-[124px] h-[124px] flex items-center justify-center bg-[#FFFFFF]">
                <QRCode
                  value={IOS_DOWNLOAD_URL}
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px]"
                />
              </div>
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
        </Popover.Panel>
      </Popover>
    </div>
  )
}
