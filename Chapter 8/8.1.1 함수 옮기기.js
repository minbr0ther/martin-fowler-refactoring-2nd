function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace,
  };

  function distance(p1, p2) {} // 두 지점의 거리 계산
  function radians(degrees) {} // 라디안 값으로 변환
  function calculateTime() {} // 총 시간 계산
}

function totalDistance(points) {
  //내부에서 최상위로 꺼냄
  // 총 거리 계산
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;

  function distance(p1, p2) {
    // 하버사인 공식 (haversine formula)은 다음 사이트를 참고하자.
    // http://www.movable-type.co.uk/scripts/latlong.html
    const EARTH_RADIUS = 3959; // 90: 0(mile)
    const dlat = radians(p2.lat) - radians(p1.lat);
    const dlon = radians(p2.lon) - radians(p1.lon);
    const a =
      Math.pow(Math.sin(dlat / 2), 2) +
      Math.cos(radians(p2.lat)) *
        Math.cos(radians(p1.lat)) *
        Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * C;
  }

  function radians(degrees) {
    return (degrees * Math.PI) / 180;
  }
}
