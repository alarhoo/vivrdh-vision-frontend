import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center p-6 w-11/12 mx-auto h-[45vh]'>
      <h2 className='text-4xl text-zinc-950'>404: Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='underline text-slate-950 text-2xl' href='/'>Return Home</Link>
    </div>
  );
}
