import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const articles = posts.map((article) => {
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