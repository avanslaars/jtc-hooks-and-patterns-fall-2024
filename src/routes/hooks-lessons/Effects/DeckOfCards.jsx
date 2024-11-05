// src/routes/hooks-lessons/Effects/DeckOfCards.jsx
import { useEffect, useState } from "react"
import { drawCards } from "@/services"

export function DeckOfCards() {
	const [cards, setCards] = useState([])

	useEffect(() => {
		const getCards = async () => {
			const cardResponse = await drawCards()
			setCards(cardResponse.cards)
		}

		getCards()
	}, [])

	return (
		<div>
			Here's your hand:
			<div className="flex">
				{cards && cards.length ? (
					cards.map((card) => {
						return <Card {...card} />
					})
				) : (
					<div className="animate-pulse">loading your hand</div>
				)}
			</div>
		</div>
	)
}

function Card(props) {
	const { image, value, suit } = props
	return <img src={image} alt={`${value} of ${suit}`} className="w-36" />
}
