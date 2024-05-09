import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function HelmetMetaData(props) {
   let location = useLocation();
   let currentUrl = "https//superluminal.onrender.com/" + location.pathname;
   let quote = props.quote !== undefined ? props.quote : "";
   let title = props.title !== undefined ? props.title : "Superluminal - Peace, Love & Psytrance";
   let image = props.image !== undefined ? props.image : "https://static.wixstatic.com/media/1d469b_3bedb45162264b3598e6d9a9d90e4e2e~mv2.png/v1/fill/w_1230,h_680,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/1d469b_3bedb45162264b3598e6d9a9d90e4e2e~mv2.png";
   let description = props.description !== undefined ? props.description  : "Superluminal is the project of Kabayun and his partner, muse, and wife Yasmin. Those who know them together are aware of how much of a symbiosis they are in various ways. She doing art to his music and vice versa - constantly inspiring each other. Now they have taken the next level by making music together! Superluminal is the next logical step and the result of both their energies and their love for each other as well as for psychedelic culture. With pumping basslines and twisted soundscapes, it’s the perfect sound to kick up some dust and shake your chakras!"
   
   ;
   let hashtag = props.hashtag !== undefined ? props.hashtag : "#superluminal";
return (
 <Helmet>
     <title>{title}</title>
     <meta charset="utf-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="csrf_token" content="" />
     <meta property="type" content="website" />
     <meta property="url" content={currentUrl} />
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
     <meta name="msapplication-TileColor" content="#ffffff" />
     <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
     <meta name="theme-color" content="#ffffff" />
     <meta name="_token" content="" />
     <meta name="robots" content="noodp" />
     <meta property="title" content={title} />
     <meta property="quote" content={quote} />
     <meta name="description" content={description} />
     <meta property="image" content={image} />
     <meta property="og:locale" content="en_US" />
     <meta property="og:type" content="website" />
     <meta property="og:title" content={title} />
     <meta property="og:quote" content={quote} />
     <meta property="og:hashtag" content={hashtag} />
     <meta property="og:image" content={image} />
     <meta content="image/*" property="og:image:type" />
     <meta property="og:url" content={currentUrl} />
     <meta property="og:site_name" content="CampersTribe" />
     <meta property="og:description" content={description} />    
     </Helmet>
);
}