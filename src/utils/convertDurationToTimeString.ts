export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600); // Segundos -> Horas
  const minutes = Math.floor((duration % 3600) / 60); // Segundos -> Minutos
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
    .map(
      (unit) => String(unit).padStart(2, "0") // Adiciona um zero ao final se houverem menos de dois algarismos no número
    )
    .join(":");

  return timeString;
}
