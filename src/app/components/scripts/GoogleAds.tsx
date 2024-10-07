import Script from 'next/script';

export default function GoogleAds() {
    const GADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    
    return (
        <>
            {/* External Google Analytics Script */}
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
                strategy='afterInteractive'
            ></Script>

            {/* Google Analytics Configuration */}
            <Script 
                id="google-analytics" 
                strategy='afterInteractive'
            >
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GADS_ID}');
                `}
            </Script>
        </>
    );
}
