import { Link } from "react-router-dom"
import './Navbar.css'
import germany from './DFB_Team_logo.svg.png'
export default function Navbar() {
  return (
    <>
<div className="Navbar">
<img src={germany} alt="" />
<ul>

  <Link id="LinkNav" to="/bestplayers"><li>best players</li></Link>
  <Link id="LinkNav" to="/History"> <li>History</li></Link>
  <Link id="LinkNav" to="/acheviements"> <li>acheviements</li></Link>
</ul>
</div>
    </>
  )
}
