import chevronDownIcon from '../assets/chevron-down.svg'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  expanded: boolean
  toggle: () => void
  renderExpanded?: React.ReactNode
}

export default function Collapsible({ children, expanded, toggle, renderExpanded, ...rest }: Props) {

  return (
    <div className={`cursor-pointer py-[16px] border-b border-neutral-600`} onClick={toggle} {...rest}>
      <div className="flex items-center justify-between">
        {children}
        <img src={chevronDownIcon} alt="" className={`transition-all w-[24px] h-[24px] ${expanded ? 'rotate-180' : 'rotate-0'}`} />
      </div>

      {!!renderExpanded && <div className={`transition-all ${expanded ? 'mt-6' : 'h-0 opacity-0 overflow-hidden'}`}>
        {renderExpanded}
      </div>}
    </div>
  )
}