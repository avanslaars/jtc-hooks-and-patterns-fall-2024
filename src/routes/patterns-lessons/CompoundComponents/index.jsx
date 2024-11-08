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
				<ModalTrigger>Show Me the Modal</ModalTrigger>
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
