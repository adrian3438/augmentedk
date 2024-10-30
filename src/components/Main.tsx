import '@/app/scss/main.scss';
import Link from "next/link";
import Image from "next/image";
import Section1 from "@/components/main/Section1";

export default function Main() {
    return (
        <main>
            <Section1/>

            <section className="section-02">
                <div className="section-02-01">
                    <ul>
                        <li className="list-01">
                            <p>AKVIEW</p>
                            <ul>
                                <li><span>Web-based</span> aviation MRO simulator</li>
                                <li>Remote education, training, and collaborative work utilizing digital twins</li>
                                <li>Certified by the Korean Aeronautical Engineer Association<br/>
                                    [Certification Number: KAEA-2023-01]
                                </li>
                                <li>Cloud-based service via<br/>
                                    http://akview.augmentedk.com
                                </li>
                            </ul>
                            <Link href="#">DEMO</Link>
                        </li>
                        <li className="list-02">
                            <p>AK GO</p>
                            <ul>
                                <li>Voice interaction with digital twins</li>
                                <li>Land a true-to-life jumbo aircraft in your living space</li>
                                <li>Process of immersive 3D simulation for removing and installing aircraft parts</li>
                            </ul>
                        </li>
                        <li className="list-03">
                            <p>51%</p>
                            <ul>
                                <li>Over the years of research, AK found its digital twin solution is the optimal solution for OEMs and the MRO industry to save their cost and time by integrative digital twin manuals with 3D models.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="section-02-02">
                    <ul>
                        <li>
                            <h1>Components</h1>
                            <p>Up-to-date digitized aircraft components by AK for three commercial narrow-body types: B737-800NG, B737-MAX, A320 Family.</p>
                        </li>
                        <li>
                            <h1>AK Product &amp; Services</h1>
                            <p>Up-to-date technical manuals, AMM, IPC, and other required information are integrated with 3D Models and delivered in AK VIEW.</p>
                        </li>
                        <li>
                            <h1>Saving Manual Search Time &amp; Cost</h1>
                            <p>Over the years of research, AK found its digital twin solution is the optimal solution for OEMs and the MRO industry to save their cost and time by integrative digital twin manuals with 3D models.</p>
                        </li>
                    </ul>
                </div>
                <div className="section-02-03">
                    <p>10 Years of Experience</p>
                    <div>
                        <p>ABOUT US</p>
                        <div>
                            <h1>Revolutionizing MRO With Digital Twins</h1>
                            <p>In aviation maintenance, a significant amount of time is wasted searching technical manuals instead of performing actual work. Digital solutions, standardized procedures, and advanced search tools can reduce this inefficiency. The most promising advancement is digital twin remote training, which creates virtual replicas of aircraft systems for immersive training.</p>
                            <ul>
                                <li>One-off, weekly or fortnightly visits</li>
                                <li>Vetted &amp; background-checked cleaners</li>
                                <li>Keep the same cleaner for every visit</li>
                                <li>Book, manage & pay online</li>
                            </ul>
                            <Link href="#">CONTACT US</Link>
                        </div>
                    </div>
                </div>
                <div className="section-02-04">
                    <div className="title-area">
                        <p>Work Process</p>
                        <h1>How We Are Working!</h1>
                    </div>
                    <ul>
                        <li className="process-01">
                            <dl>
                                <dt>Analysis</dt>
                                <dd>These services range from regular housekeeping tasks to deep cleaning, sanitation, &amp; cleaning services.</dd>
                            </dl>
                        </li>
                        <li className="process-02">
                            <dl>
                                <dt>Create 3D Modeling</dt>
                                <dd>These services range from regular housekeeping tasks to deep cleaning, sanitation, &amp; cleaning services.</dd>
                            </dl>
                        </li>
                        <li className="process-03">
                            <dl>
                                <dt>Data Integration</dt>
                                <dd>These services range from regular housekeeping tasks to deep cleaning, sanitation, &amp; cleaning services.</dd>
                            </dl>
                        </li>
                        <li className="process-04">
                            <dl>
                                <dt>Training</dt>
                                <dd>These services range from regular housekeeping tasks to deep cleaning, sanitation, &amp; cleaning services.</dd>
                            </dl>
                        </li>
                    </ul>
                </div>
                <div className="section-02-05">
                    <div className="title-area">
                        <p><span>WORK WITH US</span></p>
                        <h1>Contact Our Best Services Team!</h1>
                    </div>
                    <p><Link href="#">CONTACT US</Link></p>
                </div>
                <div className="section-02-06" id="product">
                    <div className="title-area">
                        <p><span>Product &amp; services</span></p>
                        <h1>Entire In-house Platform and<br/> Intellectual Property</h1>
                    </div>
                    <div className="detail">
                        <p>Augmented Knowledge specializes in developing and supplying aircraft MRO simulators through <em>AI-based Digital Twin</em> technology for commercial and military aircraft maintenance.<br/>We support Web, MR, and VR content based on the cloud.</p>
                        <Image src="/images/main/cloud-service.png" alt="Cloud-based Contents as as Service(CaaS) for Aircraft Maintenance, Training and Education" width={844} height={542}/>
                    </div>
                </div>
            </section>

            <section className="section-03">
                <div>
                    <div>
                        <h1>The Cloud-based MRO Simulator<br/>AK VIEW</h1>
                        <p><em>AKview (https://akview.augmentedk.com)</em> significantly enhances maintenance efficiency. Instead of navigating through conventional manuals, workers can specify the removal or installation task, and receive a sequential AI-driven instructional guide, complete with <em>AI-generated voice instructions and digital twins of aircraft</em> and their components. This innovative approach eliminates the time-consuming processes of searching and cross-referencing. With AKview, the specific IPC and AMM 2D drawings are available with just one click. Using AKview in the field eliminates the time spent searching for manuals and cross-referencing, streamlining operations and greatly improving productivity.</p>
                    </div>
                </div>
            </section>

            <section className="section-04" id="news">
                <section className="section-04-01">
                    <div className="title-area">
                        <p><span>NEWS</span></p>
                        <h1>Get Latest News &amp; Updates</h1>
                    </div>
                    <div className="news-list">
                        <ul>
                            <li>
                                <Link href="#">
                                    <div className="image-area">
                                        <Image src="/images/@temp/news-list-sample-01.png" alt="Title" width={436} height={240}/>
                                    </div>
                                    <div className="detail-area">
                                        <p>Exhibition &gt; 2024-02-02</p>
                                        <h2>AK and Kemalak Aerospace Collaborate at DSA 2024 Exhibition</h2>
                                        <span></span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <div className="image-area">
                                        <Image src="/images/@temp/news-list-sample-02.png" alt="Title" width={436} height={240}/>
                                    </div>
                                    <div className="detail-area">
                                        <p>Exhibition &gt; 2024-02-02</p>
                                        <h2>Title</h2>
                                        <span></span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <div className="image-area">
                                        <Image src="/images/@temp/news-list-sample-03.png" alt="Title" width={436} height={240}/>
                                    </div>
                                    <div className="detail-area">
                                        <p>Exhibition &gt; 2024-02-02</p>
                                        <h2>Title</h2>
                                        <span></span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="section-04-02" id="company">
                    <div className="title-area">
                        <p><span>Company</span></p>
                        <h1>Revolutionizing MRO with Digital Twins</h1>
                    </div>
                    <div className="detail-area">
                        <div className="text-area">
                            <p>In aviation maintenance, a significant amount of time is wasted searching technical manuals instead of performing actual work. Digital solutions, standardized procedures, and advanced search tools can reduce this inefficiency. The most promising advancement is digital twin remote training, which creates virtual replicas of aircraft systems for immersive training. This technology addresses the mechanic shortage, expedites training, and ensures mechanics are well-prepared for complex tasks. Embracing digital twins is essential for the future of MRO, enhancing efficiency and productivity now and in the years to come.</p>
                        </div>
                        <div className="image-area">
                            <p><Image src="/images/main/keviin-gs-jo.png" alt="Keviin GS Jo" width={730} height={462}/></p>
                            <p className="image-info"><span>Keviin GS Jo</span> CEO / Founder<br/> Ph.D. in Computer Science, CUNY<br/> Processor Emeritus, Dept. of Computer Science, Inha University</p>
                        </div>
                    </div>
                </section>

                <section className="section-04-03">
                    <Image src="/images/main/edison.jpg" alt="“I find out what the world needs, Then I proceed to invent it.” - Thomas Edison" width={1290} height={632}/>
                </section>
            </section>

            <section className="section-05">
                <div className="title-area">
                    <p><span>Major Members</span></p>
                    <h1>Meet Our Expert</h1>
                </div>
                <ul>
                    <li>
                        <p className="profile-image"><Image src="/images/main/profile-image-01.png" alt="profile-image" width={206} height={253}/></p>
                        <div>
                            <p className="name">Kevin Geunski Jo</p>
                            <p className="position">CEO &amp; Founder</p>
                            <p className="role">An emeritus professor at Inha University Head of AI contents creation research center published over 300 papers, and registered 52 patents in US, Europe and Korea</p>
                        </div>
                    </li>
                    <li>
                        <p className="profile-image"><Image src="/images/main/profile-image-01.png" alt="profile-image" width={206} height={253}/></p>
                        <div>
                            <p className="name">Younghoon Yu</p>
                            <p className="position">Chief Technology Officer</p>
                            <p className="role">CS expert<br/>SW design, expert system, mobile<br/>Director of Research Institute in MCC corp.<br/>Ph. D in CE</p>
                        </div>
                    </li>
                    <li>
                        <p className="profile-image"><Image src="/images/main/profile-image-01.png" alt="profile-image" width={206} height={253}/></p>
                        <div>
                            <p className="name">Suzie Lee</p>
                            <p className="position">Global Business Manager</p>
                            <p className="role">Experience in Global Marketing and Finance<br/> BSBA in University of Nevada, Las Vegas</p>
                        </div>
                    </li>
                    <li>
                        <p className="profile-image"><Image src="/images/main/profile-image-01.png" alt="profile-image" width={206} height={253}/></p>
                        <div>
                            <p className="name">Miri Kim</p>
                            <p className="position">Global Business Manager</p>
                            <p className="role">EX. Overseas Marketing Manager in Clrobur Studio<br/>EX. Sky Angkor Airline Co-pilot<br/>BS in Northeastern University</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="section-06">
                <h1>GLOBAL MENTORS</h1>
                <ul>
                    <li>
                        <p className="profile-image"><Image src="/images/main/profile-image-02.svg" alt="profile-image" width={173} height={220}/></p>
                        <div>
                            <p className="name">Nicolas Chaudron</p>
                            <p className="role">Id invest Partner</p>
                        </div>
                    </li>
                    <li>
                        <p className="profile-image"><Image src="/images/main/profile-image-02.svg" alt="profile-image" width={173} height={220}/></p>
                        <div>
                            <p className="name">Kevin Chong</p>
                            <p className="role">Samsung Strategy &amp; Innovation Center Senior Director of Corporate Development</p>
                        </div>
                    </li>
                    <li>
                        <p className="profile-image"><Image src="/images/main/profile-image-02.svg" alt="profile-image" width={173} height={220}/></p>
                        <div>
                            <p className="name">Geo Finch</p>
                            <p className="role">IUS Treasury OTA Former Vice President&CFO of Lockheed Martin Finance</p>
                        </div>
                    </li>
                    <li>
                        <p className="profile-image"><Image src="/images/main/profile-image-02.svg" alt="profile-image" width={173} height={220}/></p>
                        <div>
                            <p className="name">Jimmy Kim</p>
                            <p className="role">SparkLabs Co-Founder&amp;General Partner</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="section-07">
                <div className="section-07-01">
                    <div className="title-area">
                        <p><span>CONTACT US</span></p>
                        <h1>Augmented Knowledge</h1>
                    </div>
                    <p>
                        증강지능은 마이크로소프트 홀로렌즈를 이용한 디지털 트윈 기반의 설비 유지보수 및 정비기술 등 다양한 정보 연동 기술을 이용한 기술 서비스를 제공하고 있습니다.<br/>
                        (주)증강지능은 인하대학교 인공지능연구실에서 창업한 기업으로, 1991년 이후 30여년간 연구해온 인공지능 기술을 확장현실 기술과 융합한 제품을 4차 산업 분야에 적용하기 위해 노력하고 있습니다.
                    </p>
                    <div className="map">
                        맵 영역
                    </div>
                </div>
                <div className="section-07-02" id="contact">
                    <h2>How we can help you ?</h2>
                    <div className="input-area">
                        <div>
                            <label htmlFor="name">YOUR NAME (*) </label>
                            <input type="text" placeholder="What’s your good name ?" id="name"/>
                        </div>
                        <div>
                            <label htmlFor="email">YOUR EMAIL ADDRESS (*)</label>
                            <input type="text" placeholder="Enter your email address" id="email"/>
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">YOUR PHONE NUMBER (*)</label>
                            <input type="text" placeholder="What’s your phoen number?" id="phoneNumber"/>
                        </div>
                        <div>
                            <label htmlFor="subject">YOUR SUBJECT(*)</label>
                            <input type="text" placeholder="Enter your subject" id="subject"/>
                        </div>
                    </div>
                    <div className="text-area">
                        <label htmlFor="message">YOUR MESSAGE (*)</label>
                        <textarea placeholder="Describe about your message" id="message"></textarea>
                    </div>
                    <div className="submit-area">
                        <p>We are committed to protecting your privacy.<br/> We will never collect information about you without your explicit consent.</p>
                        <button type="submit">SUBMIT</button>
                    </div>
                </div>
            </section>
        </main>
    )
}
