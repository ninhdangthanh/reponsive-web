export default function SubText({children, className}: {
  children: any;
  className?: string;
}) {
  return (
    <span className={`text-[14px] leading-[22px] text-neutral-300 desktop:text-[16px] desktop:leading-[26px] ${className}`}>
      {children}
    </span>
  )
}