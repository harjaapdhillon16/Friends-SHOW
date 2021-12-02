export function scrollToSmoothly(pos: number, time: number) {
  const currentPos = window.pageYOffset;
  let start: number | null = null;
  if (time == null) time = 500;
  // eslint-disable-next-line no-unused-expressions
  pos = +pos;
  time = +time;
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    const progress = currentTime - start;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
    }
  });
}
