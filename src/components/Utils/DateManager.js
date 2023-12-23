export default function DateManager(date = "2000-01-01") {
  const dateObj = new Date(date);

  let day = dateObj.getDate() + 1;
  let month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const dayOfWeekObj = dateObj.getDay();

  const listDaysOfWeek = [
    {
      name: "Domingo",
    },
    {
      name: "Segunda-feira",
    },
    {
      name: "Terça-feira",
    },
    {
      name: "Quarta-feira",
    },
    {
      name: "Quinta-feira",
    },
    {
      name: "Sexta-feira",
    },
    {
      name: "Sábado",
    },
  ];

  const dayOfWeek = listDaysOfWeek[dayOfWeekObj].name;

  day = String(day).padStart(2, "0");
  month = String(month).padStart(2, "0");

  return { day, month, year, dayOfWeek };
}
