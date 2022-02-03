export default function formatDate(date: string | Date) {
  const dateVal: Date = date ? new Date(date) : new Date();
  let day = dateVal.getDate();
  let month = dateVal.getMonth() + 1;
  let year = dateVal.getFullYear();

  const formattedDate =
    (day < 10 ? "0" + day : day) +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    year;

  return formattedDate;
}
