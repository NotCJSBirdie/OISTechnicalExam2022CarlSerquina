import styles from "../../styles/Modal2.module.css";
import { useState } from "react";
import F1Logo from "../../public/images/f1_logo.png";
import Image from "next/image";
import TrustArcLogo from "../../public/images/trustarc-logo-small.png";

const Modal2 = () => {
  const [noButtonFunctional, setNoButtonFunctional] = useState(
    <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
      NO
    </button>
  );

  const [yesButtonFunctional, setYesButtonFunctional] = useState(
    <button id={styles.inactive} className="p-2 px-4 font-semibold">
      YES
    </button>
  );

  const [noButtonAdvertising, setNoButtonAdvertising] = useState(
    <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
      NO
    </button>
  );

  const [yesButtonAdvertising, setYesButtonAdvertising] = useState(
    <button id={styles.inactive} className="p-2 px-4 font-semibold">
      YES
    </button>
  );

  const [noButtonStore, setNoButtonStore] = useState(
    <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
      NO
    </button>
  );

  const [yesButtonStore, setYesButtonStore] = useState(
    <button id={styles.inactive} className="p-2 px-4 font-semibold">
      YES
    </button>
  );

  const [noButtonPersonalAds, setNoButtonPersonalAds] = useState(
    <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
      NO
    </button>
  );

  const [yesButtonPersonalAds, setYesButtonPersonalAds] = useState(
    <button id={styles.inactive} className="p-2 px-4 font-semibold">
      YES
    </button>
  );

  const [noButtonPersonalContent, setNoButtonPersonalContent] = useState(
    <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
      NO
    </button>
  );

  const [yesButtonPersonalContent, setYesButtonPersonalContent] = useState(
    <button id={styles.inactive} className="p-2 px-4 font-semibold">
      YES
    </button>
  );

  const [noButtonProducts, setNoButtonProducts] = useState(
    <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
      NO
    </button>
  );

  const [yesButtonProducts, setYesButtonProducts] = useState(
    <button id={styles.inactive} className="p-2 px-4 font-semibold">
      YES
    </button>
  );

  const [noButtonGeolocation, setNoButtonGeolocation] = useState(
    <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
      NO
    </button>
  );

  const [yesButtonGeolocation, setYesButtonGeolocation] = useState(
    <button id={styles.inactive} className="p-2 px-4 font-semibold">
      YES
    </button>
  );

  const [noButtonDevice, setNoButtonDevice] = useState(
    <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
      NO
    </button>
  );

  const [yesButtonDevice, setYesButtonDevice] = useState(
    <button id={styles.inactive} className="p-2 px-4 font-semibold">
      YES
    </button>
  );

  const PressYesFunctional = () => {
    setYesButtonFunctional(
      <button id={styles.active} className="py-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonFunctional(
      <button id={styles.inactive} className="p-2 px-4 font-semibold mr-2">
        NO
      </button>
    );
  };

  const PressNoFunctional = () => {
    setYesButtonFunctional(
      <button id={styles.inactive} className="p-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonFunctional(
      <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
        NO
      </button>
    );
  };

  const PressYesAdvertising = () => {
    setYesButtonAdvertising(
      <button id={styles.active} className="py-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonAdvertising(
      <button id={styles.inactive} className="p-2 px-4 font-semibold mr-2">
        NO
      </button>
    );
  };

  const PressNoAdvertising = () => {
    setYesButtonAdvertising(
      <button id={styles.inactive} className="p-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonAdvertising(
      <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
        NO
      </button>
    );
  };

  const PressYesStore = () => {
    setYesButtonStore(
      <button id={styles.active} className="py-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonStore(
      <button id={styles.inactive} className="p-2 px-4 font-semibold mr-2">
        NO
      </button>
    );
  };

  const PressNoStore = () => {
    setYesButtonStore(
      <button id={styles.inactive} className="p-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonStore(
      <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
        NO
      </button>
    );
  };

  const PressYesPersonalAds = () => {
    setYesButtonPersonalAds(
      <button id={styles.active} className="py-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonPersonalAds(
      <button id={styles.inactive} className="p-2 px-4 font-semibold mr-2">
        NO
      </button>
    );
  };

  const PressNoPersonalAds = () => {
    setYesButtonPersonalAds(
      <button id={styles.inactive} className="p-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonPersonalAds(
      <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
        NO
      </button>
    );
  };

  const PressYesPersonalContent = () => {
    setYesButtonPersonalContent(
      <button id={styles.active} className="py-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonPersonalContent(
      <button id={styles.inactive} className="p-2 px-4 font-semibold mr-2">
        NO
      </button>
    );
  };

  const PressNoPersonalContent = () => {
    setYesButtonPersonalContent(
      <button id={styles.inactive} className="p-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonPersonalContent(
      <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
        NO
      </button>
    );
  };

  const PressYesProducts = () => {
    setYesButtonProducts(
      <button id={styles.active} className="py-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonProducts(
      <button id={styles.inactive} className="p-2 px-4 font-semibold mr-2">
        NO
      </button>
    );
  };

  const PressNoProducts = () => {
    setYesButtonProducts(
      <button id={styles.inactive} className="p-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonProducts(
      <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
        NO
      </button>
    );
  };

  const PressYesGeolocation = () => {
    setYesButtonGeolocation(
      <button id={styles.active} className="py-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonGeolocation(
      <button id={styles.inactive} className="p-2 px-4 font-semibold mr-2">
        NO
      </button>
    );
  };

  const PressNoGeolocation = () => {
    setYesButtonGeolocation(
      <button id={styles.inactive} className="p-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonGeolocation(
      <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
        NO
      </button>
    );
  };

  const PressYesDevice = () => {
    setYesButtonDevice(
      <button id={styles.active} className="py-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonDevice(
      <button id={styles.inactive} className="p-2 px-4 font-semibold mr-2">
        NO
      </button>
    );
  };

  const PressNoDevice = () => {
    setYesButtonDevice(
      <button id={styles.inactive} className="p-2 px-4 font-semibold">
        YES
      </button>
    );

    setNoButtonDevice(
      <button id={styles.active} className="py-2 px-4 mr-2 font-semibold">
        NO
      </button>
    );
  };

  return (
    <div className="overflow-hidden bg-gray-400 flex flex-col items-center py-24">
      <div className="p-0 bg-white drop-shadow-2xl w-auto mx-2 md:mx-0 md:w-2/3 rounded-lg flex flex-col">
        <div className="flex flex-col items-center md:flex-row justify-between py-8 px-8 shadow-2xl">
          <Image width={100} height={30} src={F1Logo} alt="F1Logo" />

          <h1
            id={styles.heading}
            className="text-center text-lg font-bold mt-4 md:mt-0"
          >
            Your Choices Regarding Cookies on This Site
          </h1>
        </div>

        <div className="flex flex-col items-center text-left md:text-center py-8 px-8">
          <h1 id={styles.heading} className="text-lg font-bold">
            You must select YES or NO for each category before submitting
            choices
          </h1>

          <p id={styles.bodymain} className="mt-4">
            Please choose whether this site may use cookies or related
            technologies such as web beacons, pixel tags, and Flash
            objects("Cookies") as described below. You can learn more about how
            this site uses cookies and related technologies by reading our
            privacy policy linked below.
          </p>
        </div>

        <div className="flex flex-row justify-between py-4 mx-8 bg-gray-100 border-t-2 border-gray-200 px-4 items-center">
          <h1 id={styles.subheading} className="flex flex-row items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-right"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </span>
            Required Cookies
          </h1>

          <button id={styles.buttonA} className="py-2 px-8 font-semibold">
            ACTIVE
          </button>
        </div>

        <div className="flex flex-row justify-between py-4 mx-8 bg-gray-100 border-t-2 border-gray-200 px-4 items-center">
          <h1 id={styles.subheading} className="flex flex-row items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-right"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </span>
            Functional Cookies
          </h1>

          <div className="flex flex-row items-center">
            <div onClick={PressNoFunctional}>{noButtonFunctional}</div>

            <div onClick={PressYesFunctional}>{yesButtonFunctional}</div>
          </div>
        </div>

        <div className="flex flex-row justify-between py-4 mx-8 bg-gray-100 border-t-2 border-gray-200 px-4 items-center">
          <h1 id={styles.subheading} className="flex flex-row items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-right"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </span>
            Advertising Cookies
          </h1>

          <div className="flex flex-row items-center">
            <div onClick={PressNoAdvertising}>{noButtonAdvertising}</div>

            <div onClick={PressYesAdvertising}>{yesButtonAdvertising}</div>
          </div>
        </div>

        <div className="flex flex-row justify-between py-4 mx-8 bg-gray-100 border-t-2 border-gray-200 px-4 items-center">
          <h1 id={styles.subheading} className="flex flex-row items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-right"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </span>
            Purposes
          </h1>

          <h1 id={styles.subheading}>Manage Settings</h1>
        </div>

        <div className="py-2 px-8">
          <div className="flex flex-row justify-between items-center">
            <h1 id={styles.conditions}>
              We and
              <span id={styles.ourPartners} className="font-semibold">
                our partners:
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col bottom-7 md:flex md:flex-row justify-between py-2 mx-8 bg-gray-100 px-4 md:items-center">
          <h1
            id={styles.conditions}
            className="self-start md:self-center md:items-center"
          >
            Store and/or access information on a device
          </h1>

          <div className="flex flex-row self-end md:flex md:flex-row md:items-center">
            <div onClick={PressNoStore}>{noButtonStore}</div>

            <div onClick={PressYesStore}>{yesButtonStore}</div>
          </div>
        </div>

        <div className="py-2 px-8">
          <div className="flex flex-row justify-between items-center">
            <h1 id={styles.conditions} className="">
              We and
              <span id={styles.ourPartners} className="font-semibold">
                our partners
              </span>
              process personal data such as IP Address, Unique ID, browsing data
              for:
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between py-2 mx-8 bg-gray-100 px-4 md:items-center">
          <h1
            id={styles.conditions}
            className="self-start md:self-center md:items-center "
          >
            Personalised ads, ad measurement, and audience insights
          </h1>

          <div className="self-end flex flex-shrink md:flex-row md:items-center md:bottom-0 md:flex">
            <div onClick={PressNoPersonalAds}>{noButtonPersonalAds}</div>

            <div onClick={PressYesPersonalAds}>{yesButtonPersonalAds}</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between py-2 mx-8 bg-gray-100 px-4 items-center">
          <h1
            id={styles.conditions}
            className="self-start md:self-center md:items-center "
          >
            Personalised content, and content measurement
          </h1>

          <div className="flex flex-row self-end md:flex md:flex-row md:items-center">
            <div onClick={PressNoPersonalContent}>
              {noButtonPersonalContent}
            </div>

            <div onClick={PressYesPersonalContent}>
              {yesButtonPersonalContent}
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between py-2 mx-8 bg-gray-100 px-4 items-center">
          <h1 id={styles.conditions} className="">
            Develop and improve products
          </h1>

          <div className="flex flex-row items-center ">
            <div onClick={PressNoProducts}>{noButtonProducts}</div>

            <div onClick={PressYesProducts}>{yesButtonProducts}</div>
          </div>
        </div>

        <div className="py-2 px-8">
          <div className="flex flex-row justify-between items-center ">
            <h1 id={styles.conditions}>
              Your consent is required for all purposes above but we have
              legitimate business interest for the items below:
            </h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between py-2 mx-8 bg-gray-100 px-4 md:items-center">
          <h1
            id={styles.conditions}
            className="self-start md:self-center md:items-center "
          >
            Use precise geolocation data
          </h1>

          <div className="flex flex-row self-end md:flex md:flex-row md:items-center">
            <div onClick={PressNoGeolocation}>{noButtonGeolocation}</div>

            <div onClick={PressYesGeolocation}>{yesButtonGeolocation}</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between py-2 mx-8 bg-gray-100 px-4 md:items-center">
          <h1
            id={styles.conditions}
            className="self-start md:self-center md:items-center "
          >
            Actively scan device characteristics for identification
          </h1>

          <div className="flex flex-row self-end md:flex md:flex-row md:items-center">
            <div onClick={PressNoDevice}>{noButtonDevice}</div>

            <div onClick={PressYesDevice}>{yesButtonDevice}</div>
          </div>
        </div>

        <div className="pt-4 pb-2 px-8">
          <div className="flex flex-row justify-between items-center">
            <h1 id={styles.conditions} className="">
              Some partners do not ask for your consent to process your data,
              instead, they rely on their legitimate business interest. View our
              list of partners to see the purposes they believe they have a
              legitimate interest for and how you can object to it.
            </h1>
          </div>
        </div>

        <div className="pt-2 pb-8 px-8">
          <div className="flex flex-row justify-between items-center">
            <h1 id={styles.conditions} className="">
              Your choices on this site will be applied globally. This means
              that your settings will be available on other sites that set your
              choices globally. You can change your mind and revisit your
              preferences at any time by accessing the "Cookie Preferences" link
              in the footer of this site.
            </h1>
          </div>
        </div>

        <div
          id={styles.footer}
          className="flex flex-col w-full items-center rounded-b-lg overflow-hidden"
        >
          <div className="py-8 px-8 flex flex-col items-center md:flex-row justify-between rounded-b-lg overflow-hidden w-full">
            <button
              id={styles.mainButton}
              className="w-full md:w-1/3 py-2 px-4 mb-2 md:mb-0 md:mr-2 rounded-lg shadow-xl hover:bg-white hover:text-black"
            >
              Save and exit
            </button>
            <button
              id={styles.mainButton}
              className="w-full md:w-1/3  py-2 px-4 mb-2 md:mb-0 md:mr-2 rounded-lg shadow-xl hover:bg-white hover:text-black"
            >
              Reject All
            </button>
            <button
              id={styles.mainButton}
              className="w-full md:w-1/3 py-2 px-4  rounded-lg shadow-xl hover:bg-white hover:text-black"
            >
              Accept All
            </button>
          </div>

          <div className="bg-gray-100 w-full flex-row justify-between items-center px-8 py-4 hidden md:flex">
            <h1 id={styles.privacyPolicy} className="font-semibold">
              Privacy Policy
            </h1>

            <h1 id={styles.poweredBy} className="text-right flex flex-row">
              <span className="self-start mr-2 text-md font-semibold">
                Powered by:
              </span>
              <Image
                src={TrustArcLogo}
                alt="TrustArcLogo"
                width={150}
                height={20}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
