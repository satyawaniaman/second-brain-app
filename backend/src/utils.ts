export function random(len: number) {
  const options = "qwertyuioasdfghjklzxcvbnm123456789";
  const length = options.length;

  return Array.from(
    { length: len },
    () => options[Math.floor(Math.random() * length)]
  ).join("");
}
