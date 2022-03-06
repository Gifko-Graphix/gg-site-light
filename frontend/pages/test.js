import axios from 'axios';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

export default function TestStrapi ({title, content}){
  const md = new MarkdownIt({html:true});
  const htmlContent = sanitizeHtml(md.render(content));

  return(<>
    <h1>{title}</h1>
    <section dangerouslySetInnerHTML={{__html: htmlContent}} />
  </>);
}

export async function getServerSideProps(){
  const content = await axios.get('http://localhost:1337/api/test-collections/1');
  return { props: content.data.data.attributes};
}