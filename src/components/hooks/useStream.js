import {useEffect, useRef} from 'react';

/**
 * Custom hook that returns a media element reference with given stream object attached to it.
 *
 * @param {MediaStream} stream  Media stream instance to pass to the audio/video reference.
 * @returns {Element} Video element reference
 */
export default function useStream(stream) {
  const streamRef = useRef({});

  useEffect(() => {
    const mediaElement = streamRef.current || null;

    if (mediaElement && stream instanceof MediaStream) {
      mediaElement.srcObject = stream;
    }
  }, [stream]);

  return streamRef;
}
