import { Separator } from '@/components/ui/separator'

export default function NotFound() {
  return (
    <div className="grid h-[calc(100vh-60px)] place-content-center place-items-center bg-radialGradient">
      <div
        className="pattern-dots absolute inset-0 
  pattern-bg-transparent pattern-primary-foreground pattern-opacity-20 pattern-size-4"
      />
      <div className="z-10 flex h-12 items-center gap-4">
        <strong className="text-2xl font-bold">404</strong>
        <Separator orientation="vertical" />
        <span className="text-base text-foreground/80">
          The page you are looking for does not exists.
        </span>
      </div>
    </div>
  )
}
