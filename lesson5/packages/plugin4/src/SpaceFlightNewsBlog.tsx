import React, {useEffect, useState} from 'react';

type BlogItem = {
    id: string;
    title: string;
    url: string;
}

type Props = {
    proxyUrl?: string;
}

export default ({ proxyUrl }: Props) => {
    const [blogItems, setBlogItems] = useState<Array<BlogItem>>([]);
    useEffect(() => {
        fetch(`${proxyUrl ?? 'https://api.spaceflightnewsapi.net/v3/blogs'}?_limit=3`)
            .then((r) => r.json())
            .then((items) => setBlogItems(items))
            .catch((e) => {
                console.error('Fetching Blog items failed!', e);
            })
    }, []);
    return (
        <div>
            {blogItems.map((item) => (
                <div>
                    <a href={item.url} target="_blank">{item.title}</a>
                </div>
            ))}
        </div>
    )
};
