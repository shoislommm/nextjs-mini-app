import Link from 'next/link'

const Nav = () => (
  <header sx={{ height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary' }}>
    <nav sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', variant: 'containers.page', height: '100%' }}>
      <Link href="/">
        <div sx={{ fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>Note App</div>
      </Link>

      <Link href="/notes">
        <div sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>notes</div>
      </Link>

      <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }} href="https://frontendmasters.com">Help</a>
    </nav>
  </header>
)

export default Nav
