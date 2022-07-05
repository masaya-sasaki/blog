import Layout from "./components/layout";
import { getSortedPostsData } from "../lib/posts";
import PostBox from "./components/postbox";

export default function Post({allPostsData}){
    return (
        <Layout>
            <h2 className='postheading'>Posts</h2>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 10px 0 10px'}} >
            {allPostsData.map(({ id, date, title, summary }) => (
              <PostBox 
              title={title}
              id={id}
              date={date}
              key={id}
              summary={summary}
              />
              ))}
            </ul>
        </Layout>
    )
}


export async function getStaticProps(){
    const allPostsData = getSortedPostsData();  
  
    return {
      props: {
        allPostsData, 
      }, 
    }
  }