export function hourDayCount(time: any): string {
  const givenTime = new Date(time);
  const now = new Date();

  const diffInMs = now.getTime() - givenTime.getTime();

  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const diffInHours = diffInMs / (1000 * 60 * 60);

  if (diffInDays >= 1) {
    return `${Math.floor(diffInDays)}일 전`;
  } else {
    return `${Math.floor(diffInHours)}시간 전`;
  }
}
