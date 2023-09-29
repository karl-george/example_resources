import { Skeleton } from '@/components/ui/skeleton';

interface loadingProps {}

function loading({}: loadingProps) {
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <Skeleton className='w-full h-[274px] rounded-lg bg-red-500' />
      </section>
      <section className='mt-6 w-full flex-col flex sm:mt-20'>
        <Skeleton className='h-10 w-56 bg-red-500' />
        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
          <Skeleton className='h-[440px] w-full sm:w-[356px] bg-red-500' />
          <Skeleton className='h-[440px] w-full sm:w-[356px] bg-red-500' />
          <Skeleton className='h-[440px] w-full sm:w-[356px] bg-red-500' />
          <Skeleton className='h-[440px] w-full sm:w-[356px] bg-red-500' />
        </div>
      </section>
    </main>
  );
}

export default loading;
