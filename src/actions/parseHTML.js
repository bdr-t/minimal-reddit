import he from "he";
import sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";


const parseHtml = (body) =>{
    if(body){
        const text = he.decode(body);
        const html = sanitizeHtml(text);
        return parse(html)

    }
    

    return body
}

export default parseHtml