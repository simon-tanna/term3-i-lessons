function gimme (triplet, index) {
    const index_of_triplet = triplet.indexOf(index)
      if (triplet[0] > triplet[1] && triplet[0] < triplet[2]) {
        return index_of_triplet[0];
        }
      else if (triplet[0] > triplet[2] && triplet[0] < triplet[1]) {
        return triplet[0];
        }
      else if (triplet[1] > triplet[0] && triplet[1] < triplet[2]) {
        return triplet[1];
        }
      else if (triplet[1] < triplet[0] && triplet[1] > triplet[2]) {
        return triplet[1];
        }
      else if (triplet[2] > triplet[0] && triplet[1] < triplet[2]) {
        return triplet[2];
        }
      else if (triplet[2] < triplet[0] && triplet[1] > triplet[2]) {
        return triplet[2];
        }
    }

let triplet = [2,5,1]

console.log(gimme(triplet))