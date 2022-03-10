import axios from 'axios';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import qs from 'qs';

export default function TestStrapi (props){
  const md = new MarkdownIt({html:true});
  // const htmlContent = sanitizeHtml(md.render(props.services_section[1].list));
  console.log(props);
  return(<>
    {/* <h1>{title}</h1> */}
    {/* <div dangerouslySetInnerHTML={{__html: htmlContent}}/> */}
  </>);
}

export async function getServerSideProps(){
  const query = qs.stringify({
    populate: {
      profile_section: {
        populate: '*'
      },
      services_section: {
        populate: '*'
      }
    }
  });
  const content = await axios.get(`http://localhost:1337/api/about?${query}`);
  console.log(content.data.data);
  return { props: content.data.data.attributes};
}

