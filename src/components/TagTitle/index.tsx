export default function TagTitle({text, className, textClassName}: {
  text: string;
  className?: string;
  textClassName?: string;
}) {
  return (
    <div className={`p-[8px] bg-[#1D1C2B] rounded-[4px] flex items-center justify-center border-[1px] border-neutral-600 ${className}`}>
      <span
        className={`uppercase text-[10px] lg:text-[12px] leading-[12px] lg:leading-[18px] font-semibold tracking-[2px] ${textClassName}`}
        style={{
          background: "-webkit-linear-gradient(269.45deg, #1AF7A9 0%, #08CDDA 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        {text}
      </span>
    </div>
  )
}