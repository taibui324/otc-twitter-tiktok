import React from "react";
import "./styles.css";

import InnerHTML from "dangerously-set-html-content";
import { useParams, useRouteMatch } from "react-router-dom";

function createHTMLMarkup() {
    return {
      __html:
        '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@onthecard/video/6985849077019708699?referer_url=http%3A%2F%2Flocalhost%3A3000%2F&referer_video_id=6983626023627656475&refer=embed&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6980724477710108162" data-video-id="6985849077019708699" style="max-width: 605px;min-width: 325px;" >  <section> <a>Testing</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>'
    };
  }

function TikTok() {

    const { name1 } = useParams();
    const match = useRouteMatch("/site/TiktokVideo");
  return (
    <div className="setup">
        
      <h1>Tik Tok Embed</h1>

      <InnerHTML html={createHTMLMarkup().__html} />
    </div>
  );
}

export default TikTok;