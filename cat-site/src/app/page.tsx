import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <>
      <div className="flex justify-around animate-appear mx-auto max-w-screen-lg items-center">
        <div className="md:mx-8 sm:mx-4">
          <h1 className="font-Lexend text-purple-900 font-black text-6xl text-left my-6">welcome to the cat cafe!</h1>
          <p className="font-serif text-gray-900"><strong>Our Mission: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Image src={"/ajax.png"} alt="ajax" width={400} height={400} className="rounded-lg shadow-lg"></Image>
      </div>

    </>
  );
}