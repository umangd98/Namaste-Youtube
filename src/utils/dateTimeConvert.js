



export const formattedDate = (inDate) => {
  const date = new Date(inDate);
  const now = new Date();

  const timeDifference = now - date;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years >= 1) {
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  } else if (months >= 1) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else if (days >= 1) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else {
    return 'Today';
  }
}

export function formatTimestampToReadableDate(timestamp) {
  const date = new Date(timestamp);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  return date.toLocaleString('en-US', options);
}