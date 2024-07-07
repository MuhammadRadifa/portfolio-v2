import Image from 'next/image'
import chicken from '@/Assets/Pets/white_walk_8fps.gif'
import snail from '@/Assets/Pets/brown_walk_8fps.gif'
import whiteDog from '@/Assets/Pets/white_run_8fps.gif'
import brownDog from '@/Assets/Pets/brown_walk_dog_8fps.gif'
import lieFox from '@/Assets/Pets/red_lie_8fps.gif'

export default function Pets() {
  return (
    <div className="relative -z-10 mx-10 w-full translate-y-14 items-end px-10 pr-24">
      <div className="animate-walk-chicken absolute bottom-0 w-full ">
        <Image
          src={chicken}
          height={100}
          width={100}
          className="animate-flip-chicken h-10 w-10 -scale-x-100"
          alt="chicken"
        />
      </div>
      <div className="animate-walk-snail absolute bottom-0 -z-10 w-full">
        <Image
          src={snail}
          height={100}
          width={100}
          className="animate-flip-snail h-12 w-12 -scale-x-100"
          alt="snail"
        />
      </div>
      <div className="animate-run-dog absolute bottom-0 -z-10 w-full">
        <Image
          src={whiteDog}
          height={100}
          width={100}
          className="animate-flip-dog-reverse h-12 w-16 -scale-x-100"
          alt="dog"
        />
      </div>
      <div className="animate-walk-dog absolute bottom-0 -z-10 w-full">
        <Image
          src={brownDog}
          height={100}
          width={100}
          className="animate-flip-dog h-8 w-12 -scale-x-100"
          alt="dog"
        />
      </div>
      <div className="absolute bottom-0 -z-10 w-full">
        <Image
          src={lieFox}
          height={100}
          width={100}
          className="h-16 w-16 translate-x-40 -scale-x-100"
          alt="fox"
        />
      </div>
    </div>
  )
}
