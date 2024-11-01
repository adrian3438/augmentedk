import '@/app/scss/header.scss';
import Link from "next/link";
import Image from "next/image";

interface Props {
    subPage?: boolean,
}

export default function Header({subPage}: Props) {
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
                            <li><Link href={subPage ? "/" : "#product"}>PRODUCT &amp; SERVICES</Link></li>
                            <li><Link href={subPage ? "/" : "#news"}>NEWS</Link></li>
                            <li><Link href={subPage ? "/" : "#company"}>COMPANY</Link></li>
                            <li><Link href={subPage ? "/" : "#news"}>CONTACT US</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
