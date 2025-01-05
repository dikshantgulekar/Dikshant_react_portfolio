import React, { useState } from 'react'
import './portfolio.css'
import NETFLIX from '../../assets/netflix.jpg'
import GYM from '../../assets/GYM.jpg'
import ONETEL from '../../assets/ONETEL.jpg'
import CALCY from '../../assets/calculator.png'
import WEATHER from '../../assets/weather.png'
import STUDENT from '../../assets/student_details.jpg'
import { FaGithub } from "react-icons/fa";
import PortfolioNav from './PortfolioNav'
import SIMPLE from '../../assets/simple-interest-ui.jpg'
import PPFJS from '../../assets/ppf-js.jpg'
import fakestore from '../../assets/fakestore-fetch.jpg'
import restcountry from '../../assets/rest-country.jpg'
import MOVIEDB from '../../assets/moviedb-js.jpg'
import QRCODE from '../../assets/QRCODE.jpg'
import crud from '../../assets/react-crud.jpg'
import reactMoviedb from '../../assets/react-moviedb.jpg'
import reactFakestore from '../../assets/react-fakestore.jpg'
import CHATAPP from '../../assets/CHATAPP.jpg'
import MERNSMS from '../../assets/mern_sms_portal.jpg'

const data =[
  {
    id: 101,
    img : MOVIEDB,
    title : "This is MOVIE DB APP",
    demo :'https://dikshant-gulekar-js-moviedb.netlify.app/',
    git : 'https://github.com/dikshantgulekar/moviedb-js'
  },
  {
    id: 102,
    img : STUDENT,
    title : "This is Student Details APP",
    demo :'https://dikshant-gulekar-table-details.netlify.app/',
    git : 'https://github.com/dikshantgulekar/student-details'
  },
  {
    id: 103,
    img : QRCODE,
    title : "This is QR CODE GENERATOR",
    demo :'https://dikshant-js-qr-code-generator.netlify.app/',
    git : 'https://github.com/dikshantgulekar/qrcode-generator'
  },
//////////////////////////////
  {
    id: 104,
    img : fakestore,
    title : "This is Fake Store API using FETCH",
    demo :'https://dikshant-js-fakestore-api-using-fetch.netlify.app/',
    git : 'https://github.com/dikshantgulekar/fake-store-api-fetch'
  },
  {
    id: 105,
    img : fakestore,
    title : "This is Fake Store API using AXIOS",
    demo :'https://dikshant-js-fakestore-api-using-axios.netlify.app/',
    git : 'https://github.com/dikshantgulekar/Netflix_Clone'
  },
  {
    id: 106,
    img : fakestore,
    title : "This is Fake Store API using ASYNC AWAIT",
    demo :'https://dikshant-js-fakestore-api-async-await.netlify.app/',
    git : 'https://github.com/dikshantgulekar/fakestore-api-async-await'
  },
//////////////////////////////
  {
    id: 107,
    img : restcountry,
    title : "This is Rest Country API using FETCH",
    demo :'https://dikshant-js-restcountry-api-fetch.netlify.app/',
    git : 'https://github.com/dikshantgulekar/restcountry-api-fetch'
  },
  {
    id: 108,
    img : restcountry,
    title : "This is Rest Country API using AXIOS",
    demo :'https://dikshant-js-restcountry-api-axios.netlify.app/',
    git : 'https://github.com/dikshantgulekar/restcountry-api-axios'
  },
  {
    id: 109,
    img : restcountry,
    title : "This is Rest Country API using ASYNC AWAIT",
    demo :'https://dikshant-js-restcountry-api-async.netlify.app/',
    git : 'https://github.com/dikshantgulekar/restcountry-api-async'
  },
//////////////////////////////

  {
    id: 110,
    img : SIMPLE,
    title : "This is SIP calculator using html5 & css3",
    demo :'https://dikshant-ui-sip-calculator.netlify.app/',
    git : 'https://github.com/dikshantgulekar/simple-interest-UI-'
  },
  {
    id: 111,
    img : PPFJS,
    title : "This is PPF Calcuulator App",
    demo :'https://dikshant-gulekar-ppf-calculator.netlify.app/',
    git : 'https://github.com/dikshantgulekar/ppf-calculator'
  },
  {
    id: 112,
    img : CALCY,
    title : "This is Calculator",
    demo :"https://dikshant-gulekar-calculator-app.netlify.app/",
    git: 'https://github.com/dikshantgulekar/calculator-ui-'
  },
  {
    id: 113,
    img : WEATHER,
    title : "This is Weather Update APP",
    demo :'https://dikshant-js-weather.netlify.app/',
    git: 'https://github.com/dikshantgulekar/weather-app'
  },

  //////////////////////////////////////////////////////
  {
    id: 201,
    img : fakestore,
    title : "This is Fake Store API using AJAX",
    demo :'https://dikshant-js-fakestore-api-ajax.netlify.app/',
    git : 'https://github.com/dikshantgulekar/fakestore-api-ajax'
  },
  {
    id: 202,
    img : restcountry,
    title : "This is Rest Country API using AJAX",
    demo :'https://dikshant-js-restcountry-api-ajax.netlify.app/',
    git : 'https://github.com/dikshantgulekar/restcountry-api-ajax'
  },

  //////////////////////////////////////////////////////////

  {
    id: 1,
    img : NETFLIX,
    title : "This is NETFLIX CLONE using html5 & css3",
    demo :'https://dikshant-ui-netlix.netlify.app/',
    git : 'https://github.com/dikshantgulekar/Netflix_Clone'
  },
  {
    id: 2,
    img : ONETEL,
    title : "This is ONETEL CLONE using html5 & css3",
    demo :'https://dikshant-ui-onetel.netlify.app/',
    git : 'https://github.com/dikshantgulekar/onetel'
  },
  {
    id: 3,
    img : GYM,
    title : "This is GYM CLONE using html5 & css3",
    demo :'https://dikshant-ui-gym.netlify.app/',
    git : 'https://github.com/dikshantgulekar/gym'
  },
  ////////////////////////////////////////
  {
    id: 301,
    img : crud,
    title : "This is CRUD Operation using REACT JS & FIREBASE",
    demo :'https://dikshant-react-firebase-crud.netlify.app/',
    git : 'https://github.com/dikshantgulekar/react-crud'
  },
  // {
  //   id: 302,
  //   img : reactMoviedb,
  //   title : "This is Movie DB using REACT",
  //   demo :'',
  //   git : '#'
  // },
  {
    id: 303,
    img : reactFakestore,
    title : "This is Fake Store using REACT",
    demo :'https://dikshant-fakestoreapi-react.netlify.app/',
    git : 'https://github.com/dikshantgulekar/fakestore-react'
  },

  ////////////////////////////////////////
  {
    id: 401,
    img : CHATAPP,
    title : "This is CHAT APP using NODEJS & EXPRESSJS & MONGODB",
    demo :'https://dikshant-node-chat-app.onrender.com/',
    git : 'https://github.com/dikshantgulekar/node_chat_app'
  },
  ////////////////////////////////////////

  {
    id: 501,
    img : MERNSMS,
    title : "This is SMS  PORTAL using REACTJS & NODEJS & MONGODB",
    demo :'https://dikshant-mern-sms-portal.netlify.app/',
    git : 'https://github.com/dikshantgulekar/sms_portal_node_api'
  },

  // {
  //   id: 5,
  //   img : FAKESTORE,
  //   title : "This is FAKE STORE API using AJAX & JSON",
  //   demo :"https://dikshant-gulekar-productfilter.netlify.app/"
  // },
  // {
  //   id: 6,
  //   img : COUNTRY,
  //   title : "This is SEARCH COUNTRY API using AJAX & JSON",
  //   demo :"https://dikshant-gulekar-search-country.netlify.app/"
  // }
]
export default function Portfolio() {

  const [filter, setFilter] = useState('ALL'); // State to track the filter

  // Filter items based on the selected filter
  const filteredData = data.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'HTML') return item.id < 101;
    if (filter === 'JS') return item.id >= 101 && item.id < 201;
    if (filter === 'AJAX') return item.id >= 201 && item.id < 301;
    if (filter === 'REACT') return item.id >= 301 && item.id < 401;
    if (filter === 'NODE') return item.id >= 401 && item.id < 501;
    if (filter === 'MERN') return item.id >= 501 && item.id < 601;
    return false;
  });


  return (
    <>
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>PORTFOLIO</h2>
      <PortfolioNav setFilter={setFilter} />
      <div className='container portfolio__container' >
       {
        filteredData && filteredData.length>0 && filteredData.map(({id, img, title, demo, git})=>
          <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                  <img src={img} alt='netflix'/>
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                  <a href={demo} className='btn btn-primary' target='_blank'>LIVE DEMO</a>
                  <a href={git} className='btn ' target='_blank'>Github<FaGithub/></a>
              </div>
          </article>
        )
       }

      </div>
    </section>
    </>
  )
}
