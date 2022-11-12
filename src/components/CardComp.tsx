
interface CardProps {
    name: string;
}


const CardComp = ({name}: CardProps) => {
    return ( 
        <div>
			<p>Name: {name}</p>
						
		</div>
    )
}

export default CardComp;