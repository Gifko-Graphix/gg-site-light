import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  // make layout mobile responsive (grid becomes one col on smallest screens)
  return (
    <Layout>
      <PageHeader title="We would love to hear from you!" />
      <div className="h-96 mx-48 grid grid-cols-2 place-content-stretch mt-12">
        <div className="grid grid-rows-2">
          <div className="flex flex-col items-center justify-top rounded-md">
            <h1 className="text-3xl text-center sm:text-left sm:text-4xl">Address</h1>
            <hr className="my-2 w-1/2" />
            <div className="text-center text-xl">
              <span className="inline mr-2">
                <LocationOnIcon />
              </span>
              <p className="inline">
                Second Labone Street A2
                <br />
                Accra, Ghana
                <br />
                GL-015-7443
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-top rounded-md">
            <h1 className="text-3xl text-center sm:text-left sm:text-4xl">Phone</h1>
            <hr className="my-2 w-1/2" />
            <div className="text-center text-xl space-y-2">
              <div>
                <p className="inline">+233552505740</p>
                <span className="inline space-x-2 ml-2">
                  <PhoneIcon />
                </span>
                <br />
              </div>
              <div>
                <p className="inline">+491627087122</p>
                <span className="inline space-x-2 ml-2">
                  <WhatsAppIcon />
                  <TelegramIcon />
                  <PhoneIcon />
                </span>
                <br />
              </div>
              <div>
                <p className="inline">+4915225169275</p>
                <span className="inline space-x-2 ml-2">
                  <WhatsAppIcon />
                  <TelegramIcon />
                  <PhoneIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="flex flex-col items-center justify-top rounded-md">
            <h1 className="text-3xl text-center sm:text-left sm:text-4xl">Email</h1>
            <hr className="my-2 w-1/2" />
            <div className="text-center text-xl space-y-1">
              <span className="inline mr-2">
                <EmailIcon />
              </span>
              <p className="inline">contact@gifkographix.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-top rounded-md">
            <h1 className="text-3xl text-center sm:text-left sm:text-4xl">Social Media</h1>
            <hr className="my-2 w-1/2" />
            <div className="text-center text-xl space-y-2">
              {/* <h2 className="text-2xl">General Inquires and Help</h2> */}
              <span className="inline mr-2">
                <InstagramIcon />
              </span>
              <p className="inline">@gifkographix</p>
              <br />
              <span className="inline mr-2">
                <TwitterIcon />
              </span>
              <p className="inline">@gifkographix</p>
              {/* <p>Dribble @gifkographix</p>
              <p>Behance @gifkographix</p> */}
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}
