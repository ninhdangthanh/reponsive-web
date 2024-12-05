export default function GradientText({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`w-fit p-[8px] rounded-[4px] border border-neutral-600 tracking-[2px] text-[12px] font-medium uppercase ${className}`}
         style={{ background: 'linear-gradient(180deg, #1D1C2B 0%, #2C2B3D 100%), linear-gradient(0deg, #2D2C3B, #2D2C3B)' }}>
      <div style={{
        background: '-webkit-linear-gradient(269.45deg, #1AF7A9 0%, #08CDDA 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        {children}
      </div>
    </div>
  )
}