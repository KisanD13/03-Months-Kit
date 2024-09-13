// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// Example

function breakingRecords(scores) {
  // let minRecord = scores[0];
  // let maxRecord = scores[0];

  // let minBreaks = 0;
  // let maxBreaks = 0;

  // for (let i = 1; i < scores.length; i++) {
  //   if (scores[i] > maxRecord) {
  //     maxRecord = scores[i];
  //     maxBreaks++;
  //   } else if (scores[i] < minRecord) {
  //     minRecord = scores[i];
  //     minBreaks++;
  //   }
  // }

  // return [maxBreaks, minBreaks];

  let best = 0;
  let worst = 0;
  let bestScore = scores[0];
  let worstScore = scores[0];

  scores.map((el) =>
    el < worstScore
      ? ((worst += 1), (worstScore = el))
      : el > bestScore
      ? ((best += 1), (bestScore = el))
      : null
  );

  return [best, worst];
}
