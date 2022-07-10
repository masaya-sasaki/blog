import About from '../components/about'
import Landing from '../components/landing'
import Layout from '../components/layout'
import Projects from '../components/projects'
import { getFeaturedProjectsData } from '../lib/projects';
import { getSortedPostsData } from "../lib/posts";
import Blog from '../components/blog';
import Contact from '../components/contact';

export default function Home({featuredProjectsData, allPostsData}) {
  return (
    <Layout>
        <Landing/>
        <About/>
        <Projects featuredProjectsData={featuredProjectsData}/>
        <Blog allPostsData={allPostsData}/>
        <Contact/>
    </Layout>
  )
}

export async function getStaticProps(){
  const featuredProjectsData = getFeaturedProjectsData(); 
  const allPostsData = getSortedPostsData(); 

  return {
    props: { 
      featuredProjectsData, 
      allPostsData, 
    }, 
  }
}
