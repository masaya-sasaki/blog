import Head from "next/head";
import Link from "next/link"
import Layout from "../../components/layout";
import { getProjectData } from "../../lib/projects"
import { getAllProjectIds } from '../../lib/projects';

export default function Project({projectData}){
    return (
        <Layout>
        <Head>
          <title>{projectData.title}</title>
        </Head>
          <article style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>{projectData.title}</h2>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} style={{width: '80%'}} />
            <p>Return to <span style={{color: '#0000FF'}}><Link href='/'>home</Link></span> </p>
          </article>
      </Layout>
      )
}

export function getStaticPaths() {
    const paths = getAllProjectIds();
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id);
    return {
      props: {
        projectData,
      },
    };
  }