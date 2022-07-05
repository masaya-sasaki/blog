import About from '../components/about'
import Landing from '../components/landing'
import Layout from '../components/layout'
import Projects from '../components/projects'
import { getSortedProjectsData } from "../lib/projects";
import { getSortedPostsData } from "../lib/posts";
import Blog from '../components/blog';
import Contact from '../components/contact';

export default function Home({allProjectsData, allPostsData}) {
  return (
    <Layout>
        <Landing/>
        <About/>
        <Projects allProjectsData={allProjectsData}/>
        <Blog allPostsData={allPostsData}/>
        <Contact/>
    </Layout>
  )
}

export async function getStaticProps(){
  const allProjectsData = getSortedProjectsData(); 
  const allPostsData = getSortedPostsData(); 

  return {
    props: { 
      allProjectsData, 
      allPostsData, 
    }, 
  }
}
