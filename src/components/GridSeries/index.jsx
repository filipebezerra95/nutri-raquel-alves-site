import { GridSeries, Card } from "./styles";
import { episodes } from "./episodesData";
const imageModules = import.meta.glob(
  "../../assets/series-page/imgEpisodios/*.{png,jpg,svg,jpeg,webp}",
  { eager: true }
);

const images = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => {
    const nameA = pathA.match(/(\d+)/)?.[0] || 0;
    const nameB = pathB.match(/(\d+)/)?.[0] || 0;
    return Number(nameA) - Number(nameB);
  })
  .map(([, module]) => module.default);



function SectionGrids(){

    return (
        <GridSeries>
            {episodes.map((episode, index) => (
                <Card key={index}
                      href={episode.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ animationDelay: `${index * 0.05}s` }}
                >
                    <img src={images[index]} alt={episode.title}/>
                    <div>{episode.title}</div>
                </Card>
            ))}
        </GridSeries>
    );
};

export default SectionGrids


