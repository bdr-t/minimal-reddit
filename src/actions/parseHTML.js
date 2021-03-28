import he from "he";
import sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";


const parseHtml = (body) =>{
    const text = he.decode(body);
    const html = sanitizeHtml(text);

    return parse(html)
}

export default parseHtml