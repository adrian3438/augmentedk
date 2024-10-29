import '@/app/scss/footer.scss';
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div>
                <div className="footer-top">
                    <Image src="/images/footer/footer-logo.png" alt="AUGMENTED KNOWLEDGE" width={216} height={48}/>
                    <ul className="sns">
                        <li><Link href="#"><Image src="/images/footer/facebook.png" alt="facebook" width={46} height={46}/></Link></li>
                        <li><Link href="#"><Image src="/images/footer/twitter.png" alt="twitter" width={46} height={46}/></Link></li>
                        <li><Link href="#"><Image src="/images/footer/youtube.png" alt="youtube" width={46} height={46}/></Link></li>
                        <li><Link href="#"><Image src="/images/footer/linkdin.png" alt="instagram" width={46} height={46}/></Link></li>
                    </ul>
                </div>
                <div className="footer-middle">
                    <p>Augmented Knowledge Corp. is a spin off from Inha University AI Laboratory. Since 1991, for 30 years, we are striving to unify Artificial Intelligence (AI) and eXtended Reality (XR) and implement it to industry 4.0</p>
                    <div className="contact-info">
                        <h2>Contact Info</h2>
                        <dl className="contact-info-01">
                            <dt>Address</dt>
                            <dd>#450~452, IAIAC Bldg., 36,<br/> Gaetbeol-ro, Yeonsu-gu, Incheon,<br/> 21999, Republic of Korea</dd>
                        </dl>
                        <dl className="contact-info-02">
                            <dt>Call Us</dt>
                            <dd>+070-4680-2070</dd>
                        </dl>
                        <dl className="contact-info-03">
                            <dt>Email Us</dt>
                            <dd>augmentedk@augmentedk.com</dd>
                        </dl>
                    </div>
                    <div className="quick-link">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link href="#">Product and Services</Link></li>
                            <li><Link href="#">News</Link></li>
                            <li><Link href="#">Company</Link></li>
                            <li><Link href="#">Contact US</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                ©2024 Augmented Knowledge. All rights reserved. | <Link href="#">Privacy Policy</Link> | <Link href="#">@</Link>
            </div>
        </footer>
    )
}
