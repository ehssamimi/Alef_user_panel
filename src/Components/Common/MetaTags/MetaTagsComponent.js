import React, {useState, useEffect} from 'react';
import MetaTags from 'react-meta-tags';

const MetaTagsComponent = (props) => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <MetaTags>
                <title>احسان صمیمی</title>
                <meta name="description" content="آکادمی آنلاین کلید مرجعی برای آموزش آنلاین" />
                <meta property="og:title" content="احسان صمیمی " />
                {/*<meta property="og:image" content="path/to/image.jpg" />*/}
            </MetaTags>
        </div>
    );
};

export default MetaTagsComponent;