import React from 'react';
import ReactDOM from 'react-dom/client';
import { Box, Button, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Phone, ArrowUpRight, Trophy, BadgeCheck, PackageCheck, Headphones, Star, Mail } from 'lucide-react';
import './styles.css';

const theme = extendTheme({
  fonts: {
    heading: 'Arial, Helvetica, sans-serif',
    body: 'Arial, Helvetica, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      },
    },
  },
});

const image = (name) => `/pictures/${name}`;

function TopBar() {
  return (
    <Box className="top-bar">
      <h3>Rasi offers worldwide print export services!</h3>
    </Box>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="nav-title">
        <h2>RASI PRINTS</h2>
        <nav className="navbar">
          {['Home', 'About Us', 'Products', 'Gallery', 'Contact'].map((item) => (
            <a href="#" key={item}>{item}</a>
          ))}
        </nav>
        <Phone className="phone-icon" size={24} />
      </div>
      <div className="hero-copy">
        <h1>Elevating Every Print With <br />Precision and Passion.</h1>
        <p>Rasi Screen Printing, Where tradition meets innovation, delivery<br />exquisite designs with every stroke.</p>
        <Button type="button">Contact us</Button>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <>
      <div className="rank-heading">
        <hr />
        <h2>India's No.1 Screen Printing Company</h2>
        <hr />
      </div>
      <section className="image-content">
        <div className="intro-image">
          <img src={image('pillow.avif')} alt="Printed pillow" />
        </div>
        <div className="content">
          <h4>Rasi Screen Printing</h4>
          <h1>Timeless Artistry,<br />Modern Saphistication</h1>
          <p>At Rasi Screen Printing, We interwine the rich heritage of traditional<br />Craftsmanship with contemporary flair to bring you a unique fusion of art<br />and fashion. With a Passion for preseerving cultural aesthetics, we <br />meticulously handcraft each piece, celebrating the intricate beauty of<br />Screen printing. Join us on a journey where tradition meets innovation,<br />and let Rasi Screen Printing adorn your world.</p>
          <div className="button-row">
            <Button className="green-button">Know more <ArrowUpRight size={18} /></Button>
            <Button className="white-button">Contact us <ArrowUpRight size={18} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}

const benefitData = [
  { icon: Trophy, title: 'Premium Quality', text: 'crafted to perfection' },
  { icon: BadgeCheck, title: 'Warrantly Protection', text: 'Guaranted Excellence' },
  { icon: PackageCheck, title: 'Timely Shipping', text: 'Prompt Delivery Assurance' },
  { icon: Headphones, title: 'Sustainable Artistry', text: 'Eco-Friendly Practices' },
];

function Benefits() {
  return (
    <section className="icon-text">
      {benefitData.map(({ icon: Icon, title, text }) => (
        <div className="benefit" key={title}>
          <Icon size={62} strokeWidth={1.5} />
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

const techniques = [
  {
    image: '1.webp',
    title: <>Traditional Textile<br />Screen Printing</>,
    body: <>This method is extensively employed in the fashion<br />and apparel industry for printing designs onto<br />garments,fabrics, and accesories.</>,
    className: 'tradition-textile',
  },
  {
    image: '2.webp',
    title: <>Advanced UV<br />Screen Printing</>,
    body: <>UV screen printing has gained popularity due to its <br /> ability to cure instantly when exposed to ultraviolet<br />light, resulting in fast production</>,
    className: 'screen-printing',
  },
  {
    image: '3.webp',
    title: <>Four-Color<br />Process Printing</>,
    body: <>Also known as CMYK printing, this method is widely<br />used for reproducing full color images with a broad <br /> range of tones and gradients.</>,
    className: 'four-color',
  },
];

function Techniques() {
  return (
    <>
      <section className="heading-paragraph">
        <h1>Rasi's Array of Screen Printing Techiniques</h1>
        <p>Dive into the world of possibilities with Rasi's diverse range of screen printing<br /> techiniques. From traditional methods to cutting-edge innovatios.</p>
      </section>
      <section className="image-text">
        {techniques.map((item) => (
          <div className={item.className} key={item.image}>
            <img src={image(item.image)} alt="" />
            <h2>{item.title}<ArrowUpRight size={24} className="inline-arrow" /></h2>
            <p>{item.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}

function Praise() {
  return (
    <>
      <section className="paragraph-heading">
        <h1>Client Praise for Rasi Screen Printing</h1>
        <p>Discover why clients are singing praises for Rasi Screen Printing. From impacable attention to detail<br />to timely delivery, Our dedication to excellence ensures that every project exceeds expectation.</p>
      </section>
      <section className="industry-icons">
        {['birla.png', 'image2.png', 'raymond.png'].map((logo) => (
          <img src={image(logo)} alt="" key={logo} />
        ))}
      </section>
      <section className="content-image">
        <div>
          <h3>High Quality Printing and On-Time!</h3>
          <div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star fill="currentColor" key={i} size={22} />)}</div>
          <p>We are incredibly impressed with the exceptional service and quickly provided by<br />Rasi Screen Printing. Their attention to detail, commitment to delivering on time,<br />and the level of professionalism displayed throughtout our collaboration have been<br />Outstanding. Rasi's expertise in screen printing has consistently exceeded our <br /> expectations, ensuring that our branding and promotional materials are of the<br />highest standard.</p>
          <p>We are grateful fortheir paternership and highly recommend Rasi Screen Printing to<br />anyone in need of top-notch printing services. <i>~Mr.Manjunath Gowda/CFO</i></p>
        </div>
        <div>
          <img src={image('green.jpg')} alt="Printed green textile" />
        </div>
      </section>
      <section className="icons">
        {['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png', 'seven.png'].map((logo) => (
          <img src={image(logo)} alt="" key={logo} />
        ))}
      </section>
    </>
  );
}

function Gallery() {
  return (
    <>
      <section className="heading">
        <h1>Showcasing Our Best and Proudest Works</h1>
        <p>Explore the captivating world of Rasi's screen printing mastery, exceptional<br />Creations imbued with precision, innovation, and enduring saphistifaction.</p>
      </section>
      <section className="fashion-images">
        <div><img src={image('clothes.jpeg')} id="cloth-image" alt="Printed clothes" /></div>
        <div><img src={image('bed.jpeg')} id="bed-image" alt="Printed bedding" /></div>
        <div><img src={image('girl.jpeg')} id="girl-image" alt="Printed apparel" /></div>
      </section>
      <section className="wide-image">
        <img src={image('woman.jpeg')} alt="Fashion screen print showcase" />
      </section>
      <section className="heading_paragraph">
        <h1>Reach Out to Rasi Screen Printing Today!</h1>
        <p>Have questions or ready to start your next printing project? Don't hesitateto contact us! Our<br />friendly team at Rasi Screen Printing is here to assist you every step of the way.</p>
      </section>
      <section className="location-image">
        <img src={image('location.png')} alt="Rasi location map" />
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div><img src={image('footerimage.png')} alt="Rasi production sample" /></div>
        <div>
          <h2>WE ARE THE BEST!</h2>
          <p>Rasi is a premierdestination for those<br />seeking unparalled excellence in screen<br />printing services. With a rich legacy of <br />craftmanship and innovation, we pride<br />ourselves on delivering superior quality<br />prints captivate and inspire. From Our<br />state-of-the-art facilities</p>
        </div>
        <div>
          <h2>ACCOUNTS</h2>
          {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'G-mail'].map((item) => <p key={item}>{item}</p>)}
        </div>
        <div>
          <h2>SITEMAP</h2>
          {['Home', 'About Us', 'Products', 'Gallery', 'Contact Us'].map((item) => <p key={item}>{item}</p>)}
        </div>
        <div>
          <h2>HEAD OFFICE</h2>
          <p>No 712, Dharapuram Road 60 Feet Road,<br />Dharapuram Road Tirupur-<br />641605(velliyankadu)</p>
          <div className="phone-email">
            <div><Phone size={17} /><Phone size={17} /></div>
            <div><p>6238641240</p><p>9745847008</p></div>
            <div><Phone size={17} /><Mail size={17} /></div>
            <div><p>9744723238</p><p>rasiprinting1989@gmail.com</p></div>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2024, All Rights Reserved by Galvin Design Studio.</p>
    </footer>
  );
}

function App() {
  return (
    <Box as="main">
      <TopBar />
      <Hero />
      <Intro />
      <Benefits />
      <Techniques />
      <Praise />
      <Gallery />
      <Footer />
    </Box>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
