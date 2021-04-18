function NavBar() {
  return (
    <nav
      css={{
        backgroundColor: 'var(--mage-green)',
        height: '15rem',
        fontSize: '8rem',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',

        '& .subtitle': {
          fontSize: '3rem',
        },
      }}
    >
      <div>Mage:</div>
      <div className="subtitle">The Awakening</div>
    </nav>
  )
}

export default NavBar
