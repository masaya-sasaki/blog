import Head from "next/head";
import Link from "next/link"
import { getPostData } from "../../lib/posts"
import { getAllPostIds } from '../../lib/posts';
import Layout from "../components/layout";
import Date from '../components/date'

export default function Post({postData}){
    return (
      <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
        <article>
          <h2>{postData.title}</h2>
          <Date dateString={postData.date} />
          <br/>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <p>Return to <span style={{color: '#0000FF'}}><Link href='/'>home</Link></span> </p>
        </article>
    </Layout>
    )
}

export function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }