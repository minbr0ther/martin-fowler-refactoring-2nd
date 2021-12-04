export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

export function photoDiv(p) {
  return ['<div>', zznew(p), '</div>'].join('\n');
}

function zzemitPhotoDatanew(aPhoto) {
  return [
    `<p>title: ${aPhoto.title}</p>`,
    `<p>location: ${aPhoto.location}</p>`,
    `<p>date: ${aPhoto.date.toDateString()}</p>`,
  ].join('\n');
}

function renderPhoto(aPhoto) {
  return '';
}
