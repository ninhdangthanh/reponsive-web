import Collapsible from '../../components/Collapsible'
import { useState } from 'react'
import GradientText from '../../components/GradientText'

export default function FAQsSection() {
  const [expanded, setExpanded] = useState<number>()

  const questions = [
    {
      question: 'What is U2DPN?',
      answer: `U2DPN is a Decentralized Private Network that allows users to share their unused network bandwidth to earn passive income and provides a pay-as-you-go service for others to use this bandwidth for Internet privacy & security, similar to using a VPN.`
    },
    {
      question: 'Is it safe to share my bandwidth with U2DPN?',
      answer: `Yes, safety is our number 1 priority. U2DPN is decentralized, meaning we can never get access to the resources that you are sharing, because you are never sharing them to us in the first place!`
    },
    {
      question: 'Will using U2DPN affect my own internet speed?',
      answer: `No.  When you share your Internet resources to U2DPN, we only take what is otherwise unused and wasted, ensuring your personal internet speed remains unaffected.`
    },
    {
      question: 'What is the difference between U2DPN and a traditional VPN?',
      answer: `Unlike traditional VPNs, U2DPN operates on a decentralized network provided by individual bandwidth sharers, offering a more diverse and resilient service and eliminating all risks of centralized data breaches.`
    },
    {
      question: 'How do I use the bandwidth provided by U2DPN?',
      answer: `Similar to a VPN service, you can connect to U2DPN as a user and choose a pay-as-you-go plan to access the shared bandwidth.`
    },
    {
      question: 'How much can I earn by sharing my bandwidth?',
      answer: `Earnings depend on the amount of bandwidth you share and the demand in the network. Our platform provides tools to estimate your potential earnings.`
    }
  ]

  const handleExpandItem = (v: number) => {
    setExpanded(v === expanded ? undefined : v)
  }

  return (
    <div id="faqs" className="w-full px-[16px] py-[120px]">
      <div className="w-full desktop:w-[1200px] mx-auto flex justify-center items-center">
        <div className="w-full flex flex-col laptop:items-center">
          <GradientText className="mb-[16px]">FAQS</GradientText>

          <div className="font-medium text-[20px] laptop:text-[24px] desktop:text-[32px] text-neutral-100 laptop:mb-[60px] mb-[40px]">
            Frequently asked questions
          </div>

          <div className="desktop:w-[800px] laptop:w-[714px] w-full">
            {questions.map((item, index) => (
              <Collapsible
                key={index}
                renderExpanded={
                  <a href={item.answer} className="desktop:text-[20px] text-[16px] font-medium text-white">
                    {item.answer}
                  </a>
                }
                expanded={expanded === index}
                toggle={() => handleExpandItem(index)}
              >
                <p className="desktop:text-[20px] text-[16px] font-medium text-white">{item.question}</p>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}