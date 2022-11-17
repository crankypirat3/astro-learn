 interface skillProps {
    imageLink: string,
    name: string
 }
 
 
 const Skill = ({name, imageLink}: skillProps) => {
    return (
        <div className="hover:cursor-pointer ">
            <img className="w-20 h-20 rounded-full shadow-cyan-800 shadow-2xl " src={imageLink} alt="image link" />
        </div>
    )
}

export default Skill;