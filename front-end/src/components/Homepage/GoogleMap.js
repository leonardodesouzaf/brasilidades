import React from 'react';

export default function GoogleMap({ src }) {
  return (
    <iframe src={src} width="840" height="350" style={{ borderRadius: '5px' }} allowFullScreen="" loading="" referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
}
