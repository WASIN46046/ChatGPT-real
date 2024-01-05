import Link from "next/link";
import stacks from "../data/stacks.json";
import Image from "next/image";

export default function Home() {
  const renderStacks = () => {
    return Object.keys(stacks).map((stackKey) => {
      const stack = stacks[stackKey];
      return (
        <Link 
          key={stack.href}
          href={stack.href}
          className="w-40 h-40 relative border-2 border-solid m-2 rounded-xl"
        >
          <Image 
            src={stack.logo} 
            className="object-cover p-2" 
            fill 
            alt="" 
          />
        </Link>
      )
    })
  }

  return (

    <div className="h-full flex justify-center items-center flex-col">
      <div>Who should I choose?</div>
      <div className="flex">
      {renderStacks()}
      </div>
    </div>
)
};