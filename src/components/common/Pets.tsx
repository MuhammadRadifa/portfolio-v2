import Image from 'next/image'
import chicken from '@/Assets/Pets/white_walk_8fps.gif'
import snail from '@/Assets/Pets/brown_walk_8fps.gif'
import whiteDog from '@/Assets/Pets/white_run_8fps.gif'
import brownDog from '@/Assets/Pets/brown_walk_dog_8fps.gif'
import lieFox from '@/Assets/Pets/red_lie_8fps.gif'
import akitaDog from '@/Assets/Pets/akita_swipe_8fps.gif'
import turle from '@/Assets/Pets/green_walk_8fps.gif'

export default function Pets() {
  return (
    <div className="relative -z-10 mx-10 w-full translate-y-14 items-end px-10 pr-24">
      <div className="absolute bottom-0 w-full animate-walk-chicken ">
        <Image
          src={chicken}
          height={100}
          width={100}
          className="h-10 w-10 -scale-x-100 animate-flip-chicken"
          alt="chicken"
        />
      </div>
      <div className="absolute bottom-0 -z-10 w-full animate-walk-snail">
        <Image
          src={snail}
          height={100}
          width={100}
          className="h-12 w-12 -scale-x-100 animate-flip-snail"
          alt="snail"
        />
      </div>
      <div className="absolute bottom-0 -z-10 w-full animate-run-dog">
        <Image
          src={whiteDog}
          height={100}
          width={100}
          className="h-12 w-16 -scale-x-100 animate-flip-dog-reverse"
          alt="dog"
        />
      </div>
      <div className="absolute bottom-0 -z-10 w-full animate-walk-dog">
        <Image
          src={brownDog}
          height={100}
          width={100}
          className="h-8 w-12 -scale-x-100 animate-flip-dog"
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
      <div className="absolute bottom-0 -z-10 w-full">
        <Image
          src={akitaDog}
          height={100}
          width={100}
          className="h-12 w-16 translate-x-56 scale-x-100"
          alt="fox"
        />
      </div>
      <div className="animate-walk-turle absolute bottom-0 -z-10 w-full">
        <Image
          src={turle}
          height={100}
          width={100}
          className="animate-flip-turle h-12 w-16 translate-x-56 scale-x-100"
          alt="fox"
        />
      </div>
    </div>
  )
}
