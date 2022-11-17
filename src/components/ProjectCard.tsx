import {AiFillGithub} from 'react-icons/ai/index.js';




    

type Props = {
    name: string,
    imageLink: any,
    projectLink: string,
    projectGithubLink: string,
    tags: Array<string>,
}

 const ProjectCard = ({name, imageLink, projectLink, projectGithubLink, tags}: Props) => {
    return (
            <div className="w-[320px] flex flex-col shrink-0 m-4 bg-white py-4 rounded-lg">
            <div  className="h-40 w-full bg-blue-200">
                <img className='h-full w-full' src={imageLink} alt="" />
            </div>
            <h3 className="py-2 text-center">{name}</h3>
                <div className='w-full h-[100px] flex flex-wrap items-start my-2 overflow-hidden'>
                        {
                            tags.map((tag) => (
                                <p className=' grow-0 m-1 px-2 py-1 border border-gray-500 bg-stone-100 text-gray-800  border-opacity-50'>{tag}</p>
                            ))
                        }
                </div>
            <div className=" relative p-1 flex justify-center items-center w-full mt-auto text-center ">
                <a target="_blank" href={projectLink} className="py-3 px-4 mx-auto text-white rounded-xl bg-red-400 hover:bg-red-600 z-0">Visit Site</a>
                <a target="_blank"  href={projectGithubLink}  className="absolute right-2 hover:text-red-600  top-1/2  transform -translate-y-1/2 hover:cursor-pointer">
                    <AiFillGithub size={"1.8em"} />
                </a>
            </div>
        
        </div>
            
       
        
       
    )
}

export default ProjectCard;