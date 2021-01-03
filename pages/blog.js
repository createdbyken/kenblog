import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Blog({ allPostsData }){
    return (
        <section className="container mx-auto px-6 p-10">
            <div className="grid grid-cols-3 gap-4">
                {allPostsData.map(({ id, date, title }) => (
                    <div className="...  md:shadow-lg rounded bg-white pt-5 pb-5" key={id}>
                        <Link href={`/posts/${id}`}>
                            <a className="text-xl antialiased text-gray-700	my-14">{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </div>
                ))}
            </div>
        </section>
    )
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
	  props: {
		allPostsData
	  }
	}
}