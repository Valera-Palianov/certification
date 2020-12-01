export default (distance: number) => {
  if(distance === 0) {
    return "You're here"
  }
  return `${Math.trunc(distance / 1000)} km`
}