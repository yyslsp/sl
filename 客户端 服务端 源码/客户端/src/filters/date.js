import fillzero from './fillezero'
export default time => {
  let d = new Date();
  d.setTime(time);
  return d.getFullYear() + ':' +  fillzero(d.getMonth()+1)
}