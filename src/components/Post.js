import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import postNotFound from "../errors/postNotFound.md";

const Post = ({ postUrl }) => {
  const url = `${process.env.PUBLIC_URL}${postUrl}`;
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        const contentType = res.headers.get("content-type");

        if (contentType && contentType.indexOf("text/markdown") !== -1)
          return res.text();
        return notFoundHandler();
        // TERNARIES DON'T WORK HERE
        // contentType && contentType.indexOf("text/markdown") !== -1
        //   ? res.text()
        //   : notFoundHandler();
      })
      .then((text) => {
        console.log(text);
        setContent(text);
      });
  }, [url]);

  return <Markdown>{content}</Markdown>;
};

async function notFoundHandler() {
  //   return await fetch(postNotFound)
  //     .then((res) => res.text())
  //     .then((text) => console.log(text));
  let result = await fetch(postNotFound);
  let text = await result.text();
  return text;
}

export default Post;
