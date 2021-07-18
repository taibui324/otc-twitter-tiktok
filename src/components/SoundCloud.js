import { useParams, useRouteMatch } from "react-router-dom";
import ReactPlayer from "react-player";


export default function SoundCloud() {

    const { name } = useParams();
    const match = useRouteMatch("/work/SoundCloud");

    return (
      <ReactPlayer
        controls={true}
        url="https://soundcloud.com/doomhound/doomhound-yum-yum-watercourse"
        playing
      />
    );
  }