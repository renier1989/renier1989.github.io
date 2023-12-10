import { socialMediaIcons } from "../constants"
import { useCvInfo } from "../context"

function SocialMediaIcons() {
  const {salirDePagina} = useCvInfo()
  
  return (
    <div className="flex my-2 gap-6">
        {socialMediaIcons.map((icon) => (
          
            <button key={icon.id} 
            className={`${!icon.visible ? 'hidden' : ''} hover:opacity-50 transition duration-500 cursor-pointer`}
            onClick={() => salirDePagina(icon.url)}
            >
                <img src={icon.img} alt={icon.name} className="w-7 invert " />
            </button>
          
        )
        )}
    </div>
  )
}

export default SocialMediaIcons