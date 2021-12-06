function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhtoData(outStream, photo);
  outStream.write(`<p>위치: ${photo.Location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff)
    .forEach((p) => {
      outStream.write('<div>\n');
      emitPhtoData(outStream, photo);
      outStream.write(`<p>위치: ${photo.Location}</p>\n`);
      outStream.write('</div>\n');
    });
}

function emitPhtoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}
