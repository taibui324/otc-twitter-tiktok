import React from "react";
import "./styles.css";

import InnerHTML from "dangerously-set-html-content";
import { useParams, useRouteMatch } from "react-router-dom";


function createHTMLMarkup() {
    return {
      __html:
        ' <div class= "welcome-back"> </div> <script src="https://unpkg.com/react@16/umd/react.production.min.js"crossorigin></script> <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>   <script type = "text/babel" src="Search.js"></script> <script type="text/babel"> ReactDOM.render(<Search />, document.querySelector(".welcome-back"));  </script><blockquote class="twitter-tweet"><p lang="en" dir="ltr">creators first! <a href="https://t.co/GqIiYsNHGb">https://t.co/GqIiYsNHGb</a></p>&mdash; Beacons (@beaconsai) <a href="https://twitter.com/beaconsai/status/1397832198871404547?ref_src=twsrc%5Etfw">May 27, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
    };
  }

function Twitter() {

    const { name2 } = useParams();
    const match = useRouteMatch("/work/Twitter");
  return (
    <div className="setup">
        
      <h1>Twitter Embed</h1>

      <InnerHTML html={createHTMLMarkup().__html} />
    </div>
  );
}

export default Twitter;