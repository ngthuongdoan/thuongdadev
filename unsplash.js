export default function unsplashLoader({
  src,
  width,
  quality,
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return src
}