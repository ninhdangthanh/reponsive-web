import { useState } from "react";
import LOGO from '../../assets/logo_horizontal.png'
import Icon from "../Icon";
import { Transition } from "@headlessui/react";
import { SECTIONS } from './index'
import { ANDROID_DOWNLOAD_URL } from "../../constants/link";

export default function MobileHeader({activeTab, setActiveTab}: {
  activeTab: string;
  setActiveTab: (tab: string) => void
}) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className={`bg-[#120E21] flex w-full justify-between items-center px-[16px] py-[14px] fixed top-0`}>
				<a href="#">
					<img
						src={LOGO}
						alt="U2DPN"
						className='w-[74px] h-auto'
					/>
				</a>
				<button onClick={() => setShowMenu(true)}>
					<Icon
						name='menu'
						width={24}
						height={24}
					/>
				</button>
			</div>
      <Transition
				show={showMenu}
				enter="transition-all duration-25"
        enterFrom="-right-[1000px]"
        enterTo="right-0"
        leave="transition-all duration-150"
        leaveFrom="right-0"
        leaveTo="-right-[1000px]"
				className='fixed top-0 bottom-0 bg-neutral-1000 w-full z-20 flex flex-col'
			>
        <div className={`flex justify-between items-center px-[16px] py-[14px] w-full mb-[16px]`}>
          <a href="/">
            <img
              src={LOGO}
              alt="U2DPN"
              className='w-[74px] h-auto'
            />
          </a>
          <button onClick={() => setShowMenu(false)}>
            <Icon
              name='close'
              width={24}
              height={24}
            />
          </button>
        </div>
        {SECTIONS.map((i) => {
          return (
            <div
              key={`section-${i.value}`}
              onClick={() => {
                if (i.external) {
                  window.open(i.external)
                } else {
                  const el = document.getElementById(i.sectionId as string)
                  el?.scrollIntoView({ behavior: 'smooth' })
                  setActiveTab(i.value)
                }
                setShowMenu(false)
              }}
              className="cursor-pointer flex flex-col gap-2 items-start justify-center h-[48px] px-[24px] relative"
            >
              <span className={activeTab === i.value ? "text-neutral-0" : "text-neutral-300"}>{i.title}</span>
              {activeTab === i.value && (
                <div
                  className="h-[48px] left-0 absolute w-[2px]"
                  style={{
                    background: 'linear-gradient(269.45deg, #1AF7A9 0%, #08CDDA 100%)'
                  }}
                />
              )}
            </div>
          )
        })}
        <div className="flex flex-1 flex-col lg:flex-row gap-4 px-[16px] justify-end">
          <button
            className="flex items-center justify-center gap-2 rounded-[1000px] bg-neutral-700 disabled:opacity-[35%] hover:bg-neutral-500 active:bg-neutral-500 items-center px-[32px] h-[48px]"
            onClick={() => window.open(ANDROID_DOWNLOAD_URL, "_blank")}
          >
            <Icon
              name="playstore"
            />
            Google Play
          </button>
          <button
            className="flex items-center justify-center gap-2 rounded-[1000px] bg-neutral-700 disabled:opacity-[35%] hover:bg-neutral-500 active:bg-neutral-500 items-center px-[32px] h-[48px]"
            disabled
          >
            <Icon
              name="appstore"
            />
            Apple Store
          </button>
        </div>
        <div className="text-neutral-400 text-[14px] leading-[22px] px-[16px]">
          */ The iOS version will be available soon /*
        </div>
      </Transition>
    </>
  )
}