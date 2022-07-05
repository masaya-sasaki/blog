import Layout from "./components/layout";
import { getSortedProjectsData } from "../lib/projects";
import ProjectBox from "./components/projectbox";

export default function Post({allProjectsData}){
    return (
        <Layout>
            <h2 className='projectheading'>Projects</h2>
            <p>
                1. I want to make the project page like a grid design that is 
                similar to this. 
                2. Things I want to add for project data.  
                <ol>
                    <li>Project title</li>
                    <li>Project description</li>
                    <li>Project skill set. e.g. React, styled components, Next.js</li>
                    <li>Socil links w Icons</li>
                </ol>
            </p>
            <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingInlineStart: '0px' }} >
            {allProjectsData.map(({ id, title, image, skills, link, githublink }) => (
              <ProjectBox 
              title={title}
              id={id}
              image={image}
              skills={skills}
              link={link}
              githublink={githublink}
              key={id}
              />
              ))}
            </ul>
        </Layout>
    )
}



export async function getStaticProps(){
    const allProjectsData = getSortedProjectsData(); 
  
    return {
      props: { 
        allProjectsData, 
      }, 
    }
  }