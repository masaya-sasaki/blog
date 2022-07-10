import Layout from "../components/layout";
import { getSortedProjectsData } from "../lib/projects";
import ProjectBox from "../components/projectbox";

export default function Post({allProjectsData}){
    return (
        <Layout>
            <h2 className='projectheading'>Projects</h2>
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