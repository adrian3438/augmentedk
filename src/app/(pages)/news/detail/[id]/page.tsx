import '@/app/scss/news-detail.scss';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section1 from "@/components/main/Section1";
import Link from "next/link";

// interface ParamsType {
//     params: { id: string | undefined };
// }

export default function NewsDetail() {
    const subPage = true;
    return (
        <>
            <Header subPage={subPage}/>

            <Section1/>

            <section className="news-detail">
                <div className="content-detail">
                    <section className="content-detail-header">
                        <h3>타이틀이 들어갑니다.</h3>
                        <p className="date">2024-10-24</p>
                    </section>
                    <section className="detail">
                        내용이 들어갑니다.
                    </section>
                    <div className="title-list">
                        <div>
                            <span>이전글</span>
                            <Link href="#">이전글 타이틀 입니다.</Link>
                        </div>
                        <div>
                            <span>다음글</span>
                            <Link href="#">다음글 없음</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
