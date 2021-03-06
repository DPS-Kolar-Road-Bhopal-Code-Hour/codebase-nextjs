/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { useRouter } from 'next/router'

import Head from 'next/head';
const Navbar = (props) => {
    const router = useRouter()
    return (<div className="navbar"><input className='navbar-checkbox' type="checkbox" id="1" /> <label className="navbar-close" htmlFor="1"/><label className='navbar-label' htmlFor="1"><img className='navbar-label-image' src='/menu_icon.png'></img></label>
        <Head>
            <title>ARAP: Augmented Reality Awareness Program</title>
            <link rel="stylesheet" href="index.css" />
            <link rel="icon" href="/favicon.jpg" />
            <link rel="stylesheet" href="navbar.css" />
            <meta name="og:image" content="/favicon.jpg" />
            <meta name="description" content="ARAP: Augmented Reality Awareness Program is a project prepared by the students of DPS Kolar Road Bhopal's Palash house to raise awareness about the upcoming developments in the field of AR and VR."></meta>
        </Head>

        <div className='navbar-menu'>
            <div className='navbar-menu-heading' onClick={()=>router.push('/')}>
                <h1 className='navbar-menu-heading-title'>ARAP</h1>
                <h4 className='navbar-menu-heading-description'>Augmented Reality Awareness Program</h4>
            </div>
            <div className='navbar-menu-links'>

              
                <Link href="/countdown">

                    <div className='navbar-menu-links-each'> COUNTDOWN </div>
                </Link>
                <Link href="/research">
                    <div className='navbar-menu-links-each'>
                        RESOURCES
                    </div>
                </Link>
                <Link href="/upcoming">
                    <div className='navbar-menu-links-each'>
                        Product Releases
                    </div>
                </Link>
            </div>
        </div>
    </div >)
}
export default Navbar;