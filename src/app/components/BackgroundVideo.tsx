export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      id="beast-video"
      className="fixed bottom-0 left-0 right-0 top-0 -z-10 min-h-full min-w-full object-cover"
    >
      <source src="./wolf-running.mp4" type="video/mp4" />
    </video>
  );
}
