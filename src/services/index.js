// #region Deck of Cards API
export async function getCardDeck(numberOfDecks = 1) {
	return await fetch(
		`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numberOfDecks}`,
	).then((res) => res.json())
}

// sample response
// {
//   "success": true,
//   "deck_id": "3p40paa87x90",
//   "shuffled": true,
//   "remaining": 52
// }

export async function drawCards(deckId = "new", count = 5) {
	return await fetch(
		`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`,
	).then((res) => res.json())
}

// Sample response
// {
//   "success": true,
//   "deck_id": "kxozasf3edqu",
//   "cards": [
//       {
//           "code": "6H",
//           "image": "https://deckofcardsapi.com/static/img/6H.png",
//           "images": {
//                         "svg": "https://deckofcardsapi.com/static/img/6H.svg",
//                         "png": "https://deckofcardsapi.com/static/img/6H.png"
//                     },
//           "value": "6",
//           "suit": "HEARTS"
//       },
//       {
//           "code": "5S",
//           "image": "https://deckofcardsapi.com/static/img/5S.png",
//           "images": {
//                         "svg": "https://deckofcardsapi.com/static/img/5S.svg",
//                         "png": "https://deckofcardsapi.com/static/img/5S.png"
//                     },
//           "value": "5",
//           "suit": "SPADES"
//       }
//   ],
//   "remaining": 50
// }

export async function reShuffleCards(deckId) {
	return await fetch(
		`https://deckofcardsapi.com/api/deck/${deckId}/draw/?remaining=true`,
	).then((res) => res.json())
}
// sample response
// {
//   "success": true,
//   "deck_id": "3p40paa87x90",
//   "shuffled": true,
//   "remaining": 52
// }

// #endregion

// #region Fake weather API
export function getWeather(location = "ny") {
	const weatherData = {
		ny: {
			location: {
				name: "New York, NY",
			},
			current: {
				temp_c: 17,
				temp_f: 63,
			},
		},
		sd: {
			location: {
				name: "San Diego, CA",
			},
			current: {
				temp_c: 24,
				temp_f: 75,
			},
		},
	}
	if (location !== "ny" && location !== "sd") {
		return new Promise((res, rej) => {
			setTimeout(() => {
				rej({ message: `could not load data for location: ${location}` })
			}, 2000)
		})
	}
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(weatherData[location])
		}, 1000)
	})
}
// #endregion

// #region Star Wars API (swapi)
export async function getCharacters() {
	return fetch(`https://swapi.dev/api/people/`)
		.then((res) => res.json())
		.then((json) => json.results)
}
// #endregion
