use pulldown_cmark::{html, Options, Parser};
use std::collections::HashMap;
use std::fs;
use walkdir::WalkDir;
use warp::{path::FullPath, Filter};

use askama::Template;

#[derive(Template)]
#[template(path = "index.html")]
struct IndexTemplate<'a> {
    title: &'a str,
    body: &'a str,
}

struct Wiki {
    pub entries: HashMap<String, String>,
}

#[tokio::main(flavor = "current_thread")]
async fn main() {
    let mut wiki = Wiki {
        entries: HashMap::new(),
    };

    let mut options = Options::empty();
    options.insert(Options::ENABLE_STRIKETHROUGH);

    for entry in WalkDir::new(".")
        .into_iter()
        .filter_map(Result::ok)
        .filter(|e| !e.file_type().is_dir())
        .filter(|e| {
            e.path()
                .extension()
                .is_some_and(|ext| ext.to_str() == Some("md"))
        })
    {
        let contents =
            fs::read_to_string(entry.path()).expect("Something went wrong reading the file");

        let parser = Parser::new_ext(&contents, options);

        let mut html_output = String::new();
        html::push_html(&mut html_output, parser);

        let path = entry.path().display().to_string();
        let clean_path = path.strip_prefix('.').unwrap();
        println!("{}", clean_path);
        wiki.entries.insert(clean_path.to_owned(), html_output);
    }

    let content = warp::get()
        .and(warp::path::full())
        .map(move |path: FullPath| {
            let template = IndexTemplate {
                title: "Welcome",
                body: wiki.entries.get(path.as_str()).expect("fail"),
            };
            let res = template.render().expect("as");
            Ok(warp::reply::html(res))
        });

    warp::serve(content).run(([127, 0, 0, 1], 3030)).await;
}
