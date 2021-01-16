export default function timeConversion(value) {
  const minutes = Math.floor(value / (1000 * 60));
  const hours = Math.floor(value / (1000 * 60 * 60));
  const days = Math.floor(value / (1000 * 60 * 60 * 24));

  const resMinutes = minutes - (60 * hours);
  const resHours = hours - (24 * days);

  if (minutes < 60) {
    return `${minutes} мин`;
  } else if (hours < 24) {
    return `${resMinutes} мин, ${hours} ч`;
  } else {
    return `${resMinutes} мин, ${resHours} ч, ${days} дней`;
  }
}
