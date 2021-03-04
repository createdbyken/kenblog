import Card from '../components/Card'
import Fade from "react-reveal/Fade"
const companies = [
  {
    title: "Nutrionaly",
    img: "https://api.microlink.io?url=https%3A%2F%2Fnutrionaly.com&screenshot=true&meta=false&embed=screenshot.url",
    link: "https:nutrionaly.com",
    id: 1
  },
  {
    title: "ADO",
    img: "https://res.cloudinary.com/craftwebs/image/upload/v1612707507/ado_hm3vsa.png",
    link: "https://ado.com",
    id: 2
  },
  {
    title: "REBElation",
    img: "https://api.microlink.io?url=https%3A%2F%2Frebelation.afrock.mx&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://rebelation.afrock.mx",
    id: 3
  },
  {
    title: "Joon",
    img: "https://shrinktheweb.snapito.io/v2/webshot/spu-ea68c8-ogi2-3cwn3bmfojjlb56e?size=mc&screen=1024x768&url=https%3A%2F%2Fjoon.io",
    link: "https://joon.io",
    id: 4
  },
  {
    title: "Distruibuidora Kikey",
    img: "https://shrinktheweb.snapito.io/v2/webshot/spu-ea68c8-ogi2-3cwn3bmfojjlb56e?size=mc&screen=1024x768&url=https%3A%2F%2Fdistribuidorakikey.com.mx%2F",
    link: "https://distribuidorakikey.com.mx",
    id: 5
  },
  {
    title: "A'F Rock",
    img: "https://api.microlink.io?url=https%3A%2F%2Fafrock.mx%2Finvest-whit-us%2F&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://afrock.mx",
    id: 6
  },
  {
    title: "Great & Mini",
    img: "https://shrinktheweb.snapito.io/v2/webshot/spu-ea68c8-ogi2-3cwn3bmfojjlb56e?size=mc&screen=1024x768&url=https%3A%2F%2Fgreat-mini.mx%2F",
    link: "https://great-mini.mx/",
    id: 7
  },
  {
    title: "HP Omen",
    img: "https://api.microlink.io?url=https%3A%2F%2Fwww8.hp.com%2Fmx%2Fes%2Fcampaigns%2Fgamingpcs%2Foverview.html&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://www8.hp.com/mx/es/campaigns/gamingpcs/overview.html",
    id: 8
  }
];

export default function Portfolio(){
  return (
    <Fade bottom>
      <style jsx>{`
      .masonry {
        column-count: 3;
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-gap: 2rem;
        column-width: 400px;
        -webkit-column-width: 400px;
        -moz-column-width: 400px;
      }
      @screen lg {
        .masonry {
          column-count: 4;
        }
      }
    `}</style>
      <div className="masonry px-11 py-8">
        <div className="mx-auto px-6">
          <p 
            className="text-7xl md:text-8xl lg:text-9xl text-gray-800 mb-3 trns_text_blk">
            PORT <br />FOLIO
          </p>
        </div>
        {companies.map(item => (
          <div className="rounded-lg overflow-hidden mb-8" key={item.id}>
            <Card href={item.link} src={item.img} title={item.title} />
          </div>
        ))}
      </div>
    </Fade>
  )
}