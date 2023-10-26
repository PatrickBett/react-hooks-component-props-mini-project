import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    console.log(posts);
    const articles = posts.map((article) => {
        //destructuring each article
        const {date: date, title: title, preview: preview, id: id} = article;
        return <Article key= {id} title = {title} date = {date} preview = {preview} />
    })

  return (
    <main>
        {articles}
    </main>
  );  
}

export default ArticleList;