import Link from "next/link"

export default function Page () {
const mobileLanguages = [
        {
          "title": "React Native",
                    "link": '/Dashboard/categories/mobile/reactNative',
                    "prerequisites": "JS, React",
          "linkToDocs": "https://reactnative.dev/docs/getting-started",
          "videoUrl": "https://www.youtube.com/watch?v=0-S5a0eXPoc",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          "content": "React Native is a JavaScript framework for building mobile applications. It allows developers to use React along with native platform capabilities to create truly native apps."
        },
        {
          "title": "Flutter",
                    "link": '/Dashboard/categories/mobile/react',
                    "prerequisites": "JS",
          "linkToDocs": "https://flutter.dev/docs/get-started/install",
          "videoUrl": "https://www.youtube.com/watch?v=lhBdarHuPak",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
          "content": "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language."
        },
        {
          "title": "Swift",
                    "link": '/Dashboard/categories/mobile/react',
                    "prerequisites": "JS",
          "linkToDocs": "https://swift.org/documentation/",
          "videoUrl": "https://www.youtube.com/watch?v=5b91dFhZz0g",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
          "content": "Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS. It is designed to work with Apple's Cocoa and Cocoa Touch frameworks."
        },
        {
          "title": "Kotlin",
                    "link": '/Dashboard/categories/mobile/react',
                    "prerequisites": "JS",
          "linkToDocs": "https://kotlinlang.org/docs/home.html",
          "videoUrl": "https://www.youtube.com/watch?v=H_oGi8uuDpA",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
          "content": "Kotlin is a modern programming language that is used to develop Android applications. It is fully interoperable with Java and can be used along with existing Java code."
        }
      ]
      
  
  return(
        

    <div className='p-6'>
    <h1 className='text-3xl mb-4'>Mobile Languages</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {mobileLanguages.map((language, index) => (
    <div key={index} className='border rounded-md p-6 flex flex-col items-center justify-center'> 
    <Link href={language.link} className="">
    <img src={language.imageUrl} alt={language.title} height={200} width={200} className="" />
    
    <h2 className="text-xl text-white font-semibold mb-2">{language.title}</h2>
    <p className="text-gray-700 mt-8">{language.prerequisites}</p>
    
    </Link>
    </div>
    
    ))}
    </div>
    </div>
        )
}