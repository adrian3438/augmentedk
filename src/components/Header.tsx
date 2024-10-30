import '@/app/scss/header.scss';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div>
                <div className="header-top">
                    <div className="header-top-left">
                        <ul>
                            <li className="tel">+070-4680-2070</li>
                            <li className="email">augmentedk@augmentedk.com</li>
                        </ul>
                    </div>
                    <div className="header-top-right">
                        <dl>
                            <dt>Follow Us :</dt>
                            <dd>
                                <ul>
                                    <li><Link href="#" target="_blank"><Image src="/images/header/facebook.png" alt="facebook" width={9} height={14}/></Link></li>
                                    <li><Link href="#" target="_blank"><Image src="/images/header/twitter.png" alt="twitter" width={14} height={14}/></Link></li>
                                    <li><Link href="#" target="_blank"><Image src="/images/header/instagram.png" alt="instagram" width={14} height={13}/></Link></li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="header-bottom">
                    <h1><Link href="#"><Image src="/images/header/logo.png" alt="AUGMENTED KNOWLEDGE" width={151} height={34}/></Link></h1>
                    <nav>
                        <ul>
                            <li><Link href="#product">PROUDCT &amp; SERVEICE</Link></li>
                            <li><Link href="#news">NEWS</Link></li>
                            <li><Link href="#company">COMPANY</Link></li>
                            <li><Link href="#contact">CONTACT US</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
