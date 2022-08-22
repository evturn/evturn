import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import styles from './Player.css';

type Props = {
  children?: React.ReactNode;
  urls: string[];
};

const VideoPlayer = (props: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  const handlePlaying = useCallback((e: Event) => {
    if (ref.current) {
      ref.current.playbackRate = 0.65;
    }
  }, []);

  const handleEnded = useCallback(() => {
    const next = index >= props.urls.length - 1 ? 0 : index + 1;

    setIndex(next);
  }, [
    index,
    props.urls.length,
    setIndex,
  ]);

  const handleLoadedData = useCallback(() => {
    process.env.__DEV__ && console.log('loadeddata');
  }, []);

  const handleLoadStart = useCallback(() => {
    process.env.__DEV__ && console.log('loadstart');
  }, []);

  const src = useMemo(() => {
    return props.urls[index];
  }, [
    index,
    props.urls,
  ]);

  useEffect(() => {
    const player = ref.current;

    if (!player) return;

    player.addEventListener('loadeddata', handleLoadedData);
    player.addEventListener('ended', handleEnded);
    player.addEventListener('playing', handlePlaying);
    player.addEventListener('loadstart', handleLoadStart);

    return () => {
      player.removeEventListener('loadeddata', handleLoadedData);
      player.removeEventListener('ended', handleEnded);
      player.removeEventListener('playing', handlePlaying);
      player.removeEventListener('loadstart', handleLoadStart);
    };

  }, [
    handleEnded,
    handleLoadedData,
    handlePlaying,
    handleLoadStart,
    ref,
  ]);

  return (
    <div className={styles.root}>
      <video
        autoPlay
        className={styles.video}
        muted
        playsInline
        preload="auto"
        ref={ref}
        src={src} />
      <div className={styles.overlay}>
        {props.children}
      </div>
    </div>
  );
};

export const Player = (props: Props) => {
  const urls = props.urls.map(filename => require(`@static/videos/${filename}`));

  return (
    <VideoPlayer
      {...props}
      urls={urls} />
  );
};