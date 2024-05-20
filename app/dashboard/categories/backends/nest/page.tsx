import Link from "next/link"

export default function Nest() {

    const backendLanguages = [
        {
          "title": "NestJS",
          "linkToDocs": "https://docs.nestjs.com/",
          "videoUrl": "https://www.youtube.com/watch?v=4xyLmIcxvX4",
          "imageUrl": "https://nestjs.com/img/logo_text.svg",
          "content": "Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses TypeScript and is heavily inspired by Angular."
        },
        {
          "title": "Express.js",
          "linkToDocs": "https://expressjs.com/",
          "videoUrl": "https://www.youtube.com/watch?v=L72fhGm1tfE",
          "imageUrl": "https://expressjs.com/images/express-facebook-share.png",
          "content": "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
        },
        {
          "title": "Django",
          "linkToDocs": "https://docs.djangoproject.com/en/3.2/",
          "videoUrl": "https://www.youtube.com/watch?v=UmljXZIypDc",
          "imageUrl": "https://www.djangoproject.com/s/img/logos/django-logo-negative.png",
          "content": "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the model-template-views architectural pattern."
        },
        {
          "title": "Node.js",
          "linkToDocs": "https://nodejs.org/en/docs/",
          "videoUrl": "https://www.youtube.com/watch?v=uVwtVBpw7RQ",
          "imageUrl": "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg",
          "content": "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript for server-side scripting."
        }
      ]
      
    return(
        <div className='p-6 max-w-sm'>
             <div>
      <h2 className="text-3xl font-semibold mb-2">NestJS</h2>

      <p className="text-gray-400 text-xl">
      Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses TypeScript and is heavily inspired by Angular The video  below will teach you the core basics of Nest and how to integrate it with typeorm.
        </p>
        <img src="https://nestjs.com/img/logo_text.svg" alt='nest' className="mt-4 mx-auto max-w-full" />

      <div className="mt-4">
        <p> click here for docs</p>
        <span><a href="https://docs.nestjs.com/" target="_blank" rel="noopener noreferrer" className=" my-6 text-blue-500 font-semibold hover:underline">Documentation</a></span>
        <br />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9MGKKJTwicM?si=h7cL1xRx5VGoRnSl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </div>


    </div>
        </div>
    )
}