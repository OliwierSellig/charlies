import styles from "./aboutVideo.module.scss";

function AboutVideo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Get to know us better</h2>
          <img
            className={styles.arrow}
            src="/svg/curved-arrow-right.svg"
            alt="Arrow right"
          />
        </div>
        <div className={styles.video}>
          <button className={styles.play} aria-label="Play Video" />
          <span className={styles.time}>1:04</span>
          <div className={styles.yt}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=wILctVNM0cjFDJ2t"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutVideo;
