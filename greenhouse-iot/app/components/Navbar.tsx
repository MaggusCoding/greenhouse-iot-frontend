import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={{ background: 'darkolivegreen', color: 'white', padding: '10px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>
                        MyApp
                    </Link>
                </div>
                <div>
                    <Link href="/about" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
                        About
                    </Link>
                    <Link href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
                        Dashboard
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
