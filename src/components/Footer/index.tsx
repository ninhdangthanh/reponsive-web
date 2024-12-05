import footerDPNLogo from '../../assets/U2DPN.svg'
import twitterIcon from '../../assets/twitter-icon.svg'
import telegramIcon from '../../assets/telegram-icon.svg'
import upRightIcon from '../../assets/up-right-icon.svg'
import { SECTIONS } from '../Header'

export default function Footer() {

  const socialLinks = [
    { icon: twitterIcon, href: 'https://twitter.com/u2_dpn', name: 'Twitter' },
    { icon: telegramIcon, href: 'https://t.me/UnicornUltraGlobal/120759', nane: 'Telegram' },
  ]

  return (
    <footer className="w-full flex justify-center items-center py-[60px] border-t border-neutral-700">
      <div className="w-full desktop:w-[1200px] mx-auto laptop:w-fit flex flex-col items-center">
        <img className="mb-[32px]" src={footerDPNLogo} alt="DPN" />

        <div className="desktop:text-[16px] text-[14px] text-neutral-300 text-center mb-[40px]">
          © 2024 U2DPN. All rights reserved.
        </div>

        <div className="flex items-center gap-[16px] mb-[40px]">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href}>
              <img className="w-[40px] h-[40px]" src={link.icon} alt={link.name} />
            </a>
          ))}
        </div>

        <div className="w-full mx-auto flex laptop:flex-row flex-col laptop:items-center laptop:gap-[8px] desktop:justify-center">
          {SECTIONS.map((i => (
            <a className="flex items-center gap-[8px] py-[16px] px-[32px] font-medium desktop:text-[16px] text-[14px] text-neutral-200"
               key={i.value}
               href={i.external || `/#${i.value}`}
               rel={i.external ? 'noopener noreferrer' : undefined}
               target={i.external ? '_blank' : undefined}>
              {i.title}
              {i.external && <img className="w-[16px] h-[16px]" src={upRightIcon} alt="" />}
            </a>
          )))}
        </div>
      </div>
    </footer>
  )
}