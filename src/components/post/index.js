import { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Image from './Image';

export default function Post({ content }) {
    

    return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
    
    <Header username={content.username} />
    <Image src={content.src} caption={content.caption}/>
    </div>
    )
}

Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        userLikedPhoto: PropTypes.bool.isRequired,
        likes: PropTypes.array.isRequired,
        comments: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired
    })
};