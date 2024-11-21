// //import React, { useState } from "react";
// import { useParams, Navigate } from "react-router-dom";
// import DataFichLogement from "../../datas/logement.json";
// import Tag from "./Tag";
// import Collapse from "../Collapse";
// import Carrousel from "./Carrousel";
// import Rate from "./Rate";
// import Host from "./Host";

// const FicheLogementDisplay = () => {
//   /* Récupère la bonne fiche */
//   const { id } = useParams();

//   const ficheLogement = DataFichLogement.find((logement) => logement.id === id);

//   /* Tags */
//   const tagsLogement = ficheLogement?.tags.map((tags, i) => {
//     return <Tag key={i} nom={tags} />;
//   });

//   /* Équipements */
//   const equipements = ficheLogement?.equipments.map((equipment, i) => {
//     return (
//       <ul key={i}>
//         <li>{equipment}</li>
//       </ul>
//     );
//   });

//   return (
//     <>
//       {ficheLogement ? (
//         <div className="Fiche-container">
//           <Carrousel slides={ficheLogement?.pictures} />
//           <section className="Fiche-logement">
//             <div className="description-info">
//               <div className="description-info__titletags">
//                 <div className="description-info__titletags__title">
//                   <span className="titre-logement">{ficheLogement?.title}</span>
//                   <span className="endroit-logement">
//                     {ficheLogement?.location}
//                   </span>
//                 </div>
//                 {/* Tags */}
//                 <div className="description-info__titletags__tags">
//                   {tagsLogement}
//                 </div>
//               </div>

//               <div className="description-info__proprietaire">
//                 {/* Hosting */}
//                 <div className="description-info__proprietaire__nom-prop">
//                   <Host
//                     name={ficheLogement?.host.name}
//                     picture={ficheLogement?.host.picture}
//                   />
//                 </div>
//                 {/* Rating */}
//                 <div className="description-info__proprietaire__rate">
//                   <Rate score={ficheLogement.rating} />
//                 </div>
//               </div>
//             </div>
//           </section>
//           {/* Collapse */}
//           <div className="description-centent">
//             <div className="description-centent__description">
//               <Collapse
//                 title="Description"
//                 content={ficheLogement?.description}
//               />
//             </div>
//             <div className="description-centent__equipement">
//               <Collapse title="Équipements" content={equipements} />
//             </div>
//           </div>
//         </div>
//       ) : (
//         <Navigate replace to="/404" />
//       )}
//     </>
//   );
// };

// export default FicheLogementDisplay;




import { useParams, Navigate } from "react-router-dom";
import DataFichLogement from "../../datas/logement.json";
import Tag from "./Tag";
import Collapse from "../Collapse";
import Carrousel from "./Carrousel";
import Rate from "./Rate";
import Host from "./Host";

const FicheLogementDisplay = () => {
  const { id } = useParams();
  const ficheLogement = DataFichLogement.find((logement) => logement.id === id);

  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return <li key={i}>{equipment}</li>;
  });

  return (
    <>
      {ficheLogement ? (
        <div className="Fiche-container">
          <Carrousel slides={ficheLogement?.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{ficheLogement?.title}</span>
                  <span className="endroit-logement">{ficheLogement?.location}</span>
                </div>
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                <div className="description-info__proprietaire__nom-prop">
                  <Host name={ficheLogement?.host.name} picture={ficheLogement?.host.picture} />
                </div>
                <div className="description-info__proprietaire__rate">
                  <Rate score={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>
          <div className="description-centent">
            <div className="description-centent__description">
              <Collapse title="Description" content={ficheLogement?.description} />
            </div>
            <div className="description-centent__equipement">
              <Collapse title="Équipements"
              content={<ul>{equipements}</ul>} >
                {/* <ul>{equipements}</ul> */}
              </Collapse>
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default FicheLogementDisplay;