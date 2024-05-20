import Link from "next/link"

export default function Page () {
const backendLanguages = [
    {
      "title": "NestJS",
      "link": '/Dashboard/categories/backend/nest',
      "prerequisites": "Node js, JS",
      "linkToDocs": "https://docs.nestjs.com/",
      "imageUrl": "https://nestjs.com/img/logo_text.svg",
    },
    {
      "title": "Express.js",
      "link": '/Dashboard/categories/backend/nest',
            "prerequisites": "Node js, JS",
      "linkToDocs": "https://expressjs.com/",
      "imageUrl": "https://expressjs.com/images/express-facebook-share.png",
    },
    {
      "title": "Django",
      "link": '/Dashboard/categories/backend/nest',
            "prerequisites": "Python",
      "linkToDocs": "https://docs.djangoproject.com/en/3.2/",
      "imageUrl": "https://www.djangoproject.com/s/img/logos/django-logo-negative.png",
    },
    {
      "title": "Node.js",
      "link": '/Dashboard/categories/backend/nest',
            "prerequisites": "JS",
      "linkToDocs": "https://nodejs.org/en/docs/",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
    }
  ]
  

    return(
        <div className='p-6'>
      <h1 className='text-3xl mb-4'>Backend Languages</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {backendLanguages.map((language, index) => (
    <div key={index} className='border rounded-md p-6 flex flex-col items-center justify-center'> 
    <Link href={language.link} className="">
    <img src={language.imageUrl} alt={language.title} height={200} width={200} className="" />

\      <h2 className="text-xl text-white font-semibold mb-2">{language.title}</h2>
      <p className="text-gray-700">{language.prerequisites}</p>
    
    </Link>
    </div>

  ))}
</ul>
    </div>
    )
}