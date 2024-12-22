import NextImage from 'next/image';
import { Whatsapp } from 'lucide-react';

function WhatsappComponent() {

    return (
        <>
            <div
                className='fixed bottom-10 right-4 lg:bottom-12 lg:right-12 z-50 size-12'
            >
                <a href="https://api.whatsapp.com/send?phone=+5491140780930&text=%20"
                    target="_blank" rel="noopener noreferrer">

                    <NextImage
                        src="/whatsapp.svg"
                        alt="whatsapp logo"
                        width={70}
                        height={70}
                    // className="ml-6 transition-transform duration-700 "
                    // style={{
                    //   transformOrigin: 'center bottom', // Set transform origin to center bottom
                    // }}
                    />

                </a>
            </div>
        </>
    );
}

export default WhatsappComponent;