import Script from 'next/script';

export default function GoogleAnalytics() {
    const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

    return (
        <>
            {/* External Google Analytics Script */}
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            ></Script>

            {/* Google Analytics Configuration */}
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_ID}');
                `}
            </Script>
        </>
    );
}
