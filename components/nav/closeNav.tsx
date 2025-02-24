import  Link  from 'next/link'
import Hamburgeropen from './Hamburgeropen'
import Hamburgerclose from './Hamburgerclose'



const Nav = ()=>{


const opennav = ()=>{}
const closenav = ()=>{}

    return (
        <> 
 

        <Hamburgeropen opennav = {opennav}  name="U & A Creation" />

        <nav data-nav="false" className="nav">
            <div className="nav-wrapper">

            <Hamburgerclose closenav = {closenav}  />

            <ul>
                <li className="active">
                    <Link href="/">
                        HOME
                    </Link>
                </li>

                <li>
                    <Link href="/training">
                        TRAINING
                    </Link>
                </li>

                <li className="heading-logo">
                        <h1>Eminence </h1>
                        <p>NEEDLE ART </p>
                </li>

                <li>
                    <Link href="/about">
                        ABOUT US  
                    </Link>
                </li>
                <li>
                    <Link href="/contacts">
                        CONTACT US
                    </Link>
                </li>
  
            </ul>

            </div>
        </nav>
        </>
    )
}

export default Nav