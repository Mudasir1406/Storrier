import React from 'react';
import NewsletterHeader from '../Newsletter-header/NewsletterHeader'
import NewsletterFooter from '../Newsletter-Footer/NewsletterFooter'
import NewsletterContent from '../Newsletter-content/NewsletterContent';

const NewsletterIndex = () => {
    return (
        <>
            <NewsletterHeader />
            <NewsletterContent />
            <NewsletterFooter />
        </>
    )
}

export default NewsletterIndex