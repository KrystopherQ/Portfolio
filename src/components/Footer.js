import React from 'react';

function Footer() {
    return (
        <footer className="footer items-center p-4 text-neutral-content bg-base-300">
            <div className="items-center grid-flow-col">
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://github.com/KrystopherQ" target="_blank" rel="noreferrer"><svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" width="48px" height="48px">
                    <path
                        d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg></a>
                <a href="https://www.linkedin.com/in/krystopher-quintero-955320238/" target="_blank" rel="noreferrer"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40px" height="40px">
                    <path fill="#8bb7f0" d="M2.5 2.5H37.5V37.5H2.5z" />
                    <path fill="#4e7ab5" d="M37,3v34H3V3H37 M38,2H2v36h36V2L38,2z" />
                    <path fill="#fff"
                        d="M8 16.077L13.538 16.077 13.538 27.085 13.538 32 8 32zM10.769 14.462L10.769 14.462C9.108 14.462 8 13.285 8 11.831s1.108-2.562 2.769-2.562 2.7 1.108 2.769 2.562C13.538 13.285 12.5 14.462 10.769 14.462zM32.027 32h-5.468c0 0 0-8.27 0-8.885s-.068-2.734-2.392-2.734c-2.05 0-2.392 1.982-2.392 2.734s0 8.885 0 8.885h-5.468V16.281h5.468v2.119c0 0 1.094-2.119 4.306-2.119 3.281 0 5.946 2.255 5.946 6.834V32z" />
                </svg></a>
            </div>
        </footer>
    )
}

export default Footer;