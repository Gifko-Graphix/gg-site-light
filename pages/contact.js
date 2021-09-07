import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
      animation: 1s ${fadeInAnimation} ${(props) => 0.5 + parseInt(props.position, 10) / 2}s;
      opacity: 0;
      animation-fill-mode: forwards;
  `;

export default function Contact() {
  // make layout mobile responsive (grid becomes one col on smallest screens)
  return (
    <Layout>
      <PageHeader title="We would love to hear from you!" caption="Feel free to reach out to us so we can discuss our design future together!" />
      <div className="h-full mx-2 md:mx-48 grid md:grid-cols-2 md:place-content-stretch mt-6 md:mt-12 space-y-4 md:space-y-0">
        <div className="grid md:grid-rows-2 space-y-8 md:space-y-4">
          <FadeInDiv position="1">
            <div className="flex flex-col items-center justify-top rounded-md" id="email">
              <h1 className="text-3xl text-center sm:text-left sm:text-4xl font-serif">Email</h1>
              <hr className="my-2 w-full md:w-1/2" />
              <div className="text-center text-xl space-y-1">
                <a className="hover:text-green-light" href="mailto:contact@gifkographix.com">
                  <span className="inline mr-2">
                    <EmailIcon />
                  </span>
                  <p className="inline">contact@gifkographix.com</p>
                </a>
              </div>
            </div>
          </FadeInDiv>
          <FadeInDiv position="2">
            <div className="flex flex-col items-center justify-top rounded-md" id="social-media">
              <h1 className="text-3xl text-center sm:text-left sm:text-4xl font-serif">Social Media</h1>
              <hr className="my-2 w-full md:w-1/2" />
              <div className="text-center text-xl space-y-2">
                <a className="block hover:text-green-light" href="https://instagram.com/gifkographix">
                  <span className="inline mr-1">
                    <InstagramIcon />
                  </span>
                  <p className="inline font-sans">@gifkographix</p>
                </a>
                <a className="block hover:text-green-light" href="https://twitter.com/gifkographix">
                  <span className="inline mr-1">
                    <TwitterIcon />
                  </span>
                  <p className="inline font-sans">@gifkographix</p>
                </a>
                <br />
              </div>
            </div>
          </FadeInDiv>
        </div>

        <div className="grid md:grid-rows-2 space-y-8 md:space-y-4">
          <FadeInDiv position="3">
            <div className="flex flex-col items-center justify-top rounded-md" id="phone">
              <h1 className="text-3xl text-center sm:text-left sm:text-4xl font-serif">Phone</h1>
              <hr className="my-2 w-full md:w-1/2" />
              <div className="text-center text-xl space-y-2">
                <div>
                  <a className="hover:text-green-light" href="tel:+233552505740">
                    <p className="inline font-sans">+233 552505740</p>
                  </a>
                  <span className="inline space-x-2 ml-2">
                    <a className="hover:text-green-light" href="https://wa.me/message/EO5XDWQ5YP6RM1">
                      <WhatsAppIcon />
                    </a>
                    <a className="hover:text-green-light" href="https://t.me/gifkographix">
                      <TelegramIcon />
                    </a>
                  </span>
                  <br />
                </div>
                <div>
                  <a className="hover:text-green-light" href="tel:+491627087122">
                    <p className="inline font-sans">+49 1627087122</p>
                  </a>
                  <span className="inline space-x-2 ml-2">
                    <WhatsAppIcon />
                    <a className="hover:text-green-light" href="https://t.me/pngkm">
                      <TelegramIcon />
                    </a>
                  </span>
                  <br />
                </div>
                <div>
                  <a className="hover:text-green-light" href="tel:+4915225169275">
                    <p className="inline font-sans">+49 15225169275</p>
                  </a>
                  <span className="inline space-x-2 ml-2">
                    <WhatsAppIcon />
                    <a className="hover:text-green-light" href="https://t.me/danie_techie">
                      <TelegramIcon />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </FadeInDiv>
          <FadeInDiv position="4">
            <div className="flex flex-col items-center justify-top rounded-md" id="address">
              <h1 className="text-3xl text-center sm:text-left sm:text-4xl font-serif">Address</h1>
              <hr className="my-2 w-full md:w-1/2" />
              <div className="text-center text-xl">
                <a className="hover:text-green-light" href="https://www.google.com/maps/place/Second+Labone+St,+Accra,+Ghana/@5.5635023,-0.1717087,18z/data=!4m5!3m4!1s0xfdf9a9fc91d4e11:0xb660b6caff751604!8m2!3d5.5627548!4d-0.1700886">
                  <span className="inline mr-2">
                    <LocationOnIcon />
                  </span>
                  <p className="inline font-sans">
                    Second Labone Street A2
                    <br />
                    Accra, Ghana
                    <br />
                    GL-015-7443
                  </p>
                </a>
              </div>
            </div>
          </FadeInDiv>
        </div>
      </div>

    </Layout>
  );
}
