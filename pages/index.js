import About from './components/about'
import Landing from './components/landing'
import Layout from './components/layout'
import Projects from './components/projects'
import { getSortedProjectsData } from "../lib/projects";
import { getSortedPostsData } from "../lib/posts";
import Blog from './components/blog';
import Contact from './components/contact';

export default function Home({allProjectsData, allPostsData}) {
  return (
    <Layout>
        <Landing/>
        <ol>TODO: est time 1.5h 
          <li>The goal is to make the website more of a single page application</li>
          Use  as a reference.
          <li>Decide the font, theme colors, the use of side sections</li>
          <li>Header</li>
          In the header, add in page client side navigation so that when the user clicks, it will smoothly slide down to that section.
          For the header, follow this to create a sticky navbar.
          <li>Projectbox</li>
          Modify the Projectbox component so that it can showcase skills and tech
          Add link to the projectbox component so that it links to the Github code
          <li>Add readme to this file and then host it on netlify.</li>
          <li>After that, write a post about buliding this website in the readme.</li>
          <li>After that, edit the previous projects that I have made and make it look better.</li>
          <li>After that, move on to the next project to create a nft minting site and nft minting contract.</li>
          done
          <li>Design a logo for use in the logo part of the header and the tab bar.</li>
        </ol>
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
