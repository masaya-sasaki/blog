import About from '../components/about'
import Landing from '../components/landing'
import Layout from '../components/layout'
import Projects from '../components/projects'
import { getFeaturedProjectsData } from '../lib/projects';
import { getFeaturedPostsData } from '../lib/posts';
import Blog from '../components/blog';
import Contact from '../components/contact';

export default function Home({featuredProjectsData, featuredPostsData}) {
  return (
    <Layout>
        <Landing/>
        <About/>
        <Projects featuredProjectsData={featuredProjectsData}/>
        <Blog featuredPostsData={featuredPostsData}/>
        <Contact/>
    </Layout>
  )
}

export async function getStaticProps(){
  const featuredProjectsData = getFeaturedProjectsData(); 
  const featuredPostsData = getFeaturedPostsData(); 

  return {
    props: { 
      featuredProjectsData, 
      featuredPostsData, 
    }, 
  }
}
