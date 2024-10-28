import {
	ModalProvider,
	ModalTrigger,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "./Modal"

export default function Context() {
	return (
		<div>
			<ModalProvider>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
					reprehenderit porro reiciendis laudantium rem laborum quasi ea sed,
					provident nostrum expedita temporibus repellendus error, atque neque
					quisquam corrupti. Esse, cumque.
				</p>

				<ModalTrigger>Show Me the Modal</ModalTrigger>

				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sed
					eaque laborum, illo expedita vero placeat tenetur omnis inventore
					maiores neque! Quo ipsa saepe possimus! Voluptates, debitis. Vel,
					perferendis nemo.
				</p>
				<Modal>
					<ModalHeader title="Sample Modal" />
					<ModalBody>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
							magnam, porro vel corrupti accusamus minima omnis eligendi
							pariatur nemo cumque impedit, distinctio exercitationem adipisci
							officiis veritatis repellat cum ratione voluptatem?
						</p>
					</ModalBody>
					<ModalFooter>fine print</ModalFooter>
				</Modal>
			</ModalProvider>
		</div>
	)
}
