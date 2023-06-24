import React from 'react';

export const TrustBox = () => {
    return (
        <>
            <div
                className="trustpilot-widget flex flex-col items-center justify-center font-bold h-24 w-full text-center text-xl bg-blue-100 text-black sm:flex-row sm:text-2xl"
                data-locale="en-US"
                data-template-id="5419b6a8b0d04a076446a9ad"
                data-businessunit-id="64959d6e980d04b390ffbee4"
                data-theme="light"
                data-min-review-count="10"
                data-without-reviews-preferred-string-id="2"
                data-style-alignment="center"
            >
                <p className="mb-1">Check out Evakon on</p>
                <a
                    href="https://www.trustpilot.com/review/evakon.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                >
                    Trustpilot
                </a>
            </div>
        </>
    );
};
