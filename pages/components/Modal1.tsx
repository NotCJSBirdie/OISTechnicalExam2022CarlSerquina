import styles from "../../styles/Modal1.module.css";
import { useState } from "react";

const Modal1 = () => {
  const [buttonA, setButtonA] = useState(false);

  return (
    <div className="overflow-hidden bg-gray-400 flex flex-col items-center ">
      <div
        id={styles.modal1entire}
        className=" bg-white shadow-2xl w-auto md:w-2/3 rounded-lg  flex flex-col"
      >
        <div className=" flex flex-col items-center text-center">
          <h1 id={styles.modal1titleA} className="md:mx-32 text-xl px-8">
            YOUR CHOICES REGARDING COOKIES ON THIS SITE
          </h1>

          <p id={styles.modal1body} className="pt-4 px-8 font-medium">
            Please choose whether this site may use cookies or related
            technologies such as web beacons, pixel tags, and Flash
            objects("Cookies") as described below. You can learn more about how
            this site uses cookies and related technologies by reading our
            <span className="font-bold" id={styles.modal1privacypolicy}>
              privacy policy
            </span>
            .
          </p>

          <p id={styles.modal1body} className="pt-4 px-8 font-medium">
            Your choices on this site will be applied globally. You can change
            your mind and revisit your preferences at any time by accessing the
            "Cookie Preferences" link in the footer of this site.
          </p>

          <h1 className="pt-4 font-semibold" id={styles.modal1titleB}>
            WE AND OUR PARTNERS
          </h1>

          <p className="pt-4 px-8 font-medium" id={styles.modal1bodyC}>
            We and
            <span className="font-bold" id={styles.modal1privacypolicy}>
              our partners
            </span>
            : process personal data such as IP Address, Unique ID, browsing data
            for: Store and/ or access information on a device, Personalised ads,
            ad measurement, and audience insights | Personalised content, and
            content measurement | Use precise geolocation data | Actively scan
            device characteristics for identification.
          </p>
        </div>

        <div
          id={styles.modal1footer}
          className="flex flex-col md:flex-row justify-between items-center  "
        >
          <div
            className="md:w-auto w-full md:order-1 order-2"
            onMouseEnter={() => {
              setButtonA(!buttonA);
            }}
            onMouseLeave={() => {
              setButtonA(!buttonA);
            }}
          >
            {buttonA ? (
              <button
                id={styles.modal1buttonA}
                type="button"
                className=" w-full md:w-auto items-center md:text-left text-center rounded-lg bg-white py-2 pl-4 pr-2 md:order-1 order-2 overflow-visible"
              >
                <div className="flex flex-col items-center">
                  <div className="flex flex-row items-center overflow-visible font-semibold">
                    NO, MANAGE SETTINGS
                    <span id={styles.modal1arrow} className="scale-150">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-right overflow-visible"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#e10600"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            ) : (
              <button
                id={styles.modal1buttonA}
                type="button"
                className=" w-full md:w-auto items-center md:text-left text-center rounded-lg bg-white py-2 pl-4 pr-2 md:order-1 order-2 overflow-visible "
              >
                <div className="flex flex-col items-center">
                  <div className="flex flex-row items-center overflow-visible font-semibold">
                    NO, MANAGE SETTINGS
                    <span id={styles.modal1arrow}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-right overflow-visible"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#e10600"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            )}
          </div>

          <button
            id={styles.modal1buttonB}
            type="button"
            className=" w-full md:w-auto rounded-lg py-2 px-4 md:order-2 order-1 font-semibold"
          >
            ACCEPT ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
