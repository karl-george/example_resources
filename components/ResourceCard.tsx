import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface ResourceCardProps {
  id: string;
  title: string;
  image: string;
  slug: string;
  downloadNumber: number;
}

function ResourceCard({
  id,
  title,
  image,
  slug,
  downloadNumber,
}: ResourceCardProps) {
  return (
    <Card className='w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]'>
      <Link href={`/resource/${id}`}>
        <CardHeader>
          <div>
            <Image
              src={image}
              className='h-full rounded-md object-contain'
              width={384}
              height={440}
              alt='title'
            />
          </div>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </Link>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default ResourceCard;
