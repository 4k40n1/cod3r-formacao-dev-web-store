import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex gap-2 px-2 justify-end w-full text-custom-400">
      <span>Developed by </span>
      <Link
        href={'https://github.com/4k40n1'}
        target="blank"
        className="text-custom-500 font-semibold"
      >
          RR Macedo
      </Link>
      <span>in participation of the</span>
      <Link
        href={'https://escola.formacao.dev/eventos/trilhas'}
        target='blank'
        className='text-custom-500 font-semibold'
      >
        <span>COD</span>
        <span className='text-custom-400'>3</span>
        <span>R</span>
      </Link>
      <span>event.</span>
    </footer>
  )
}