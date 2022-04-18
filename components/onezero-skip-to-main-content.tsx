export default function OneZeroSkipToMainContent({
  text,
  dir,
  className,
  style,
}: {
  text: string
  dir: 'ltr' | 'rtl'
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <>
      <div className="onezero__skip__to__main__content">
        <a
          className={`rounded-2xl ${className}`}
          style={style}
          href="#main-content"
        >
          {text}
        </a>
      </div>
      <style jsx>{`
        .onezero__skip__to__main__content a {
          position: absolute;
          top: -10000px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          font-size: large;
        }

        .onezero__skip__to__main__content a:focus {
          position: absolute;
          width: fit-content;
          height: auto;
          top: 5px;
          right: ${dir === 'rtl' ? '5px' : 'auto'};
          left: ${dir === 'ltr' ? '5px' : 'auto'};
          padding: 10px 15px;
          z-index: 30000;
        }
      `}</style>
    </>
  )
}
